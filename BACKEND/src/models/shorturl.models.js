import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true, index: true },
  clicks: { type: Number, default: 0, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // required: true
  },
  createdAt: { type: Date, default: Date.now, expires: "1d" },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  avatar: {
    type: String,
    required: false,
  },
});

const shortUrl = mongoose.model("shortUrl", shortUrlSchema);

export default shortUrl;
