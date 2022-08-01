import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcPlus, FcCancel } from "react-icons/fc";
import PropTypes from "prop-types";
import { Buffer } from "buffer";

import { addHero, deleteHero } from "../../services/heroesApi";

import styles from "./HeroesGallery.module.css";

export default function HeroesGallery({ heroes, onDelete }) {
  const location = useLocation();
  let navigate = useNavigate();

  return (
    <ul className={styles.gallery}>
      {heroes &&
        heroes.map((hero) => (
          <li key={hero._id || hero.id} className={styles.item}>
            <Link
              to={`/heroes/${hero._id}`}
              className={
                location.pathname === "/heroes"
                  ? styles.disabledLink
                  : styles.link
              }
            >
              <img
                className={styles.image}
                src={
                  hero.imageURL
                    ? `${Buffer.from(hero.imageURL, "base64")}`
                    : hero.image.url
                }
                alt={hero.real_name}
              />
              <h3 className={styles.title}>{hero.nickname || hero.name}</h3>
            </Link>
            {location.pathname === "/heroes" ? (
              <button
                type="button"
                className={styles.button}
                onClick={() => {
                  addHero(hero);
                  navigate("/");
                }}
              >
                <FcPlus style={{ width: "60px", height: "60px" }} />
              </button>
            ) : (
              <button
                type="button"
                className={styles.button}
                onClick={() => {
                  deleteHero(hero._id);
                  onDelete(hero._id);
                }}
              >
                <FcCancel style={{ width: "60px", height: "60px" }} />
              </button>
            )}
          </li>
        ))}
    </ul>
  );
}

HeroesGallery.propTypes = {
  heroes: PropTypes.array,
};
