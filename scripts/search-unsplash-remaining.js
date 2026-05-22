/* eslint-disable @typescript-eslint/no-require-imports */
const axios = require("axios");
const fs = require("fs");
const dotenv = require("dotenv");

const envConfig = dotenv.parse(fs.readFileSync(".env.local"));
const UNSPLASH_KEY = envConfig.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

const queries = [
  "ski resort mountains winter adventure snow landscape",
  "modern airport departure professional travel organized",
  "fleet modern buses coach interior clean professional"
];

async function fetchPhotos() {
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    try {
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: { query, per_page: 10, orientation: "landscape" },
        headers: { Authorization: "Client-ID " + UNSPLASH_KEY }
      });

      console.log(`\nQUERY: ${query}`);
      response.data.results.forEach((photo, index) => {
        const desc = (photo.description || photo.alt_description || "No description").substring(0, 50);
        console.log(`${index + 1}. ID: ${photo.id} | Dim: ${photo.width}x${photo.height} | Auth: ${photo.user.name} | Desc: ${desc}...`);
      });
    } catch (error) {
      console.error(`Error query ${query}:`, error.message);
    }
  }
}
fetchPhotos();
