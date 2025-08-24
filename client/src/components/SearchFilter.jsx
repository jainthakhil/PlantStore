import React from "react";

const SearchFilter = ({ search, setSearch, category, setCategory, categories }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between p-4 bg-gray-100 rounded-md">
            <input
                type="text"
                placeholder="Search plants..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-2 border rounded mb-2 md:mb-0 md:w-1/2"
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-2 border rounded md:ml-2"
            >
                <option value="">All Categories</option>
                {categories.map((cat, idx) => (
                    <option key={idx} value={cat}>{cat}</option>
                ))}
            </select>
        </div>
    );
};

export default SearchFilter;
