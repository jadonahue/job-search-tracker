import JobCard from "@/components/JobCard";
import { useJobs } from "@/store/jobStore";

const JobList = () => {
    const { jobs, loading, error } = useJobs();

    if (loading) return <p>Loading jobs...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.length > 0 ? (
                jobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
                <p className="text-gray-500">No jobs found.</p>
            )}
        </div>
    );
};

export default JobList;
