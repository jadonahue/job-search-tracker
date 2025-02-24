import Link from "next/link"

export default function Button({ label, onClick, href, type = "button", className = "" }) {
    // If it's a link button, use Link
    if (href) {
        return (
            <Link href={href}>
                <button
                    className={`bg-indigo-200 rounded-lg text-indigo-800 hover:bg-indigo-800 hover:text-indigo-200 hover:outline-indigo-200 hover:outline font-bold py-2 px-4 m-2 ${className}`}
                    onClick={onClick}
                >
                    {label}
                </button>
            </Link>
        );
    }

    // Otherwise, it's a regular button
    return (
        <button
            type={type} // Allows the button to be used for form submission
            className={`bg-indigo-200 rounded-lg text-indigo-800 hover:bg-indigo-800 hover:text-indigo-200 hover:outline-indigo-200 hover:outline font-bold py-2 px-4 m-2 ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}