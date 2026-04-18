// server start here // Starts everything: // starting point

import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3300;

const startServer = async () => {
  try {
    // connect database first
    await connectDB();
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error);
    process.exit(1);
  }
};
startServer();

// Using app.listen(PORT, "0.0.0.0") is safe and recommended in production.
// It ensures the application is accessible from external networks, especially in cloud and container environments.
// Security concerns are handled separately through authentication, firewalls, and network configurations.
