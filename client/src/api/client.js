const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

/**
 * Get plants from backend
 */
export const getPlants = async () => {
    const res = await fetch(`${API_URL}/plants`);
    if (!res.ok) throw new Error("Failed to fetch plants");
    return res.json();
};

/**
 * Add new plant
 */
export const createPlant = async (plantData) => {
    const res = await fetch(`${API_URL}/plants`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(plantData),
    });
    if (!res.ok) throw new Error("Failed to add plant");
    return res.json();
};
