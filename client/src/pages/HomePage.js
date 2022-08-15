import { useState, useEffect } from "react";

import HeroesGallery from "../components/HeroesGallery";
import Pagination from "../components/Pagination";

import { getHeroes } from "../services/heroesApi";

export default function HomePage() {
  const [heroes, setHeroes] = useState(null);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    getHeroes(page).then((response) => {
      setHeroes(response.heroes);
      setPages(response.pages);
    });
  }, [page]);

  const deleteHero = (id) => {
    setHeroes(heroes.filter((hero) => hero._id !== id));
  };

  return (
    <section style={{ marginBottom: "24px" }}>
      <h1 style={{ marginBottom: "16px", textAlign: "center" }}>
        Your Superheroes List
      </h1>
      <HeroesGallery heroes={heroes} onDelete={deleteHero} />
      <Pagination page={page} pages={pages} changePage={setPage} />
    </section>
  );
}
