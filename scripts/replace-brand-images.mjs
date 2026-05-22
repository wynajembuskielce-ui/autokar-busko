import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const envPath = path.join(projectRoot, ".env.local");
const outDir = path.join(projectRoot, "public", "images");

const assets = [
  {
    key: "hero-landing",
    query: "luxury coach bus modern sleek white",
    filename: "hero-landing.jpg",
  },
  {
    key: "wycieczka-szkolna",
    query: "happy school children excited travel smiling diverse",
    filename: "wycieczka-szkolna.jpg",
  },
  {
    key: "wesele",
    query: "elegant wedding guests formal transportation luxury",
    filename: "wesele.jpg",
  },
  {
    key: "impreza-firmowa",
    query: "business team corporate group modern transportation professional",
    filename: "impreza-firmowa.jpg",
  },
  {
    key: "pielgrzymki",
    query: "group people community pilgrimage spiritual journey together",
    filename: "pielgrzymki.jpg",
  },
  {
    key: "narty",
    query: "ski resort mountains winter adventure snow landscape",
    filename: "narty.jpg",
  },
  {
    key: "lotnisko",
    query: "modern airport departure professional travel organized",
    filename: "lotnisko.jpg",
  },
  {
    key: "flota",
    query: "fleet modern buses coach interior clean professional",
    filename: "flota.jpg",
  },
];

function parseKey(envText) {
  const line = envText
    .split(/\r?\n/)
    .find((l) => l.startsWith("NEXT_PUBLIC_UNSPLASH_ACCESS_KEY="));
  if (!line) return "";
  return line.slice(line.indexOf("=") + 1).trim();
}

async function fetchJson(url, accessKey) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
      "Accept-Version": "v1",
    },
  });

  if (!response.ok) {
    throw new Error(`Unsplash API error: ${response.status}`);
  }

  return response.json();
}

async function fetchBuffer(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Image download error: ${response.status}`);
  }
  const data = await response.arrayBuffer();
  return Buffer.from(data);
}

function scorePhoto(photo) {
  const text = `${photo.alt_description || ""} ${photo.description || ""}`.toLowerCase();
  let score = 0;

  if (photo.width >= 3000) score += 3;
  if (photo.height >= 1800) score += 2;
  if (photo.width / photo.height >= 1.4) score += 2;

  if (text.includes("portrait")) score -= 3;
  if (text.includes("studio")) score -= 2;
  if (text.includes("close up")) score -= 2;
  if (text.includes("selfie")) score -= 5;
  if (text.includes("smiling")) score -= 1;

  return score;
}

async function run() {
  if (!existsSync(envPath)) {
    throw new Error("Missing .env.local");
  }

  const envText = await readFile(envPath, "utf8");
  const key = parseKey(envText);
  if (!key) {
    throw new Error("NEXT_PUBLIC_UNSPLASH_ACCESS_KEY not found");
  }

  await mkdir(outDir, { recursive: true });

  const report = [];

  for (const item of assets) {
    const searchUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(item.query)}&per_page=8&orientation=landscape&content_filter=high`;
    const payload = await fetchJson(searchUrl, key);

    if (!payload.results || payload.results.length === 0) {
      console.log(`No results for: ${item.query}`); continue;
    }

    const sorted = [...payload.results].sort((a, b) => scorePhoto(b) - scorePhoto(a));
    const selected = sorted[0];
    const rawUrl = `${selected.urls.raw}&fm=jpg&q=84&w=2200`;

    const buffer = await fetchBuffer(rawUrl);
    await writeFile(path.join(outDir, item.filename), buffer);

    if (selected.links?.download_location) {
      try {
        await fetchJson(selected.links.download_location, key);
      } catch {
        // Ignore download tracking failures.
      }
    }

    report.push({
      key: item.key,
      filename: item.filename,
      photographer: selected.user?.name || "unknown",
      description: selected.alt_description || selected.description || "",
      score: scorePhoto(selected),
    });

    console.log(`Saved ${item.filename}`);
  }

  await writeFile(path.join(outDir, "_selection-report.json"), JSON.stringify(report, null, 2), "utf8");
  console.log("Done. Report: public/images/_selection-report.json");
}

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
