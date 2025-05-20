// import { updateSavedJobStatus } from "@/service/jobService";
import Button from "./Button"
import { useJobs } from "@/store/jobStore";

// Truncate the JobCard so its more readable
function truncate(str = "", maxLength = 100) {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}

// strip html from job
function stripHtml(html = "") {
    if (typeof document !== "undefined") {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || "";
    }
    return "";
}

export default function JobCard({ job, className = "" }) {
    const { saveJob, savedJobs = [], removeSavedJob, updateSavedJobStatus } = useJobs();

    console.log("useJobs() result:", useJobs()); // Debugging

    const isSaved = savedJobs.some((savedJob) => savedJob.id === job.id);

    function updateStatus(status) {
        console.log(status);
        console.log(job.id);
        updateSavedJobStatus(job.id, status);
        console.log("This worked");
    }

    // Define colors for each status
    const statusColors = {
        applied: "bg-blue-100 text-blue-700",
        interviewing: "bg-yellow-100 text-yellow-700",
        offer: "bg-green-100 text-green-700",
        rejected: "bg-red-100 text-red-700"
    }

    return (
        <div className={`p-4 my-3 shadow-md rounded-lg bg-indigo-200 ${className}`}>
            <h2 className="text-lg font-semibold text-gray-800">{truncate(job.title, 50)}</h2>
            <p className="text-sm text-gray-600">{truncate(job.company, 30)}</p>
            {/* <p className="text-gray-700 mt-2">{job.description}</p> */}
            <p className="text-gray-700 mt-2">{truncate(stripHtml(job.description, 100))}</p>

            {/* Save/Unsave Button */}
            <div className="mt-3 flex gap-2">
                <Button
                    label={isSaved ? "Unsave Job" : "Save Job"}
                    onClick={() => isSaved ? removeSavedJob(job.id) : saveJob(job)}
                    className={isSaved ? "bg-red-500 text-white" : "bg-green-500 text-white"}
                />
            </div>

            {/* Applied Button */}
            <div className="mt-3 flex gap-2">
                <Button
                    label={"Applied"}
                    onClick={() => updateStatus("Applied")}
                    className={""}
                />
                {/* <button
                    onClick={() => updateStatus("Applied")}
                    className={"bg-red-500 text-white"}
                >
                    Applied</button> */}
            </div>

            {/* Interviewing Button */}
            <div className="mt-3 flex gap-2">

                <Button
                    label={"Interviewing"}
                    onClick={() => updateStatus("Interviewing")}
                    className={""}
                />
                {/* <button
                    onClick={() => updateStatus("Interviewing")}
                    className={"bg-red-500 text-white"}
                >
                    Interviewing</button> */}
            </div>

            {/* Offer Button */}
            <div className="mt-3 flex gap-2">
                <Button
                    label={"Offer"}
                    onClick={() => updateStatus("Offer")}
                    className={""}
                />
                {/* <button
                    onClick={() => updateStatus("Offer")}
                    className={"bg-red-500 text-white"}
                >
                    Offer</button> */}
            </div>

            {/* Rejected Button */}
            <div className="mt-3 flex gap-2">

                <Button
                    label={"Rejected"}
                    onClick={() => updateStatus("Rejected")}
                    className={""}
                />
                {/* <button
                    onClick={() => updateStatus("Rejected")}
                    className={"bg-red-500 text-white"}
                >
                    Rejected</button> */}
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