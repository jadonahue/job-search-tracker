"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { deleteSavedJobForUser, postSavedJobForUser, getSavedJobsWithStatus, getJobs, updateSavedJobStatusService } from "@/service/jobService";
// import { postSavedJobForUser } from "../service/jobService";

const JobContext = createContext();

export function JobProvider({ children }) {
    const [jobs, setJobs] = useState([]); // Store all fetched jobs.
    const [filteredJobs, setFilteredJobs] = useState([]); // Stores only filtered jobs.
    const [savedJobs, setSavedJobs] = useState([]); // Store saved jobs
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ✅ ADD STATE TO STORE: Testing
    const [savedJobsWithStatus, setSavedJobsWithStatus] = useState([]);


    // Stores actual filters applied to jobs
    const [filters, setFilters] = useState({
        jobTitle: "",
        location: "",
        salaryRange: "All Salaries",
        minSalary: "All",  // Add this
        maxSalary: "All",  // Add this
        jobType: "All Job Types"
    }); // Stores filter selection

    // Temporary filter inputs (only updates filters when search is clicked)
    const [filterInputs, setFilterInputs] = useState(filters);

    // Handle user input in dropdowns (updates temporary filter inputs)
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterInputs((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    // Apply filters only when clicking the Search button
    const applyFilters = () => {
        setFilters(filterInputs); // Updates actual filters with the input values
    }

    // Fetch jobs once on mount
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true); // Set loading to true before fetching
                const data = await getJobs();
                setJobs(data); // Store original jobs
                setFilteredJobs(data); // Initialize filtered jobs
                setLoading(false); // Set loading to false after jobs are fetched
            } catch (error) {
                setError("Failed to load jobs");
                setLoading(false); // Make sure loading is turned off even if there's an error
            }
        };

        fetchJobs();
    }, []); // Empty dependency array = fetch only once

    // ✅ Move fetchSavedJobsWithStatus to be a top-level async function
    const fetchSavedJobsWithStatus = async () => {
        const jobs = await getSavedJobsWithStatus();
        setSavedJobsWithStatus(jobs);
    };

    // ✅ useEffect now just calls it on mount
    useEffect(() => {
        fetchSavedJobsWithStatus();
    }, []);

    // Load saved jobs from local storage when the component mounts
    useEffect(() => {
        const storedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
        setSavedJobs(storedJobs);
    }, []);

    // Save to local storage whenever savedJobs changes
    useEffect(() => {
        localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    }, [savedJobs]);


    // Function to save a job
    const saveJob = async (job) => {
        setSavedJobs((prevJobs) => [...prevJobs, job]);

        // This will call the service which calls supabase
        await postSavedJobForUser(job);
    };

    // Function to remove a saved job
    const removeSavedJob = async (jobId) => {
        console.log("Removing job:", jobId); // Debug log

        // Remove from local state
        setSavedJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));

        // Remove from Supabase
        await deleteSavedJobForUser(jobId);
    };

    // Function to update saved job status
    const updateSavedJobStatus = async (jobId, status) => {
        console.log("Update job status:", jobId, status); // Debug log

        // Remove from Supabase
        await updateSavedJobStatusService(jobId, status);

        console.log("This is before fetchjobstatus");


        //test
        await fetchSavedJobsWithStatus()

        console.log("This is after fetchjobstatus");
    };

    // // Apply filters when `filters` change (only triggered by Search button)
    useEffect(() => {
        if (loading) return; // Prevent filtering while still loading

        let updatedJobs = [...jobs]; // Copy of jobs array

        // Salary filtering (only applies if minSalary or maxSalary is not "All")
        if (filters.minSalary !== "All" || filters.maxSalary !== "All") {
            const minSalary = filters.minSalary !== "All" ? parseInt(filters.minSalary) : 0;
            const maxSalary = filters.maxSalary !== "All" ? parseInt(filters.maxSalary) : Infinity;

            updatedJobs = updatedJobs.filter((job) => {
                if (!job.salary_min || !job.salary_max) return false; // Ignore jobs missing salary info

                const jobMinSalary = job.salary_min;
                const jobMaxSalary = job.salary_max;

                return (
                    (jobMinSalary >= minSalary && jobMinSalary <= maxSalary) ||
                    (jobMaxSalary >= minSalary && jobMaxSalary <= maxSalary) ||
                    (jobMinSalary <= minSalary && jobMaxSalary >= maxSalary)
                );
            });
        }

        // Apply additional filters for jobTitle and location
        if (filters.jobTitle) {
            updatedJobs = updatedJobs.filter(job => job.position.toLowerCase().includes(filters.jobTitle.toLowerCase()));
        }
        if (filters.location) {
            updatedJobs = updatedJobs.filter(job => job.location.toLowerCase().includes(filters.location.toLowerCase()));
        }

        // Update filtered jobs state
        setFilteredJobs(updatedJobs);
    }, [filters, jobs, loading]); // Re-filter when filters, jobs, or loading change

    return (
        <JobContext.Provider value={{
            jobs: filteredJobs,
            savedJobs,
            savedJobsWithStatus, // ✅ <-- ADD THIS Testing
            saveJob,
            removeSavedJob,
            updateSavedJobStatus,
            loading,
            error,
            filterInputs,
            setFilterInputs,
            filters,
            setFilters, // Temporary filter input values
            handleFilterChange, // Update temporary filter inputs
            applyFilters, // Apply filters when clicking Search
        }}>
            {children}
        </JobContext.Provider>
    );
}

export function useJobs() {
    return useContext(JobContext);
};
