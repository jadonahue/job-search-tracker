import Navbar from "@/components/Navbar";
import Button from "@/components/Button"
import Card from "@/components/Card"
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center items-center my-10">
        <Card>
          <div className="flex items-center gap-2">
            <h2 className="text-3xl text-indigo-800 font-semibold">Find Your Next Job Now!</h2>
            <DocumentMagnifyingGlassIcon className="h-10 w-10 text-indigo-800" />
          </div>
          <Button label="Signup" href={"/signup"} className="mt-9 border border-indigo-800" />
        </Card>
      </main>
    </div>

  );
}
