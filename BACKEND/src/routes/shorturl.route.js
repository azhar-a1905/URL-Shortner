import express from "express";
import { createShortUrl } from "../controller/shortUrl.controller.js";
import { get } from "mongoose";
import { getOriginalUrlAndRedirect } from "../controller/shortUrl.controller.js";

const router = express.Router();

router.post("/", createShortUrl);

router.get("/:shortUrl", getOriginalUrlAndRedirect);

export default router;
