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
