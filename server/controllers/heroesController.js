import Hero from "../models/hero.js";

export const getHeroes = async (req, res, next) => {
  try {
    const heroes = await Hero.find();
    res.json({ message: "Success", code: 200, data: { heroes } });
  } catch (error) {
    next(error);
  }
};

export const addHero = async (req, res, next) => {
  try {
    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    } = req.body;
    const hero = await Hero.create({
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    });
    res.status(201).json({ message: "Created", code: 201, data: { hero } });
  } catch (error) {
    next(error);
  }
};
