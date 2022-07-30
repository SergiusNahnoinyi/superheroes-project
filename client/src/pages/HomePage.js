import { useState, useEffect } from "react";

import HeroesGallery from "../components/HeroesGallery";
import { getHeroes } from "../services/heroesApi";

export default function HomePage() {
  const [heroes, setHeroes] = useState(null);

  useEffect(() => {
    getHeroes().then(setHeroes);
  }, [heroes]);

  return (
    <section style={{ marginBottom: "24px" }}>
      <h1 style={{ marginBottom: "16px", textAlign: "center" }}>
        Your Superheroes List
      </h1>
      <HeroesGallery heroes={heroes} />
    </section>
  );
}
