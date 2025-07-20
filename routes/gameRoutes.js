import express from "express";
import checkAuth from "../middlewares/checkAuth.js";
import {
  getGames,
  getGameById,
  addGame,
  editGame,
  deleteGame,
  searchGames,
} from "../controllers/gamecontroller.js";

const router = express.Router();

router.get("/games", getGames);
router.get("/games/:id", getGameById);
router.post("/games", checkAuth, addGame);
router.put("/games/:id", checkAuth, editGame);
router.delete("/games/:id", checkAuth, deleteGame);
router.get("/search", searchGames);

export default router;
