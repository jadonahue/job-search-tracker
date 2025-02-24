import Navbar from "@/components/Navbar";
import Button from "@/components/Button"
import InputField from "@/components/InputField";
import JobList from "@/components/JobList";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center items-center my-10">
        <h2 className="text-3xl mb-6">Dashboard</h2>
        <JobList />
      </main>
    </div>
  );
}
