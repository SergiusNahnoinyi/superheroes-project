import React, { useState, useRef } from "react";
import { FcCamera } from "react-icons/fc";
import PropTypes from "prop-types";

import styles from "./SelectButton.module.css";

export default function SelectButton({ heroId }) {
  const [file, setFile] = useState(null);
  const fileInput = useRef();

  const selectFile = () => {
    fileInput.current.click();
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <input
        type="file"
        name="image"
        style={{ display: "none" }}
        ref={fileInput}
        onChange={handleChange}
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
