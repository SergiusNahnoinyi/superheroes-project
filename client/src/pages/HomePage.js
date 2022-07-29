import { useState, useEffect } from "react";

import HeroesGallery from "../components/HeroesGallery";
import { getHeroes } from "../services/heroesApi";

export default function HomePage() {
  const [heroes, setHeroes] = useState(null);

  useEffect(() => {
    getHeroes().then(setHeroes);
  }, []);

  return (
    <section>
      <h1 style={{ marginBottom: "16px", textAlign: "center" }}>Superheroes</h1>
      <HeroesGallery heroes={heroes} />
    </section>
  );
}
