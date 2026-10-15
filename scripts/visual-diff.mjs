/**
 * Visual diff verification script (SPEC §18).
 * Uses Playwright, pixelmatch, and pngjs to compare rendered pages against reference images.
 */
import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";

const CONFIG = {
  baseUrl: process.env.DIFF_BASE_URL || "http://localhost:3000",
  outputDir: path.resolve(process.cwd(), "visual-diff"),
  referenceDir: path.resolve(process.cwd(), "docs/spec/reference"),
  desktop: {
    viewport: { width: 1304, height: 2123 },
    deviceScaleFactor: 2,
    route: "/courses/starting-seo-as-your-home-based-business",
    referenceImage: "desktop_reference_2x.png",
    // Frame starts at PNG x=14 and is 1305x2123 CSS px (2610x4246 PNG px)
    crop: { x: 14, y: 0, width: 2610, height: 4246 },
  },
  mobile: {
    viewport: { width: 430, height: 932 },
    deviceScaleFactor: 2,
    route: "/courses/starting-seo-as-your-home-based-business",
    referenceImage: "mobile_reference_2x.png",
  },
};

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Capture full-page screenshot using Playwright
 */
export async function captureScreenshot(pageConfig) {
  ensureDir(CONFIG.outputDir);
  const browser = await chromium.launch();
  try {
    const context = await browser.newContext({
      viewport: pageConfig.viewport,
      deviceScaleFactor: pageConfig.deviceScaleFactor,
    });
    const page = await context.newPage();
    const targetUrl = `${CONFIG.baseUrl}${pageConfig.route}`;
    await page.goto(targetUrl, { waitUntil: "networkidle" });
    const screenshotPath = path.join(CONFIG.outputDir, "current-screenshot.png");
    await page.screenshot({ path: screenshotPath, fullPage: true });
    return screenshotPath;
  } finally {
    await browser.close();
  }
}

/**
 * Compares two PNG images using pixelmatch and outputs diff image & statistics.
 */
export function compareImages(img1Buffer, img2Buffer, diffOutputPath) {
  const img1 = PNG.sync.read(img1Buffer);
  const img2 = PNG.sync.read(img2Buffer);
  const width = Math.min(img1.width, img2.width);
  const height = Math.min(img1.height, img2.height);

  const diff = new PNG({ width, height });
  const mismatchedPixels = pixelmatch(
    img1.data,
    img2.data,
    diff.data,
    width,
    height,
    { threshold: 0.1 }
  );

  ensureDir(path.dirname(diffOutputPath));
  fs.writeFileSync(diffOutputPath, PNG.sync.write(diff));

  const totalPixels = width * height;
  const mismatchPercent = ((mismatchedPixels / totalPixels) * 100).toFixed(2);

  return {
    width,
    height,
    mismatchedPixels,
    totalPixels,
    mismatchPercent: Number(mismatchPercent),
  };
}

async function main() {
  ensureDir(CONFIG.outputDir);
  console.log("Visual diff script initialized. Configured for desktop (1304x2123@2x) and mobile (430x932@2x).");
  console.log("Ready for UI verification stages (P2+).");
}

if (import.meta.url === `file://${process.argv[1].replace(/\\/g, "/")}`) {
  main().catch((err) => {
    console.error("Visual diff error:", err);
    process.exit(1);
  });
}
