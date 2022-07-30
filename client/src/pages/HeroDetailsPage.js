import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import GalleryItem from "../components/GalleryItem";
import { getHeroById } from "../services/heroesApi";

export default function HeroDetailsPage() {
  const [hero, setHero] = useState(null);
  const { heroId } = useParams();

  useEffect(() => {
    getHeroById(heroId).then(setHero);
  }, [heroId]);

  return <GalleryItem hero={hero} style={{ marginBottom: "24px" }} />;
}
