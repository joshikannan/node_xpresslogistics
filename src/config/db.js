//Mongoose = ODM (Object Data Modeling) // Helps interact with MongoDB //Adds schema, validation, queries
import mongoose from "mongoose";

//DB connection is asynchronous //It takes time (network call)
const connectDB = async () => {
  try {
    // DNS resolves cluster URL => Domain Name System (DNS) is to translate human-readable domain names (e.g., google.com) into machine-readable IP addresses (e.g., 142.250.190.46), allowing browsers to load internet resources.
    // Connects to MongoDB Atlas
    // Authenticates using username/password
    // Opens connection pool
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // conn => connection object
    // connected to cluster successfully
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    // Stops server immediately ❌
    // Prevents app from running without DB
    process.exit(1);
  }
};

export default connectDB;
