import { saveShortUrl } from "../dao/shorturl.dao.js";
import { generateNanoId } from "../utils/helper.js";

export const createShortUrlServiceUser = async (url, userId) => {
  const shortUrl = await generateNanoId(7);
  if (!shortUrl) throw new Error("Failed to generate short URL");

  // console.log("Generated short URL:", shortUrl);
  await saveShortUrl(shortUrl, url, userId);

  return shortUrl;
};

export const createShortUrlServiceNoUser = async (url) => {
  try {
    const shortUrl = await generateNanoId(7);

    console.log("Generated short URL:", shortUrl);
    await saveShortUrl(shortUrl, url);
    return shortUrl;
  } catch (error) {
    console.error("Error in createShortUrlServiceNoUser:", error);
    throw new Error(error.message || "Failed to create short URL");
  }
};
