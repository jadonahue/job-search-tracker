"use client";

import { createContext, useContext, useState, useEffect } from "react"
import { getJobs } from "@/service/jobService";

const JobContext = createContext();

export function JobProvider({ children }) {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({})

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true);
                const data = await getJobs(filters);
                setJobs(data);
            } catch (error) {
                setError("Failed to load jobs");
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, [filters]); // Re-fetch jobs when filters change

    return (
        <JobContext.Provider value={{ jobs, loading, error, filters, setFilters }}>
            {children}
        </JobContext.Provider>
    )
};

export function useJobs() {
    return useContext(JobContext);
};