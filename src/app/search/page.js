"use client";

import { useJobs } from "@/store/jobStore";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import JobList from "@/components/JobList";
import SelectField from "@/components/SelectField";

export default function Page() {

    const { filterInputs, handleFilterChange, applyFilters } = useJobs();

    // Check if filters are undefined or null before using them
    if (!filterInputs) {
        return <div>Loading filters...</div>; // Display a loading state
    }

    console.log("Current filterInputs:", filterInputs); // Debugging log


    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 flex flex-col justify-center items-center my-10">
                <h2 className="text-3xl">Find Your Next Job Now!</h2>

                {/* Filters */}
                <div className="flex flex-wrap justify-center items-center mb-6">
                    <InputField
                        name="jobTitle"
                        value={filterInputs.jobTitle || ""}
                        onChange={handleFilterChange}
                        placeholder="Job title..."

                    />
                    <InputField
                        name="location"
                        value={filterInputs.location || ""}
                        onChange={handleFilterChange}
                        placeholder="Enter location..."
                    />

                    {/* Min Salary Dropdown */}
                    <SelectField
                        name="minSalary"
                        value={filterInputs.minSalary || "All"} // Ensures default value
                        onChange={handleFilterChange}
                        options={["All", "50000", "80000", "120000"]}
                    />

                    {/* Max Salary Dropdown */}
                    <SelectField
                        name="maxSalary"
                        value={filterInputs.maxSalary || "All"} // Ensures default value
                        onChange={handleFilterChange}
                        options={["All", "80000", "120000", "150000"]}
                    />

                    <SelectField
                        name="jobType"
                        value={filterInputs.jobType || "All Job Types"}
                        onChange={handleFilterChange}
                        options={["All Job Types", "full-time", "part-time", "contract", "Remote"]}

                    />
                    <Button label="Search" onClick={applyFilters} />
                </div>

                <JobList />
            </main>
        </div>
    );
}
