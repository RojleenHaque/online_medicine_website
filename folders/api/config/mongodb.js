

// export default connectDB;

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGOOSEDB_URI;

    if (!dbURI) {
      throw new Error("MONGOOSEDB_URI is not defined in environment variables.");
    }

    // Connect without deprecated options
    await mongoose.connect(dbURI);

    console.log("MongoDB connected successfully");

    // Optional: Handle errors during runtime
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit on failure
  }
};

export default connectDB;
