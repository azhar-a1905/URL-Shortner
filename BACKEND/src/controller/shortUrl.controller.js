import { generateNanoId } from "../utils/helper.js";
import { createShortUrlServiceNoUser } from "../services/shortUrl.service.js";
import { get } from "mongoose";
import { getOriginalUrl } from "../dao/shorturl.dao.js";
import tryCatchWrapper from "../utils/tryCatchWrapper.js";

export const createShortUrl = tryCatchWrapper(async (req, res, next) => {
  const { url } = req.body;
  const shortUrl = await createShortUrlServiceNoUser(url);
  // res.status(403).send("Forbidden: User not authenticated");
  // res.send(`${process.env.APP_URL}/${shortUrl}`);
  res.json({
    shortUrl: `${process.env.APP_URL}/${shortUrl}`,
    status: "success",
    message: "Short URL created successfully",
  });
});

export const getOriginalUrlAndRedirect = tryCatchWrapper(async (req, res) => {
  const { shortUrl } = req.params;

  const urlData = await getOriginalUrl(shortUrl);
  if (urlData) {
    return res.redirect(urlData.originalUrl);
  }
  return res.status(404).json({ error: "Short URL not found" });
});
