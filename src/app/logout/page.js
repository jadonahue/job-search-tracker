
'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/store/authStore";

export default function LogoutPage() {
    const router = useRouter();
    const { logout } = useAuth();

    useEffect(() => {
        const doLogout = async () => {
            await logout();      // clear user session
            router.replace("/"); // redirect to home
        };

        doLogout();
    }, [logout, router]);

    return null; // or a loading spinner if you want
}


// import Navbar from "@/components/Navbar"

// export default function LogoutPage() {
//     return (
//         <div className="flex flex-col min-h-screen">
//             <Navbar />
//             <div className="flex items-center justify-center min-h-screen">
//                 <p>You have successfully logged out.</p>
//             </div>
//         </div>
//     )
// }