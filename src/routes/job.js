import express from "express";
import { fetchRemoteJobs } from "../service/remoteOkService.js";
import { remoteOkMiddleware } from "../middleware/remoteOkMiddleware.js";

const router = express.Router();

// Use middleware
router.use(remoteOkMiddleware);

// Route to fetch jobs
router.get("/", async (req, res) => {
    try {
        const filters = req.query;  // Extract filters from request query
        const jobs = await fetchRemoteJobs(filters);

        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching jobs" })
    }
});

export default router;