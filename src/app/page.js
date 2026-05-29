"use client";

import styles from "./page.module.css";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <>
      {/* ═══════════ NAVBAR ═══════════ */}
      <nav className={styles.navbar} id="navbar">
        <div className={styles.navInner}>
          <a href="#" className={styles.navLogo}>
            <img src="/logo.png" alt="CeloRemit" className={styles.navLogoImg} />
            <div>
              <span className={styles.navLogoText}>CeloRemit</span>
              <span className={styles.navLogoSub}>Onchain Agent</span>
            </div>
          </a>

          <ul className={styles.navLinks}>
            <li><a href="#how-it-works" className={styles.navLink}>How It Works</a></li>
            <li><a href="#features" className={styles.navLink}>Features</a></li>
            <li><a href="#corridors" className={styles.navLink}>Corridors</a></li>
            <li><a href="/app" className={styles.navLink}>App Dashboard</a></li>
          </ul>

          <div className={styles.navCta}>
            <ConnectButton />
          </div>

          <button className={styles.mobileMenuBtn} aria-label="Menu">☰</button>
        </div>
      </nav>

      {/* ═══════════ HERO ═══════════ */}
      <section className={styles.hero} id="hero">
        {/* Background Orbs */}
        <div className={styles.heroBgOrbs}>
          <div className={`${styles.heroOrb} ${styles.heroOrb1}`} />
          <div className={`${styles.heroOrb} ${styles.heroOrb2}`} />
          <div className={`${styles.heroOrb} ${styles.heroOrb3}`} />
        </div>

        {/* Sparkle Particles */}
        <div className={styles.particles}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={styles.particle} />
          ))}
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <div className={styles.heroBadgeDot} />
            Built on Celo · ERC-8004 Agent
          </div>

          <img src="/logo.png" alt="CeloRemit Logo" className={styles.heroLogo} />

          <h1 className={styles.heroTitle}>
            Cross-Border Remittance<br />Powered by AI
          </h1>

          <p className={styles.heroSubtitle}>
            Send money anywhere in the world with{" "}
            <span className={styles.heroHighlight}>near-zero fees</span>.
            Our AI agent finds the best FX rates across Celo DEXs and executes
            instant stablecoin transfers — all onchain, all autonomous.
          </p>

          <div className={styles.heroActions}>
            <a href="#cta" className="pixel-btn pixel-btn--filled pixel-btn--large">
              ▶ Start Sending
            </a>
            <a href="#how-it-works" className="pixel-btn pixel-btn--green pixel-btn--large">
              ◆ Learn More
            </a>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>&lt; $0.05</span>
              <span className={styles.heroStatLabel}>Per Transfer</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>~2s</span>
              <span className={styles.heroStatLabel}>Settlement</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>25+</span>
              <span className={styles.heroStatLabel}>Stablecoins</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>∞</span>
              <span className={styles.heroStatLabel}>Corridors</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TICKER ═══════════ */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} style={{ display: "flex" }}>
              <TickerItem emoji="⚡" text="Sub-cent gas fees" />
              <TickerItem emoji="🔒" text="ERC-8004 Verified" highlight />
              <TickerItem emoji="🌍" text="Global stablecoin corridors" />
              <TickerItem emoji="🤖" text="Autonomous AI Agent" highlight />
              <TickerItem emoji="💸" text="x402 Payments" />
              <TickerItem emoji="📱" text="MiniPay Compatible" highlight />
              <TickerItem emoji="🏦" text="Fee Abstraction" />
              <TickerItem emoji="🔗" text="Celo L2 Native" highlight />
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section className={styles.howItWorks} id="how-it-works">
        <div className="container">
          <p className={styles.sectionLabel}>/// How It Works</p>
          <h2 className={styles.sectionTitle}>Simple. Fast. Onchain.</h2>

          <div className={styles.stepsGrid}>
            <StepCard
              num="01"
              icon="💬"
              title="Tell the Agent"
              desc='Just say "Send $100 to Kenya" — our AI understands natural language commands for any corridor.'
            />
            <StepCard
              num="02"
              icon="🔍"
              title="AI Finds Best Rate"
              desc="The agent scans Uniswap pools, Mento protocol, and DEX aggregators to find the optimal FX route."
            />
            <StepCard
              num="03"
              icon="⚡"
              title="Atomic Execution"
              desc="Swap USDC → local stablecoin (cKES, cBRL, etc.) and transfer in a single onchain transaction."
            />
            <StepCard
              num="04"
              icon="✅"
              title="Instant Settlement"
              desc="Recipient gets funds in ~2 seconds. Fee under $0.05. All verifiable on Celoscan."
            />
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURES ═══════════ */}
      <section className={styles.features} id="features">
        <div className="container">
          <p className={styles.sectionLabel}>/// Core Features</p>
          <h2 className={styles.sectionTitle}>Built Different</h2>

          <div className={styles.featuresGrid}>
            <FeatureCard
              icon="🤖"
              title="Autonomous AI Agent"
              desc="Runs 24/7 without human intervention. Monitors rates, executes scheduled transfers, and optimizes routes continuously."
              tag="ERC-8004"
            />
            <FeatureCard
              icon="💱"
              title="Smart FX Routing"
              desc="AI-powered rate discovery across all Celo DEXs. Finds the best path for every currency pair, every time."
              tag="Multi-DEX"
            />
            <FeatureCard
              icon="🔐"
              title="Trust Infrastructure"
              desc="Registered onchain via ERC-8004 with full reputation tracking. Every interaction builds verifiable trust."
              tag="Self Verified"
            />
            <FeatureCard
              icon="💸"
              title="x402 Micro-Fees"
              desc="HTTP-native payment protocol. Pay only $0.01-0.05 per transfer — compared to $7-15 with traditional services."
              tag="x402 Protocol"
            />
            <FeatureCard
              icon="🌐"
              title="Local Stablecoins"
              desc="Send in the recipient's local currency. Support for cKES, cBRL, cEUR, cCOP, cUSD and 20+ more Celo stables."
              tag="25+ Currencies"
            />
            <FeatureCard
              icon="📱"
              title="MiniPay Ready"
              desc="Fully compatible with Opera MiniPay wallet. 15M+ users can access CeloRemit directly from their phone."
              tag="Mobile-First"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ CORRIDORS ═══════════ */}
      <section className={styles.corridors} id="corridors">
        <div className="container">
          <p className={styles.sectionLabel}>/// Supported Corridors</p>
          <h2 className={styles.sectionTitle}>Send Anywhere</h2>

          <div className={styles.corridorGrid}>
            <CorridorCard from="🇺🇸" to="🇰🇪" name="USD → KES" stable="cKES" />
            <CorridorCard from="🇺🇸" to="🇧🇷" name="USD → BRL" stable="cBRL" />
            <CorridorCard from="🇪🇺" to="🇳🇬" name="EUR → NGN" stable="cEUR" />
            <CorridorCard from="🇺🇸" to="🇨🇴" name="USD → COP" stable="cCOP" />
            <CorridorCard from="🇬🇧" to="🇬🇭" name="GBP → GHS" stable="cGHS" />
            <CorridorCard from="🇺🇸" to="🇵🇭" name="USD → PHP" stable="cUSD" />
            <CorridorCard from="🇪🇺" to="🇲🇽" name="EUR → MXN" stable="cEUR" />
            <CorridorCard from="🇺🇸" to="🇮🇳" name="USD → INR" stable="cUSD" />
          </div>
        </div>
      </section>

      {/* ═══════════ TECH STACK ═══════════ */}
      <section className={styles.techStack}>
        <div className="container">
          <p className={styles.sectionLabel}>/// Powered By</p>
          <h2 className={styles.sectionTitle}>Tech Stack</h2>

          <div className={styles.techGrid}>
            {[
              "Celo L2", "ERC-8004", "x402 Protocol", "Fee Abstraction",
              "Viem", "Next.js", "Uniswap V3", "Mento Protocol",
              "Self Agent ID", "8004scan", "MiniPay", "Thirdweb",
            ].map((tech) => (
              <div key={tech} className={styles.techChip}>
                <div className={styles.techChipDot} />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ DEMO TERMINAL ═══════════ */}
      <section className={styles.demoSection} id="demo">
        <div className="container">
          <p className={styles.sectionLabel}>/// Live Demo</p>
          <h2 className={styles.sectionTitle}>See It In Action</h2>

          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <div className={`${styles.terminalDot} ${styles.terminalDotRed}`} />
              <div className={`${styles.terminalDot} ${styles.terminalDotYellow}`} />
              <div className={`${styles.terminalDot} ${styles.terminalDotGreen}`} />
              <span className={styles.terminalTitle}>celoremit-agent v1.0.0</span>
            </div>
            <div className={styles.terminalBody}>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>▸</span>
                <span className={styles.terminalCmd}>agent.send(&quot;$100 to Kenya&quot;)</span>
              </div>
              <div className={styles.terminalOutput}>
                🔍 Scanning 12 liquidity pools for USDC → cKES...
              </div>
              <div className={styles.terminalOutput}>
                📊 Best rate: 1 USDC = 129.45 cKES (Uniswap V3)
              </div>
              <div className={styles.terminalOutput}>
                ⚡ Executing atomic swap + transfer...
              </div>
              <div className={styles.terminalOutput}>
                💰 Fee: $0.03 (via x402) | Gas: $0.001 (fee abstraction)
              </div>
              <div className={styles.terminalSuccess}>
                ✅ Sent 12,945 cKES to 0x7a3...f9e2 in 1.8s
              </div>
              <div className={styles.terminalSuccess}>
                🔗 Tx: celoscan.io/tx/0xabc...def
              </div>
              <br />
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>▸</span>
                <span className={styles.terminalCursor} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className={styles.cta} id="cta">
        <div className="container">
          <div className={styles.ctaBox}>
            {/* Pixel Corners */}
            <div className={`${styles.pixelCorner} ${styles.pixelCornerTL}`} />
            <div className={`${styles.pixelCorner} ${styles.pixelCornerTR}`} />
            <div className={`${styles.pixelCorner} ${styles.pixelCornerBL}`} />
            <div className={`${styles.pixelCorner} ${styles.pixelCornerBR}`} />

            <h2 className={styles.ctaTitle}>Ready to Send?</h2>
            <p className={styles.ctaDesc}>
              Join the future of cross-border payments. No middlemen, no hidden
              fees, no delays. Just AI-powered, stablecoin-native remittances on Celo.
            </p>
            <div className={styles.ctaActions}>
              <a href="#" className="pixel-btn pixel-btn--filled pixel-btn--large">
                ▶ Launch CeloRemit
              </a>
              <a
                href="https://github.com/Dark-Brain07/celoremit"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn pixel-btn--green pixel-btn--large"
              >
                ◆ View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLeft}>
            <img src="/logo.png" alt="CeloRemit" className={styles.footerLogo} />
            <span className={styles.footerText}>CeloRemit Agent</span>
          </div>

          <ul className={styles.footerLinks}>
            <li><a href="https://docs.celo.org" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Docs</a></li>
            <li><a href="https://8004scan.io" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>8004scan</a></li>
            <li><a href="https://github.com/Dark-Brain07/celoremit" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>GitHub</a></li>
            <li><a href="https://t.me/realworldagentshackathon" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Telegram</a></li>
          </ul>

          <div className={styles.footerRight}>
            Built for Celo Hackathon 2026
          </div>
        </div>
      </footer>
    </>
  );
}

/* ═══════════ SUB-COMPONENTS ═══════════ */

function TickerItem({ emoji, text, highlight }) {
  return (
    <div className={styles.tickerItem}>
      <div className={styles.tickerDot} />
      <span>{emoji}</span>
      <span className={highlight ? styles.tickerHighlight : ""}>{text}</span>
    </div>
  );
}

function StepCard({ num, icon, title, desc }) {
  return (
    <div className={styles.stepCard}>
      <span className={styles.stepNumber}>{num}</span>
      <span className={styles.stepIcon}>{icon}</span>
      <h3 className={styles.stepTitle}>{title}</h3>
      <p className={styles.stepDesc}>{desc}</p>
    </div>
  );
}

function FeatureCard({ icon, title, desc, tag }) {
  return (
    <div className={styles.featureCard}>
      <span className={styles.featureIcon}>{icon}</span>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDesc}>{desc}</p>
      {tag && <span className={styles.featureTag}>{tag}</span>}
    </div>
  );
}

function CorridorCard({ from, to, name, stable }) {
  return (
    <div className={styles.corridorCard}>
      <div className={styles.corridorFlags}>
        <span>{from}</span>
        <span className={styles.corridorArrow}>→</span>
        <span>{to}</span>
      </div>
      <div>
        <div className={styles.corridorName}>{name}</div>
        <div className={styles.corridorStable}>{stable}</div>
      </div>
    </div>
  );
}
