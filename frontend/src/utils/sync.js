import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "bi3g57kt",
  dataset: "production",
  useCdn: false,
  token: "bi3g57kt",
  apiVersion: "2026-06-08",
});

async function run() {
  try {
    const goldResponse = await fetch("https://www.goldapi.io/api/XAU/USD", {
      headers: {
        "x-access-token": "goldapi-76ccf48f191f8bcc2ac8f003e84a4713-io",
      },
    });
    const goldData = await goldResponse.json();

    const goldPriceFormatted = `$${goldData.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
    const goldChange = `${goldData.chg_pct >= 0 ? "+" : ""}${goldData.chg_pct.toFixed(2)}%`;

    const calculatedPrices = [
      { symbol: "GOLD", price: goldPriceFormatted, change: goldChange },
      { symbol: "SILVER", price: "$29.15", change: "-1.12%" },
      { symbol: "LEAD", price: "$2,180.00", change: "+0.18%" },
    ];

    await sanityClient.createOrReplace({
      _id: "global-market-data-cache",
      _type: "marketData",
      title: "Global Metal Prices Cache",
      lastUpdated: new Date().toISOString(),
      prices: calculatedPrices,
    });

    console.log("Sanity cache update completed successfully.");
  } catch (error) {
    console.error("Pipeline failure:", error.message);
    process.exit(1);
  }
}

run();
