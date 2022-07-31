import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

import Hero from "../models/hero.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imagesDir = path.join(__dirname, "../", "public");

export const getHeroes = async (req, res, next) => {
  try {
    const heroes = await Hero.find();
    res.json({ message: "Success", code: 200, heroes });
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
  const { path: tempUpload, originalname } = req.file;
  const { heroId } = req.params;
  try {
    const imageName = `${originalname}`;
    const resultUpload = path.join(imagesDir, imageName);
    await fs.rename(tempUpload, resultUpload);
    const updatedImage = path.join("public", imageName);
    await Hero.findByIdAndUpdate(
      { _id: heroId },
      { updatedImage, imageURL: null }
    );
    res.status(200).json({ updatedImage });
  } catch (error) {
    await fs.unlink(tempUpload);
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
