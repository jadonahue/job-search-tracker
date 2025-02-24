import Navbar from "@/components/Navbar"
import SignupForm from "@/components/SignupForm"

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1 justify-center items-center">
                <SignupForm />
            </div>
        </div>
    )
}