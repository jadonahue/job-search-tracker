export default function Card({ children, className = "" }) {
    return (
        <div className={`flex flex-col items-center justify-center bg-indigo-200 p-6 rounded-lg shadow-lg ${className}`}>
            {children}
        </div>
    )
}