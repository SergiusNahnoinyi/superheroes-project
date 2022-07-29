// import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./HeroesGallery.module.css";

export default function HeroesGallery({ heroes }) {
  return (
    <ul className={styles.Gallery}>
      {heroes &&
        heroes.map((hero) => (
          <li key={hero._id} className={styles.item}>
            <a href="#" className={styles.link}>
              <img
                className={styles.image}
                src={
                  hero.images
                    ? hero.images
                    : "https://raw.githubusercontent.com/SergiusNahnoinyi/superheroes-project/main/public/logo512.png"
                }
                alt={hero.real_name}
              />
              <h3 className={styles.title}>{hero.nickname}</h3>
            </a>
          </li>
        ))}
    </ul>
  );
}

HeroesGallery.propTypes = {
  heroes: PropTypes.array,
};
