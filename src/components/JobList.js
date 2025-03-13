import JobCard from "@/components/JobCard";
import { useJobs } from "@/store/jobStore";

const JobList = () => {
    const { jobs, loading, error, setFilters } = useJobs();


    if (loading) return <p>Loading jobs...</p>;
    if (error) return <p>{error}</p>;

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
                <button onClick={() => setFilters({ status: "all" })}>All</button>
                <button onClick={() => setFilters({ status: "applied" })}>Applied</button>
                <button onClick={() => setFilters({ status: "rejected" })}>Rejected</button>
                <button onClick={() => setFilters({ status: "offer" })}>Offer</button>
            </div>

            {/* Job List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.length > 0 ? (
                    jobs.map((job) => <JobCard key={job.id} job={job} />)
                ) : (
                    <p className="text-gray-500">No jobs found.</p>
                )}
            </div>
        </div>
    );
};

export default JobList;
