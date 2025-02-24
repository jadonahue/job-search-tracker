import JobList from "@/components/JobList";
import Navbar from "@/components/Navbar";

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1 justify-center items-center">
                <JobList filterType="saved" />
            </div>
        </div>
    )
}