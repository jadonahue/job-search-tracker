"use client";

import { useEffect, useState } from "react";
import { getJobs } from "@/services/jobService";

export default function JobsPage() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const data = await getJobs();
                setJobs(data);
            } catch (err) {
                setError("Failed to fetch jobs");
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Remote Jobs</h1>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index} className="border p-4 my-2 rounded">
                        <h2 className="text-lg font-semibold">{job.position}</h2>
                        <p>{job.company}</p>
                        <a href={job.url} className="text-blue-500">View Job</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}