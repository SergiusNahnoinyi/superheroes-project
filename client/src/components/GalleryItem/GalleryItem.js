import { useNavigate } from "react-router-dom";
import { BsArrowLeftSquare } from "react-icons/bs";
import PropTypes from "prop-types";

import styles from "./GalleryItem.module.css";

export default function GalleryItem({ hero }) {
  let navigate = useNavigate();

  return (
    <section>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          navigate(-1);
        }}
      >
        <BsArrowLeftSquare style={{ width: "2em", height: "2em" }} />
      </button>
      {hero && (
        <div className={styles.container}>
          <img className={styles.image} src={hero.images} alt={hero.nickname} />
          <div className={styles.card}>
            <h1 className={styles.title}>{hero.nickname}</h1>
            <p className={styles.overview}>{hero.catch_phrase}</p>

            <h3 className={styles.subitle}>Real name: {hero.real_name}</h3>
            <p className={styles.description}>{hero.origin_description}</p>

            <h3 className={styles.subitle}>Superpowers</h3>
            <p className={styles.description}>
              {hero.superpowers.map((power) => power).join(", ")}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

GalleryItem.propTypes = {
  hero: PropTypes.object,
};
