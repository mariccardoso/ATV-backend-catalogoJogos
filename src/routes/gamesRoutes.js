import express from "express";
import gamesController from "../controllers/gamesController.js";
const router = express.Router();

router.get("/", gamesController.getAll);
router.get("/:id", gamesController.getById); 
router.post("/", gamesController.create);
router.put("/:id", gamesController.update);
router.delete("/:id", gamesController.delete);

export default router;