import Hero from "../models/hero.js";

export const getHeroes = async (req, res, next) => {
  const { page, limit = 5 } = req.query;
  const skip = (page - 1) * limit;
  const totalDocs = await Hero.countDocuments();
  const pages = Math.ceil(totalDocs / limit);
  try {
    if (page > pages) {
      return res.status(404).json({ message: "Page not found" });
    }

    const heroes = await Hero.find({}, "", {
      skip,
      limit: Number(limit),
    });
    res.json({
      message: "Success",
      code: 200,
      heroes,
      page,
      pages,
      count: heroes.length,
    });
  } catch (error) {
    next(error);
  }
};

export const getHeroById = async (req, res, next) => {
  const { heroId } = req.params;
  try {
    const hero = await Hero.findOne({ _id: heroId });
    res.json({ message: "Success", code: 200, hero });
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
      imageURL,
    } = req.body;
    const hero = await Hero.create({
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      imageURL,
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

export const updateImage = async (req, res, next) => {
  const { path } = req.file;
  const { heroId } = req.params;
  try {
    await Hero.findByIdAndUpdate({ _id: heroId }, { imageURL: path });
    res.status(200).json({ path });
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
