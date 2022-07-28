import express from "express";
const router = express.Router();

import { getHeroes } from "../controllers/heroesController.js";

router.get("/", getHeroes);

export default router;
