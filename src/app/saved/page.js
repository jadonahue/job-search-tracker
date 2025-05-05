"use client";

import JobList from "@/components/JobList";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Page() {
    const [statusFilter, setStatusFilter] = useState("all");

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1 justify-center items-center p-4">
                {/* Pass filterType as "saved" to show only saved jobs */}
                <JobList filterType="saved" statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
            </div>
        </div>
    );
}
