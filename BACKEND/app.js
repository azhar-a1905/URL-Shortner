import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config("./.env");
import connectDB from "./src/config/mongo.config.js";
import urlSchema from "./src/models/shorturl.models.js";
import shortUrl from "./src/routes/shorturl.route.js";
import { getOriginalUrlAndRedirect } from "./src/controller/shortUrl.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
const app = express();
console.log("Mongo URI:", process.env.MONGO_URI);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/auth/register", register_user);
app.use("/api/auth/login", login_user);
app.use("/api/create", shortUrl);

app.use("/:shortUrl", getOriginalUrlAndRedirect);

app.use(errorHandler);

// Debug endpoint to list all short URLs
app.get("/api/list", async (req, res) => {
  try {
    const urls = await urlSchema.find(
      {},
      { _id: 0, shortUrl: 1, originalUrl: 1 }
    );
    res.json(urls);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch URLs" });
  }
});

app.listen(3000, () => {
  connectDB()
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error("Database connection failed:", error));
  console.log("Listening on http://localhost:3000");
});
