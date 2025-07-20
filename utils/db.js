import mongoose from "mongoose";
import env from "dotenv";

env.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to local MongoDB"))
  .catch((error) => console.error("MongoDB connection error", er));

  