import { v4 as uuidv4 } from 'uuid';

export default function SelectField({ name, value, onChange, options, className = "" }) {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            className={`h-10 m-1 rounded-lg p-2 text-gray-400 ${className}`}
        >
            {options.map((option) => (
                <option key={uuidv4()} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}