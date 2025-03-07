"use client";

import { useJobs } from "@/store/jobStore";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import JobList from "@/components/JobList";
import SelectField from "@/components/SelectField";

export default function Page() {
    const { filters, setFilters } = useJobs();

    const handleFilterChange = (e) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 flex flex-col justify-center items-center my-10">
                <h2 className="text-3xl">Find Your Next Job Now!</h2>

                {/* Filters */}
                <div className="flex flex-wrap justify-center items-center mb-6">
                    <InputField name="jobTitle" value={filters.jobTitle} onChange={handleFilterChange} placeholder="Job title..." />
                    <InputField name="location" value={filters.location} onChange={handleFilterChange} placeholder="Enter location..." />
                    <SelectField name="salaryRange" value={filters.salaryRange} onChange={handleFilterChange} options={["All Salaries", "50k-80k", "80k-120k", "120k+"]} />
                    <SelectField name="jobType" value={filters.jobType} onChange={handleFilterChange} options={["All Job Types", "full-time", "part-time", "contract", "Remote"]} />
                    <Button label="Search" />
                </div>

                <JobList />
            </main>
        </div>
    );
}
