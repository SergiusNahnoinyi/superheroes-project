import { EditText } from "react-edit-text";
import PropTypes from "prop-types";
import { Buffer } from "buffer";

import { updateHero } from "../../services/heroesApi";

import SelectButton from "../SelectButton";

import styles from "./GalleryItem.module.css";

export default function GalleryItem({ hero }) {
  return (
    <section>
      {hero && (
        <div className={styles.container}>
          <div className={styles.imageThumb}>
            {hero.imageURL ? (
              <img
                className={styles.image}
                src={hero.imageURL}
                alt={hero.nickname}
              />
            ) : (
              <img
                className={styles.image}
                alt={hero.nickname}
                src={`data:image/jpg;base64,${Buffer.from(
                  hero.updatedImage,
                  "base64"
                )}`}
              />
            )}
            <SelectButton />
          </div>
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
