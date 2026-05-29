import { NextResponse } from 'next/server';

// Simulated AI Agent Intent Extraction
// In a production app, this would call OpenAI (e.g. gpt-4o) with structured output
export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    // Heuristic parsing for the Hackathon Demo
    // Matches formats like: "Send $100 to 0x123..." or "Send 50 USDC to Kenya"
    const amountMatch = prompt.match(/\$?\s*(\d+(\.\d+)?)/);
    const amount = amountMatch ? amountMatch[1] : "0";

    let targetCurrency = "cUSD";
    if (prompt.toLowerCase().includes("kenya") || prompt.toLowerCase().includes("kes")) {
      targetCurrency = "cKES";
    } else if (prompt.toLowerCase().includes("brazil") || prompt.toLowerCase().includes("brl")) {
      targetCurrency = "cBRL";
    } else if (prompt.toLowerCase().includes("nigeria") || prompt.toLowerCase().includes("ngn")) {
      targetCurrency = "cNGN";
    } else if (prompt.toLowerCase().includes("euro") || prompt.toLowerCase().includes("eur")) {
      targetCurrency = "cEUR";
    }

    // Look for an 0x address
    const addressMatch = prompt.match(/0x[a-fA-F0-9]{40}/);
    const recipient = addressMatch ? addressMatch[0] : null;

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({
      intent: "remittance",
      structuredData: {
        amountInUSDC: amount,
        targetCurrency: targetCurrency,
        recipient: recipient || "0x7a30B5c3E7F9E263d9A6D2730a84e36504aB9f9e2", // Fallback dummy address for demo
      },
      message: `I will route ${amount} USDC to ${targetCurrency} and send it to ${recipient ? 'the provided address' : 'Alice'}.`,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
