import urlSchema from "../models/shorturl.models.js";

export const saveShortUrl = async (shortUrl, originalUrl, userId) => {
  try {
    const newUrl = new urlSchema({
      originalUrl: originalUrl,
      shortUrl: shortUrl,
      clicks: 0,
    });
    if (userId) {
      newUrl.userId = userId;
    }
    await newUrl.save();
  } catch (error) {
    console.error("Error saving short URL:", error);
    throw new Error(error.message || "Failed to save short URL");
  }
  return shortUrl;
};

export const getOriginalUrl = async (shortUrl) => {
  const urlData = await urlSchema.findOneAndUpdate(
    { shortUrl: shortUrl },
    { $inc: { clicks: 1 } }
  );
  return urlData;
};
