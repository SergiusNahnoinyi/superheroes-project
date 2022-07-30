import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

import SearchBar from "../components/SearchBar";
import HeroesGallery from "../components/HeroesGallery";

import { getHeroesBySearch } from "../services/heroesApi";

import "react-toastify/dist/ReactToastify.css";

export default function HeroesPage() {
  const [heroName, setHeroName] = useState("");
  const [heroes, setHeroes] = useState(null);

  let navigate = useNavigate();
  const location = useLocation();
  const searchURL = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (!heroName) {
      return setHeroName(searchURL);
    }
    getHeroesBySearch(heroName).then((results) => {
      if (!results) {
        toast.error("Not found");
        return setHeroes(null);
      }
      setHeroes(results);
    });
  }, [heroName, searchURL]);

  const handleFormSubmit = (query) => {
    setHeroName(query);
    navigate({ ...location, search: `query=${query}` });
  };

  return (
    <section style={{ marginBottom: "24px" }}>
      <h1 style={{ marginBottom: "16px", textAlign: "center" }}>
        Find Your Superhero
      </h1>
      <SearchBar onSubmit={handleFormSubmit} />
      <HeroesGallery heroes={heroes} />
      <ToastContainer />
    </section>
  );
}
