import JobCard from "@/components/JobCard";
import SelectField from "@/components/SelectField";
import { v4 as uuidv4 } from 'uuid';

const jobs = [
    {
        id: uuidv4(),
        company: "Google",
        title: "Senior Frontend Developer",
        description: "Work on cutting-edge frontend technologies.",
        status: "interviewing",
        saved: true
    },
    {
        id: uuidv4(),
        company: "Amazon",
        title: "Senior Backend Developer",
        description: "Work on cutting-edge backend technologies.",
        status: "offer",
        saved: false
    },
    {
        id: uuidv4(),
        company: "Apple",
        title: "Senior Fullstack Developer",
        description: "Work on cutting-edge Fullstack technologies.",
        status: "applied",
        saved: true
    },
    {
        id: uuidv4(),
        company: "Netflix",
        title: "UI/UX Designer",
        description: "Work on design.",
        status: "rejected",
        saved: false
    },
    {
        id: uuidv4(),
        company: "Hulu",
        title: "UI/UX Designer",
        description: "Work on design.",
        status: "interviewing",
        saved: false
    }
]

const JobList = ({ filterType, statusFilter, setStatusFilter }) => {

    const savedJobs = jobs.filter(job => job.saved);

    const filteredSavedJobs = statusFilter && statusFilter !== "all"
        ? savedJobs.filter(job => job.status === statusFilter)
        : savedJobs;

    const savedJobsList = filteredSavedJobs.length > 0
        ? filteredSavedJobs.map((job) => <JobCard key={job.id} job={job} />)
        : <p className="text-gray-500">No saved jobs yet</p>;

    if (filterType === "saved") {
        return (
            <div>
                <h2 className="text-lg font-semibold mb-2">Saved Jobs</h2>
                <SelectField
                    name="statusFilter"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    options={["all", "applied", "interviewing", "offer", "rejected"]}
                />

                <div className="flex flex-wrap gap-4">
                    {savedJobsList}
                </div>
            </div>
        )
    }

    const appliedJobs = jobs.filter(job => job.status === "applied");
    const interviewingJobs = jobs.filter(job => job.status === "interviewing");
    const offerJobs = jobs.filter(job => job.status === "offer");
    const rejectedJobs = jobs.filter(job => job.status === "rejected");


    const appliedJobsList = appliedJobs.length > 0
        ? appliedJobs.map((job) => <JobCard key={job.id} job={job} />)
        : <p className="text-gray-500">No jobs applied to yet</p>;

    const interviewingJobsList = interviewingJobs.length > 0
        ? interviewingJobs.map((job) => <JobCard key={job.id} job={job} />)
        : <p className="text-gray-500">No job interviews yet</p>;

    const offerJobsLists = offerJobs.length > 0
        ? offerJobs.map((job) => <JobCard key={job.id} job={job} />)
        : <p className="text-gray-500">No job offers yet</p>

    const rejectedJobsList = rejectedJobs.length > 0
        ? rejectedJobs.map((job) => <JobCard key={job.id} job={job} />)
        :
        <p className="text=gray-500">No rejected jobs yet</p>

    return (
        <div className="grid gap-4 md:grid-cols-5 p-4 mx-10">
            {/* First Column: Saved Jobs */}
            <div>
                <h2 className="text-lg font-semibold mb-2">Saved</h2>
                {savedJobsList}
            </div>

            {/* Second Column: Applied */}
            <div>
                <h2 className="text-lg font-semibold mb-2">Applied</h2>
                {appliedJobsList}
            </div>

            {/* Third Column: Interviews */}
            <div>
                <h2 className="text-lg font-semibold mb-2">Interviews</h2>
                {interviewingJobsList}
            </div>

            {/* Fourth Column: Offers */}
            <div>
                <h2 className="text-lg font-semibold mb-2">Offers</h2>
                {offerJobsLists}
            </div>

            {/* Fifth Column: Rejected */}
            <div>
                <h2 className="text-lg font-semibold mb-2">Rejected</h2>
                {rejectedJobsList}
            </div>
        </div>
    )
}

export default JobList