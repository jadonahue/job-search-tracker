"use client";

import JobList from "@/components/JobList";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getSavedJobsWithStatus } from "@/service/jobService";
import JobCard from "@/components/JobCard";
import { useJobs } from "@/store/jobStore"; // ✅ IMPORT CONTEXT HOOK: Testing


export default function Page() {
    const [statusFilter, setStatusFilter] = useState("all");
    // ✅ USE STORE INSTEAD:
    const { savedJobsWithStatus } = useJobs();

    // ✅ REPLACE testing Store job status
    // const [jobStatus, setJobStatus] = useState([])

    // ✅ REPLACE testing Get saved job current status
    // useEffect(() => {
    //     async function fetchJobs() {
    //         const jobs = await getSavedJobsWithStatus();
    //         setJobStatus(jobs);
    //     }

    //     fetchJobs();
    // }, []);

    //testing Function to 
    function StatusColumn({ title, jobs }) {
        return (
            <div className="flex-1 min-w-[200px] bg-gray-100 rounded-lg p-4">
                <h2 className="font-bold mb-2 text-center">{title}</h2>
                <div className="space-y-2">
                    {jobs.map(job => (

                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </div>
        );
    }


    // const appliedJobs = jobStatus.filter(job => job.status === "Applied")
    // const interviewingJobs = jobStatus.filter(job => job.status === "Interviewing")
    // const offerJobs = jobStatus.filter(job => job.status === "Offer")
    // const rejectedJobs = jobStatus.filter(job => job.status === "Rejected")

    // ✅ SAFELY FILTER JOBS: Testing
    const appliedJobs = (savedJobsWithStatus || []).filter(job => job.status === "Applied");
    const interviewingJobs = (savedJobsWithStatus || []).filter(job => job.status === "Interviewing");
    const offerJobs = (savedJobsWithStatus || []).filter(job => job.status === "Offer");
    const rejectedJobs = (savedJobsWithStatus || []).filter(job => job.status === "Rejected");

    // testing
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex flex-1 justify-center items-center p-4">
                <JobList filterType="saved" statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
            </div>

            <div className="flex gap-4 p-4 overflow-x-auto">
                {/* Applied */}
                <StatusColumn title="Applied" jobs={appliedJobs} />
                {/* Interviewing */}
                <StatusColumn title="Interviewing" jobs={interviewingJobs} />
                {/* Offer */}
                <StatusColumn title="Offer" jobs={offerJobs} />
                {/* Rejected */}
                <StatusColumn title="Rejected" jobs={rejectedJobs} />
            </div>
        </div>
    );


    // return (
    //     <div className="flex flex-col min-h-screen">
    //         <Navbar />

    //         <div className="flex flex-1 justify-center items-center p-4">
    //             {/* Pass filterType as "saved" to show only saved jobs */}
    //             <JobList filterType="saved" statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
    //         </div>

    //         <div className="flex gap-4 p-4 overflow-x-auto">
    //             {/* Column 1 */}
    //             <div className="flex-1 min-w-[200px] bg-gray-100 rounded-lg p-4">
    //                 <h2 className="font-bold mb-2 text-center">Applied</h2>
    //                 <div className="space-y-2">
    //                     {/* Job cards go here */}
    //                     {appliedJobs.map(job => (<div key={job.id}>{job.title}</div>))}
    //                 </div>
    //             </div>

    //             {/* Column 2 */}
    //             <div className="flex-1 min-w-[200px] bg-gray-100 rounded-lg p-4">
    //                 <h2 className="font-bold mb-2 text-center">Interviewing</h2>
    //                 <div className="space-y-2">
    //                     {/* Job cards go here */}
    //                     {interviewingJobs.map(job => (<div key={job.id}>{job.title}</div>))}
    //                 </div>
    //             </div>

    //             {/* Column 3 */}
    //             <div className="flex-1 min-w-[200px] bg-gray-100 rounded-lg p-4">
    //                 <h2 className="font-bold mb-2 text-center">Offer</h2>
    //                 <div className="space-y-2">
    //                     {/* Job cards go here */}
    //                     {offerJobs.map(job => (<div key={job.id}>{job.title}</div>))}
    //                 </div>
    //             </div>

    //             {/* Column 4 */}
    //             <div className="flex-1 min-w-[200px] bg-gray-100 rounded-lg p-4">
    //                 <h2 className="font-bold mb-2 text-center">Rejected</h2>
    //                 <div className="space-y-2">
    //                     {/* Job cards go here */}
    //                     {rejectedJobs.map(job => (<div key={job.id}>{job.title}</div>))}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
}
