import axios from "axios";

const REMOTEOK_URL = "https://remoteok.com/api";

export const fetchRemoteJobs = async (filters = {}) => {
    try {
        const response = await axios.get(REMOTEOK_URL);

        let jobs = response.data.slice(1); // Remove first item (invalid data)

        // Apply filters
        if (filters.jobTitle) {
            jobs = jobs.filter(job => job.position.toLowerCase().includes(filters.jobTitle.toLowerCase()));
        }

        if (filters.location) {
            jobs = jobs.filter(job => job.location.toLowerCase().includes(filters.location.toLowerCase()));
        }

        if (filters.salaryRange) {
            const salaryFilter = {
                "50k-80k": (salary) => salary >= 50000 && salary <= 80000,
                "80k-120k": (salary) => salary >= 80000 && salary <= 120000,
                "120k+": (salary) => salary >= 120000
            };

            if (salaryFilter[filters.salaryRange]) {
                jobs = jobs.filter(job => salaryFilter[filters.salaryRange](job.salary));
            }
        }

        if (filters.jobType && filters.jobType !== "All Job Types") {
            jobs = jobs.filter(job => job.type.toLowerCase() === filters.jobType.toLowerCase());
        }

        return jobs;
    } catch (error) {
        console.error("Error fetching jobs from RemoteOK:", error);
        throw new Error("Failed to fetch jobs");
    }
};