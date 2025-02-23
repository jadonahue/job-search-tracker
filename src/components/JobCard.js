export default function JobCard({ job, className = "" }) {
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
            <p className="text-gray-700 mt-2">{job.description}</p>
            <span
                className={`inline-block px-3 py-1 mt-3 text-sm font-medium rounded ${statusColors[job.status] || "bg-gray-100 text-gray-700"}`}
            >
                {job.status}
            </span>
        </div>
    )
}