import Plant from "../models/plant.js";

// @desc Get all plants (with search & filter)
export const getPlants = async (req, res) => {
    try {
        const { search, category } = req.query;

        let query = {};

        if (search) {
            query.name = { $regex: search, $options: "i" }; // case-insensitive
        }

        if (category) {
            query.categories = { $regex: category, $options: "i" };
        }

        const plants = await Plant.find(query);
        res.json(plants);
    } catch (error) {
        res.status(500).json({ message: "Error fetching plants" });
    }
};

// @desc Add new plant (Admin feature)
export const addPlant = async (req, res) => {
    try {
        const { name, price, categories, available, imageUrl } = req.body;

        if (!name || !price || !categories.length || !imageUrl) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newPlant = new Plant({
            name,
            price,
            categories,
            available,
            imageUrl,
        });

        await newPlant.save();
        res.status(201).json(newPlant);
    } catch (error) {
        res.status(500).json({ message: "Error adding plant" });
    }
};
