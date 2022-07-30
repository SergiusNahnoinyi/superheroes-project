import axios from "axios";

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
    return data;
  } catch (error) {
    console.error(error);
  }
}
