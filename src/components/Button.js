import Link from "next/link"

export default function Button({ label, onClick, href = "/", className = "" }) {

    // If custom onClick is provided, trigger it
    const handleClick = (e) => {
        if (onClick) {
            onClick(e)
        }
    }

    return (
        <Link href={href}>
            <button
                className={`bg-indigo-200 rounded-lg text-indigo-800 hover:bg-indigo-800 hover:text-indigo-200 hover:outline-indigo-200 hover:outline font-bold py-2 px-4 m-2 ${className}`}
                onClick={onClick}
            >
                {label}
            </button>
        </Link>
    )
}