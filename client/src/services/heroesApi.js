import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api";

export default async function getHeroes() {
  const url = `/heroes`;
  try {
    const { data } = await axios.get(url);
    const { heroes } = data;
    return heroes;
  } catch (error) {
    console.error(error);
  }
}
