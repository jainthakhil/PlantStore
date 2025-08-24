import express from "express";
import { getPlants, addPlant } from "../controllers/plantController.js";

const router = express.Router();

router.get("/", getPlants);   // fetch plants with search & filter
router.post("/", addPlant);   // add new plant (admin feature)

export default router;
