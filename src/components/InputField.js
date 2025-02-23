export default function InputField({ type = "text", name, value, onChange, placeholder, className = "" }) {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`h-10 m-1 rounded-lg ${className}`}
        />
    )
}