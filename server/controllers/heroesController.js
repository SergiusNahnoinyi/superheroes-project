import Hero from "../models/hero.js";

export const getHeroes = async (req, res, next) => {
  try {
    const heroes = await Hero.find();
    res.json({ message: "Success", code: 200, data: { heroes } });
  } catch (error) {
    next(error);
  }
};
