'use client';

import { HomeIcon, DocumentMagnifyingGlassIcon, StarIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Define visibilty rules for path url 
const visibilityRules = {
    "/": ["Home", "Signup"],
    "*": ["Dashboard", "Search", "Saved"]
}

const links = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
    { name: 'Search', href: '/search', icon: DocumentMagnifyingGlassIcon },
    { name: "Signup", href: "/signup", icon: UserPlusIcon },
    { name: 'Saved', href: '/saved', icon: StarIcon }
]

export default function NavLinks() {
    const pathname = usePathname();

    console.log("Current Pathname:", pathname);


    // Get allowed links for pathname
    const allowedLinks = visibilityRules[pathname] || visibilityRules["*"];

    return (
        <div className="flex flex-row gap-3 ml-auto">
            {links
                .filter(link => allowedLinks.includes(link.name)) // Filter visible links
                .map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-indigo-200 hover:text-indigo-800 md:flex-none md:justify-center md:p-2 md:px-3',
                                {
                                    'bg-indigo-200 text-indigo-800':
                                        pathname === link.href,
                                }
                            )}
                        >
                            <LinkIcon className="w-6" />
                            <p className="hidden sm:block">{link.name}</p>
                        </Link>
                    )
                })}
        </div>
    )
}