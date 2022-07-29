import Hero from "../models/hero.js";

export const getHeroes = async (req, res, next) => {
  try {
    const heroes = await Hero.find();
    res.json({ message: "Success", code: 200, heroes });
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
    res.status(201).json({ message: "Created", code: 201, hero });
  } catch (error) {
    next(error);
  }
};

export const updateHero = async (req, res, next) => {
  try {
    const { heroId } = req.params;
    const fields = req.body;
    const hero = await Hero.findByIdAndUpdate({ _id: heroId }, fields, {
      new: true,
    });
    res.json({ message: "Updated", code: 200, hero });
  } catch (error) {
    next(error);
  }
};

export const deleteHero = async (req, res, next) => {
  try {
    const { heroId } = req.params;
    const hero = await Hero.findByIdAndRemove({ _id: heroId });
    res.json({ message: "Deleted", code: 200, hero });
  } catch (error) {
    next(error);
  }
};
