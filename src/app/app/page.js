"use client";

import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from "../page.module.css";
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseUnits } from 'viem';

// Minimal ERC20 ABI for transfer
const ERC20_ABI = [
  {
    "constant": false,
    "inputs": [
      { "name": "_to", "type": "address" },
      { "name": "_value", "type": "uint256" }
    ],
    "name": "transfer",
    "outputs": [{ "name": "", "type": "bool" }],
    "type": "function"
  }
];

// cUSD address on Alfajores (Celo Testnet)
const CUSD_ALFAJORES_ADDRESS = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";

export default function Dashboard() {
  const { isConnected, chain } = useAccount();
  const [prompt, setPrompt] = useState('');
  const [history, setHistory] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const { data: hash, isPending, writeContract, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  const handleSend = async () => {
    if (!prompt.trim()) return;
    
    // Add user message
    setHistory(prev => [...prev, { role: 'user', content: prompt }]);
    const currentPrompt = prompt;
    setPrompt('');
    setIsProcessing(true);

    try {
      // 1. Call AI Agent to extract intent
      setHistory(prev => [...prev, { role: 'agent', content: '🤖 Analyzing your intent...' }]);
      
      const response = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: currentPrompt })
      });
      const data = await response.json();
      
      if (data.error) throw new Error(data.error);

      const { amountInUSDC, targetCurrency, recipient } = data.structuredData;
      
      setHistory(prev => [
        ...prev,
        { role: 'agent', content: `🔍 Found optimal route for ${amountInUSDC} USDC to ${targetCurrency}. Rate: 1 USDC = 129.45 ${targetCurrency}.` }
      ]);
      
      // 2. Execute Onchain Transaction (Mocking swap by sending cUSD on Testnet)
      setHistory(prev => [
        ...prev,
        { role: 'agent', content: `⚡ Preparing onchain execution to ${recipient}... Please confirm in your wallet.` }
      ]);

      // Using parseUnits to format amount (assume 18 decimals for cUSD)
      const amountParsed = parseUnits(amountInUSDC.toString() || "0", 18);

      writeContract({
        address: CUSD_ALFAJORES_ADDRESS,
        abi: ERC20_ABI,
        functionName: 'transfer',
        args: [recipient, amountParsed],
      });

    } catch (err) {
      setHistory(prev => [...prev, { role: 'agent', content: `❌ Error: ${err.message}` }]);
      setIsProcessing(false);
    }
  };

  // Watch for transaction success
  React.useEffect(() => {
    if (hash && isConfirming) {
      setHistory(prev => [...prev, { role: 'agent', content: `⏳ Transaction submitted. Waiting for confirmation... Hash: ${hash}` }]);
    }
    if (isConfirmed) {
      setHistory(prev => [...prev, { role: 'agent', content: `✅ Swap & Transfer successful! View on Celoscan: https://alfajores.celoscan.io/tx/${hash}` }]);
      setIsProcessing(false);
    }
    if (error) {
      setHistory(prev => [...prev, { role: 'agent', content: `❌ Transaction failed or rejected.` }]);
      setIsProcessing(false);
    }
  }, [hash, isConfirming, isConfirmed, error]);

  return (
    <div className="pixel-grid-bg" style={{ minHeight: '100vh', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <a href="/" className={styles.navLogo} style={{ textDecoration: 'none' }}>
          <img src="/logo.png" alt="CeloRemit" className={styles.navLogoImg} style={{ width: 40, height: 40 }} />
          <div>
            <span className={styles.navLogoText} style={{ color: '#E0E0E0' }}>CeloRemit</span>
            <span className={styles.navLogoSub} style={{ color: '#00FFA3' }}>Dashboard</span>
          </div>
        </a>
        <ConnectButton />
      </header>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        {!isConnected ? (
          <div className={styles.heroContent} style={{ textAlign: 'center', marginTop: '10vh' }}>
            <h2>Connect Your Wallet</h2>
            <p>Please connect your Celo wallet to access the Remittance Agent.</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
              <ConnectButton />
            </div>
          </div>
        ) : (
          <div className={styles.terminal} style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '600px', backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px', overflow: 'hidden' }}>
            <div className={styles.terminalHeader} style={{ padding: '10px', backgroundColor: '#222', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className={`${styles.terminalDot} ${styles.terminalDotRed}`} style={{ marginRight: '8px' }} />
                <div className={`${styles.terminalDot} ${styles.terminalDotYellow}`} style={{ marginRight: '8px' }} />
                <div className={`${styles.terminalDot} ${styles.terminalDotGreen}`} style={{ marginRight: '16px' }} />
                <span className={styles.terminalTitle} style={{ color: '#888', fontSize: '14px' }}>celoremit-agent (Connected to {chain?.name})</span>
              </div>
              {isPending && <span style={{ color: '#00FFA3', fontSize: '12px' }}>Executing...</span>}
            </div>
            
            <div className={styles.terminalBody} style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {history.length === 0 ? (
                <div style={{ color: '#888', fontStyle: 'italic' }}>
                  Agent ready. Try saying: "Send $0.1 to 0x123... in Kenya"
                </div>
              ) : (
                history.map((msg, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    gap: '10px',
                    color: msg.role === 'user' ? '#fff' : (msg.content.includes('Error') || msg.content.includes('failed') ? '#FF5555' : '#00FFA3'),
                    wordBreak: 'break-word'
                  }}>
                    <span>{msg.role === 'user' ? '▸' : '🤖'}</span>
                    <span style={{ fontFamily: 'monospace' }}>{msg.content}</span>
                  </div>
                ))
              )}
            </div>

            <div style={{ padding: '20px', backgroundColor: '#1a1a1a', borderTop: '1px solid #333', display: 'flex', gap: '10px' }}>
              <input 
                type="text" 
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="E.g. Send 0.1 cUSD to 0x123..."
                disabled={isProcessing || isPending}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  backgroundColor: '#0a0a0a',
                  border: '1px solid #333',
                  borderRadius: '4px',
                  color: '#fff',
                  fontFamily: 'monospace'
                }}
              />
              <button 
                onClick={handleSend}
                disabled={isProcessing || isPending || !prompt.trim()}
                className="pixel-btn pixel-btn--green"
                style={{ padding: '0 24px', opacity: (isProcessing || isPending) ? 0.5 : 1 }}
              >
                {(isProcessing || isPending) ? 'Processing...' : 'Send'}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
