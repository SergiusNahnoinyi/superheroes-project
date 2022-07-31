import express from "express";
const router = express.Router();

import { upload } from "../middlewares/multerMiddleware.js";

import {
  getHeroes,
  getHeroById,
  addHero,
  updateHero,
  updateImage,
  deleteHero,
} from "../controllers/heroesController.js";

router.get("/", getHeroes);
router.get("/:heroId", getHeroById);
router.post("/", addHero);
router.put("/:heroId", updateHero);
router.patch("/images/:heroId", upload.single("image"), updateImage);
router.delete("/:heroId", deleteHero);

export default router;
