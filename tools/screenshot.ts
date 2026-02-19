/**
 * Capture a screenshot of a URL and save to the assets directory.
 * Run at build time: npx tsx tools/screenshot.ts <url> [outputPath]
 *
 * Examples:
 *   npx tsx tools/screenshot.ts https://example.com
 *   npx tsx tools/screenshot.ts https://gethashdown.com public/screenshots/hashdown.png
 */

import { chromium } from "playwright";
import { mkdir, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DEFAULT_OUT_DIR = join(ROOT, "public", "screenshots");

async function capture(
  url: string,
  outputPath: string,
  viewport = { width: 1280, height: 800 },
) {
  const outDir = dirname(outputPath);
  await mkdir(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({
      viewport: viewport as { width: number; height: number },
      deviceScaleFactor: 2,
    });
    await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
    const buffer = await page.screenshot({ type: "png", fullPage: false });
    await writeFile(outputPath, buffer);
    console.log(`Screenshot saved: ${outputPath}`);
  } finally {
    await browser.close();
  }
}

function slugFromUrl(url: string): string {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return host.replace(/\./g, "-").replace(/[^a-z0-9-]/gi, "") || "screenshot";
  } catch {
    return "screenshot";
  }
}

const url = process.argv[2];
if (!url) {
  console.error("Usage: npx tsx tools/screenshot.ts <url> [outputPath]");
  console.error(
    "  url        - Full URL to capture (e.g. https://example.com)",
  );
  console.error(
    "  outputPath - Optional. Default: public/screenshots/<slug>.png",
  );
  process.exit(1);
}

const outputPathArg = process.argv[3];
const outputPath = outputPathArg
  ? join(ROOT, outputPathArg)
  : join(DEFAULT_OUT_DIR, `${slugFromUrl(url)}.png`);

capture(url, outputPath).catch((err) => {
  console.error(err);
  process.exit(1);
});
