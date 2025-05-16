import express from "express";
import { getSavedJobsForUser } from "../service/jobService.js";

const router = express.Router();

// Route to get saved jobs for authenticated user
router.get("/", async (req, res) => {
    try {

        const savedJobsIds = await getSavedJobsForUser();
        res.json({ savedJobs: savedJobIds });
    } catch (error) {
        res.status(500).json({ message: "Error fetching saved jobs" })
    }
});

export default router;