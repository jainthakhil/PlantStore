
import React, { useState } from "react";
import { createPlant } from "../api/client";

const AdminPage = () => {
    const [form, setForm] = useState({
        name: "",
        price: "",
        categories: "",
        available: true,
        imageUrl: ""   // ✅ new field
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.price || !form.imageUrl) {
            setMessage("Name, Price, and Image URL are required!");
            return;
        }

        try {
            await createPlant({
                ...form,
                price: Number(form.price),
                categories: form.categories.split(",").map((c) => c.trim()),
            });
            setMessage("Plant added successfully!");
            setForm({ name: "", price: "", categories: "", available: true, imageUrl: "" });
        } catch {
            setMessage("Failed to add plant.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-6 p-4 border rounded shadow">
            <h2 className="text-xl font-bold mb-4">Add New Plant</h2>
            {message && <p className="mb-2 text-green-600">{message}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                <input
                    type="text"
                    name="name"
                    placeholder="Plant Name"
                    value={form.name}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={form.price}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="categories"
                    placeholder="Categories (comma separated)"
                    value={form.categories}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
                {/* ✅ New Image URL input */}
                <input
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL"
                    value={form.imageUrl}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="available"
                        checked={form.available}
                        onChange={handleChange}
                    />
                    <span>Available</span>
                </label>
                <button type="submit" className="bg-green-600 text-white p-2 rounded">
                    Add Plant
                </button>
            </form>
        </div>
    );
};

export default AdminPage;
