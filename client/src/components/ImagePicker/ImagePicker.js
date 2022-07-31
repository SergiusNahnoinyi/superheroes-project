import { useState } from "react";
import ReactImagePickerEditor from "react-image-picker-editor";
import "react-image-picker-editor/dist/index.css";

export function ImagePicker() {
  const [imageSrc, setImageSrc] = useState("");

  const config2 = {
    borderRadius: "8px",
    language: "en",
    width: "330px",
    height: "250px",
    objectFit: "contain",
    compressInitial: null,
  };

  const initialImage = ``;

  return (
    <div>
      <ReactImagePickerEditor
        config={config2}
        imageSrcProp={initialImage}
        imageChanged={(newDataUri) => {
          setImageSrc(newDataUri);
        }}
      />
    </div>
  );
}
