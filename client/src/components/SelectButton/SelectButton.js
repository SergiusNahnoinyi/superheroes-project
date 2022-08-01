import React, { useRef } from "react";
import { FcCamera } from "react-icons/fc";
import PropTypes from "prop-types";

import { updateImage } from "../../services/heroesApi";

import styles from "./SelectButton.module.css";

export default function SelectButton({ heroId }) {
  const fileInput = useRef();

  const selectFile = () => {
    fileInput.current.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    console.log(file);

    const formData = new FormData();
    formData.append("image", file);

    updateImage(heroId, formData);
  };

  return (
    <div>
      <input
        type="file"
        name="image"
        style={{ display: "none" }}
        ref={fileInput}
        onChange={(event) => handleChange(event)}
      />
      <button type="button" className={styles.button} onClick={selectFile}>
        <FcCamera style={{ width: "60px", height: "60px" }} />
      </button>
    </div>
  );
}

SelectButton.propTypes = {
  id: PropTypes.string,
};
