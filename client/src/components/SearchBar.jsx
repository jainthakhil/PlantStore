export default function SearchBar({ value, onChange, placeholder = "Search by name or category..." }) {
    return (
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full border rounded-xl px-4 py-2"
        />
    );
}