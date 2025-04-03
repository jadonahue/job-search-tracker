import Link from "next/link"
import NavLinks from "./NavLinks"
import { BriefcaseIcon } from "@heroicons/react/24/outline"

export default function Navbar() {
    return (
        <div className="sticky top-0 bg-indigo-800 flex flex-row flex-wrap items-center justify-center px-3 py-4 md:px-2 w-full shadow-md z-10">
            <Link href="/">
                <BriefcaseIcon className="w-10 h-10 mx-10" />
            </Link>
            <NavLinks />
        </div>
    )
}