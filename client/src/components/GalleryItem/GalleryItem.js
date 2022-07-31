import { useNavigate } from "react-router-dom";
import { BsArrowLeftSquare } from "react-icons/bs";
import { EditText } from "react-edit-text";
import PropTypes from "prop-types";

import { updateHero } from "../../services/heroesApi";

import "react-edit-text/dist/index.css";
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
            <EditText
              name="phrase"
              className={styles.overview}
              defaultValue={hero.catch_phrase}
              onSave={({ name, value, previousValue }) => {
                const catch_phrase = value;
                const origin_description = hero.origin_description;
                const superpowers = hero.superpowers
                  .map((power) => power)
                  .join(", ");
                updateHero(hero._id, {
                  catch_phrase,
                  origin_description,
                  superpowers,
                });
              }}
            />

            <h3 className={styles.subitle}>Real name: {hero.real_name}</h3>
            <EditText
              name="description"
              className={styles.description}
              defaultValue={hero.origin_description}
              onSave={({ name, value, previousValue }) => {
                const catch_phrase = hero.catch_phrase;
                const origin_description = value;
                const superpowers = hero.superpowers;
                updateHero(hero._id, {
                  catch_phrase,
                  origin_description,
                  superpowers,
                });
              }}
            />

            <h3 className={styles.subitle}>Superpowers</h3>
            <EditText
              name="superpowers"
              className={styles.description}
              defaultValue={hero.superpowers.map((power) => power).join(", ")}
              onSave={({ name, value, previousValue }) => {
                const catch_phrase = hero.catch_phrase;
                const origin_description = hero.origin_description;
                const superpowers = value;
                updateHero(hero._id, {
                  catch_phrase,
                  origin_description,
                  superpowers,
                });
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

GalleryItem.propTypes = {
  hero: PropTypes.object,
};
