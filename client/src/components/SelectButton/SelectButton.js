import React, { useRef } from "react";
import { FcCamera } from "react-icons/fc";

import styles from "./SelectButton.module.css";

export default function SelectButton() {
  const fileInput = useRef();

  const selectFile = () => {
    fileInput.current.click();
  };

  return (
    <div>
      <input
        type="file"
        name="image"
        style={{ display: "none" }}
        ref={fileInput}
      />
      <button type="button" className={styles.button} onClick={selectFile}>
        <FcCamera style={{ width: "60px", height: "60px" }} />
      </button>
    </div>
  );
}
