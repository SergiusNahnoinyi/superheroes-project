import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:4000/api";

export async function getHeroes() {
  const url = `/heroes`;
  try {
    const { data } = await axios.get(url);
    const { heroes } = data;
    return heroes;
  } catch (error) {
    console.error(error);
  }
}

export async function getHeroById(heroId) {
  const url = `/heroes/${heroId}`;
  try {
    const { data } = await axios.get(url);
    const { hero } = data;
    return hero;
  } catch (error) {
    console.error(error);
  }
}

export async function getHeroesBySearch(heroName) {
  const url = `https://www.superheroapi.com/api.php/1239994973410759/search/${heroName}`;
  try {
    const { data } = await axios.get(url);
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function addHero(hero) {
  const url = `/heroes`;
  try {
    const { data } = await axios.post(url, {
      nickname: `${hero.name}`,
      real_name: `${hero["biography"]["full-name"]}`, // Hyphens no longer allowed, but this API uses them, so I neeeded to use brackets to access a key
      origin_description: `${hero.work.occupation}`,
      superpowers: `${Object.keys(hero.powerstats).join(", ")}`,
      catch_phrase: "No catch phrase found. Find it in Google and add here",
      images: `${hero.image.url}`,
    });
    console.log(data);
    toast.success("You successfully added a hero!");
  } catch (error) {
    console.error(error);
    toast.error("Adding failed!");
  }
}

export async function updateHero(
  heroId,
  { catch_phrase, origin_description, superpowers }
) {
  const url = `/heroes/${heroId}`;
  try {
    const { data } = await axios.put(url, {
      catch_phrase,
      origin_description,
      superpowers,
    });
    console.log(data);
    toast.success("You successfully updated a hero!");
  } catch (error) {
    console.error(error);
  }
}

export async function deleteHero(heroId) {
  const url = `/heroes/${heroId}`;
  try {
    const { data } = await axios.delete(url);
    console.log(data);
    toast.success("You successfully deleted a hero!");
  } catch (error) {
    console.error(error);
  }
}
