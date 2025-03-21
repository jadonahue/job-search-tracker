import Button from "./Button"
import { useJobs } from "@/store/jobStore";

export default function JobCard({ job, className = "" }) {
    const { saveJob, savedJobs = [], removeSavedJob } = useJobs();

    console.log("useJobs() result:", useJobs()); // Debugging

    const isSaved = savedJobs.some((savedJob) => savedJob.id === job.id);

    // Define colors for each status
    const statusColors = {
        applied: "bg-blue-100 text-blue-700",
        interviewing: "bg-yellow-100 text-yellow-700",
        offer: "bg-green-100 text-green-700",
        rejected: "bg-red-100 text-red-700"
    }

    return (
        <div className={`p-4 my-3 shadow-md rounded-lg bg-indigo-200 ${className}`}>
            <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
            <p className="text-sm text-gray-600">{job.company}</p>
            {/* <p className="text-gray-700 mt-2">{job.description}</p> */}
            <div className="text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: job.description }} />

            {/* Save/Unsave Button */}
            <div className="mt-3 flex gap-2">
                <Button
                    label={isSaved ? "Unsave Job" : "Save Job"}
                    onClick={() => isSaved ? removeSavedJob(job.id) : saveJob(job)}
                    className={isSaved ? "bg-red-500 text-white" : "bg-green-500 text-white"}
                />
            </div>

            {/* Status Bade (Only show if status Exists) */}
            {job.status && (
                <span
                    className={`inline-block px-3 py-1 mt-3 text-sm font-medium rounded ${statusColors[job.status] || "bg-gray-100 text-gray-700"}`}
                >
                    {job.status}
                </span>
            )}

            {/* Apply Now Button */}
            {job.apply_url && (
                <div className="mt-4">
                    <Button label="Apply Now" href={job.apply_url} className="w-full text-center" />
                </div>
            )}
        </div>
    )
}