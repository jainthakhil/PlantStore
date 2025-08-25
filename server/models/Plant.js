import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    categories: {
        type: [String],
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
    imageUrl: {
        type: String,
        default: '',
    },
});

const Plant = mongoose.model("Plant", plantSchema);
export default Plant;
