import express from "express";
const router = express.Router();

import {
  getHeroes,
  addHero,
  updateHero,
} from "../controllers/heroesController.js";

router.get("/", getHeroes);
router.post("/", addHero);
router.put("/:heroId", updateHero);

export default router;
