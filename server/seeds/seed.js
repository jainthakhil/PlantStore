// seeds/seed.js
import mongoose from "mongoose";
import dotenv from "dotenv"
import Plant from "../models/Plant.js";
// const plants = require("./plantData");
import { plantsData } from "./plantData.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("MongoDB connected...");

    // Clear existing plants
    await Plant.deleteMany({});
    console.log("Old plants deleted");

    // Insert new plants
    await Plant.insertMany(plantsData);
    console.log("Database seeded with plants!");

    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
