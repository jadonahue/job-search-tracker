import JobCard from "@/components/JobCard";
import { useJobs } from "@/store/jobStore";

const JobList = ({ filterType = "all", statusFilter, setStatusFilter }) => {
    const { jobs = [], savedJobs = [], loading, error, setFilters } = useJobs();


    if (loading) return <p>Loading jobs...</p>;
    if (error) return <p>{error}</p>;

    // Determine which jobs to show
    const jobList = filterType === "saved" ? savedJobs : jobs;
    const filteredJobs = (filterType === "saved" ? savedJobs : jobs).filter(job =>
        statusFilter === "all" || job.status === statusFilter
    );

    const handleFilterChange = (newFilter) => {
        setFilters((prevFilters) => ({
            ...prevFilters, // Keep existing filters
            ...newFilter,   // Update the filter you want
        }));
    };

    return (
        <div>
            {/* Filter Buttons */}
            <div className="mb-4">
                <button onClick={() => setStatusFilter("all")}>All</button>
                <button onClick={() => setStatusFilter("applied")}>Applied</button>
                <button onClick={() => setStatusFilter("rejected")}>Rejected</button>
                <button onClick={() => setStatusFilter("offer")}>Offer</button>
            </div>

            {/* Job List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
                ) : (
                    <p className="text-gray-500">No jobs found.</p>
                )}
            </div>
        </div>
    );
};

export default JobList;
