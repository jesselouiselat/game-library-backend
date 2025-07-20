import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import gameRoutes from "./routes/gameRoutes.js";
import limiter from "./middlewares/rateLimit.js";
import morgan from "morgan";

import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/test", (req, res) => {
  console.log("WORKING!");
  res.send("Route is working!");
});

app.use(limiter);

app.use(morgan("dev"));

app.use("/api/auth", authRoutes);

app.use("/api/game", gameRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`________Server running on port ${port}________`);
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

startServer();
