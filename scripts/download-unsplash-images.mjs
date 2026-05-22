import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const envPath = path.join(projectRoot, ".env.local");
const outDir = path.join(projectRoot, "public", "images");

const categories = [
  { query: "coach bus modern", file: "hero-landing.jpg" },
  { query: "school children bus happy", file: "wycieczka-szkolna.jpg" },
  { query: "wedding celebration elegant", file: "wesele.jpg" },
  { query: "business people transport team", file: "impreza-firmowa.jpg" },
  { query: "pilgrimage group people church", file: "pielgrzymki.jpg" },
  { query: "ski resort mountains winter", file: "narty.jpg" },
  { query: "airport departure travel", file: "lotnisko.jpg" },
  { query: "bus interior modern coach", file: "flota.jpg" },
];

function getAccessKey(envText) {
  const line = envText
    .split(/\r?\n/)
    .find((l) => l.startsWith("NEXT_PUBLIC_UNSPLASH_ACCESS_KEY="));

  if (!line) return "";
  return line.split("=").slice(1).join("=").trim();
}

async function fetchJson(url, key) {
  const res = await fetch(url, {
    headers: {
      Authorization: `Client-ID ${key}`,
      "Accept-Version": "v1",
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }

  return res.json();
}

async function fetchBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Image download failed: HTTP ${res.status}`);
  }
  const arr = await res.arrayBuffer();
  return Buffer.from(arr);
}

async function run() {
  if (!existsSync(envPath)) {
    throw new Error("Missing .env.local file.");
  }

  const envText = await readFile(envPath, "utf8");
  const key = getAccessKey(envText);
  if (!key) {
    throw new Error("NEXT_PUBLIC_UNSPLASH_ACCESS_KEY not found in .env.local");
  }

  await mkdir(outDir, { recursive: true });

  for (const item of categories) {
    const searchUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(item.query)}&per_page=1&orientation=landscape&content_filter=high`;
    const data = await fetchJson(searchUrl, key);

    if (!data.results || data.results.length === 0) {
      throw new Error(`No Unsplash result for query: ${item.query}`);
    }

    const photo = data.results[0];
    const imageUrl = `${photo.urls.raw}&fm=jpg&q=82&w=1800`;
    const outPath = path.join(outDir, item.file);
    const img = await fetchBuffer(imageUrl);

    await writeFile(outPath, img);

    if (photo.links?.download_location) {
      try {
        await fetchJson(photo.links.download_location, key);
      } catch {
        // Ignore telemetry call errors.
      }
    }

    console.log(`Downloaded ${item.file} <- ${item.query}`);
  }

  console.log("Done: 8 files saved to public/images");
}

run().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
