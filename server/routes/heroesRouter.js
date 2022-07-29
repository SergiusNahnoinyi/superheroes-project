import express from "express";
const router = express.Router();

import {
  getHeroes,
  addHero,
  updateHero,
  deleteHero,
} from "../controllers/heroesController.js";

router.get("/", getHeroes);
router.post("/", addHero);
router.put("/:heroId", updateHero);
router.delete("/:heroId", deleteHero);

export default router;
