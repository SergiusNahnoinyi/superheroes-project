import express from "express";
const router = express.Router();

import { getHeroes, addHero } from "../controllers/heroesController.js";

router.get("/", getHeroes);
router.post("/", addHero);

export default router;
