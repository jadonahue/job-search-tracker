import Navbar from "@/components/Navbar"
import SignupForm from "@/components/SignupForm"
import { SignupProvider } from "@/store/SignupStore";

export default function Page() {
    return (
        <SignupProvider>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex flex-1 justify-center items-center">
                    <SignupForm />
                </div>
            </div>
        </SignupProvider>
    )
}