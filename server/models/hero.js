import mongoose from "mongoose";
const Schema = mongoose.Schema;

const hero = new Schema(
  {
    nickname: {
      type: String,
      unique: true,
      required: [true, "Set nickname for a hero"],
    },
    real_name: {
      type: String,
      unique: true,
      required: [true, "Set name for a hero"],
    },
    origin_description: {
      type: String,
    },
    superpowers: [String],
    catch_phrase: {
      type: String,
    },
    imageURL: [String],
    updatedImage: Buffer,
  },
  { versionKey: false }
);

const Hero = mongoose.model("heroes", hero);

export default Hero;
