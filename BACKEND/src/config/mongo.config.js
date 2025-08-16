import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully", conn.connection.host);
    // console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
// This code connects to a MongoDB database using Mongoose.
// It exports a function `connectDB` that attempts to connect to the database
// using the URI stored in the environment variable `MONGO_URI`.
// If the connection is successful, it logs a success message.
// If the connection fails, it logs the error and exits the process with a failure code.
// Make sure to set the `MONGO_URI` environment variable before running this code.
// This is typically done in a `.env` file or through environment variables in your deployment setup.
// Ensure you have the `mongoose` package installed in your project:
// npm install mongoose
// You can use this function in your main application file (e.g., `app.js`) to establish the database connection
// before starting your server.
