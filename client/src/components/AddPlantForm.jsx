import { useState } from "react";

const AddPlantForm = ({ addPlant }) => {
    const [form, setForm] = useState({
        name: "",
        price: "",
        categories: "",
        available: true,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.price) {
            setError("Name and Price are required");
            return;
        }
        try {
            setLoading(true);
            setError(null);
            await addPlant({ ...form, categories: form.categories.split(",") });
            setSuccess(true);
            setForm({ name: "", price: "", categories: "", available: true });
        } catch (err) {
            setError("Failed to add plant", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-md mx-auto bg-white shadow p-6 rounded-lg"
        >
            <input
                type="text"
                placeholder="Plant Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border rounded px-3 py-2 w-full"
            />
            <input
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="border rounded px-3 py-2 w-full"
            />
            <input
                type="text"
                placeholder="Categories (comma separated)"
                value={form.categories}
                onChange={(e) => setForm({ ...form, categories: e.target.value })}
                className="border rounded px-3 py-2 w-full"
            />
            <select
                value={form.available}
                onChange={(e) =>
                    setForm({ ...form, available: e.target.value === "true" })
                }
                className="border rounded px-3 py-2 w-full"
            >
                <option value="true">Available</option>
                <option value="false">Out of Stock</option>
            </select>

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-600">Plant added successfully!</p>}

            <button
                disabled={loading}
                type="submit"
                className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
            >
                {loading ? "Adding..." : "Add Plant"}
            </button>
        </form>
    );
};

export default AddPlantForm;
