import dotenv from "dotenv";
// Load environment variables
dotenv.config(); // Make sure to call this as a function

import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import jobRoutes from "./routes/job.js";
import authRoutes from "./routes/auth.js"




// Fix the path resolution
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

// Enable CORS to allow frontend requests
app.use(cors());

// Middleware to parse JSON body
app.use(express.json());

// Routes
app.use("/api/jobs", jobRoutes);
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
})