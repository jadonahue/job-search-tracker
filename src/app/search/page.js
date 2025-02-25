"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Button from "@/components/Button"
import InputField from "@/components/InputField";
import JobList from "@/components/JobList";
import SelectField from "@/components/SelectField";

export default function Page() {
    // State for filters
    const [filters, setFilters] = useState({
        jobTitle: "",
        jobType: "",
        location: "",
        salaryRange: "",
        jobStatus: "",
    })

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        })
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 flex flex-col justify-center items-center my-10">
                <h2 className="text-3xl">Find Your Next Job Now!</h2>

                {/* Filter Section */}

                {/* Search Input */}
                <div className="flex flex-wrap justify-center items-center mb-6">
                    <InputField
                        type="text"
                        name="jobTitle"
                        value={filters.jobTitle}
                        onChange={handleFilterChange}
                        placeholder="Job title..."
                        className="p-2 border rounded w-60:"
                    />

                    {/* Location Filter */}
                    <InputField
                        type="text"
                        name="loction"
                        value={filters.location}
                        onChange={handleFilterChange}
                        placeholder="Enter location..."
                        className="p-2 border rounded w-60:"
                    />

                    {/* Salary Range Filter */}
                    <SelectField
                        name="salaryRange"
                        value={filters.salaryRange}
                        onChange={handleFilterChange}
                        options={["All Salaries", "50k-80k", "80k-120k", "120k+"]}
                        className="p-2"
                    >
                    </SelectField>

                    {/* Job Type Filter */}
                    <SelectField
                        name="jobType"
                        value={filters.jobType}
                        onChange={handleFilterChange}
                        options={["All Job Types", "full-time", "part-time", "contract", "Remote"]}
                        className="p-2"
                    >
                    </SelectField>

                    <Button label="Search" />
                    {/* Pass Filters to JobList */}
                    <JobList filters={filters} />
                </div>

            </main>
        </div>
    );
}
