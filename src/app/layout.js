import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';

export const metadata = {
  title: "CeloRemit — AI-Powered Cross-Border Remittance Agent",
  description:
    "Send money anywhere in the world instantly using AI-optimized routes on Celo blockchain. Ultra-low fees, real-time FX rates, powered by stablecoins.",
  keywords: [
    "Celo",
    "remittance",
    "AI agent",
    "stablecoin",
    "cross-border payments",
    "crypto",
    "DeFi",
    "MiniPay",
  ],
  openGraph: {
    title: "CeloRemit — AI-Powered Remittance Agent on Celo",
    description:
      "Cross-border payments redefined. AI agent finds the best FX rates and sends stablecoins globally in seconds.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body className="pixel-grid-bg">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
