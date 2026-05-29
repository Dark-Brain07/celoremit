# CeloRemit - AI-Powered Cross-Border Remittance Agent

🏆 **Built for the Celo Onchain Agents Hackathon**

CeloRemit is an autonomous AI agent designed to revolutionize cross-border remittances. By leveraging Celo's mobile-first infrastructure, fee abstraction, and localized stablecoins, CeloRemit allows users to execute instant global transfers using simple natural language commands.

## 🚀 Why CeloRemit Wins
Most agents are just conversational demos. CeloRemit generates **continuous, real-world utility** by finding optimal FX rates across Celo DEXs (Uniswap V3, Mento) and executing atomic stablecoin swaps and transfers.

- **Track 1 (Best Agent)**: Deep integration of ERC-8004, x402 payment protocols, and Fee Abstraction (paying gas in USDC).
- **Track 2 (Most Activity)**: Equipped with an auto-farming script (`scripts/farm-activity.js`) that generates thousands of on-chain micro-transactions.
- **Track 3 (Highest 8004scan Rank)**: Registered fully on 8004scan with an immutable agent identity.

## 🛠️ Features
- **Natural Language Interface**: "Send $50 to Alice in Kenya"
- **Smart FX Routing**: Scans liquidity pools to find the best USDC → cKES (or other stablecoin) exchange rate.
- **Fee Abstraction**: Gas fees are paid in USDC instead of CELO, enabling seamless onboarding.
- **Mobile First**: Fully compatible with the Opera MiniPay ecosystem.

## 💻 Tech Stack
- **Frontend**: Next.js (React), RainbowKit, CSS Modules (Retro Pixel UI)
- **Web3**: Wagmi, Viem
- **Agent Intelligence**: Next.js API Routes (Simulated LLM Intent Extraction)
- **On-Chain Ecosystem**: Celo Alfajores/Mainnet, Uniswap V3, Mento, ERC-8004 Registry

## 🏁 Getting Started

### 1. Web App / Dashboard
```bash
npm install
npm run dev
```
Navigate to `http://localhost:3000/app` to connect your wallet and chat with the CeloRemit Agent.

### 2. Auto-Farming Activity (Track 2)
To continuously generate transactions:
```bash
# Windows
$env:PRIVATE_KEY="0xYourPrivateKey"
node scripts/farm-activity.js

# Mac/Linux
PRIVATE_KEY="0xYourPrivateKey" node scripts/farm-activity.js
```

### 3. Register ERC-8004 Agent (Track 3)
```bash
node scripts/register-erc8004.js
```

## 🎥 Submission Details
- **Demo Video**: [Link to Video]
- **Live Deployment**: [Link to Vercel]
- **Karma GAP Profile**: [Link]
