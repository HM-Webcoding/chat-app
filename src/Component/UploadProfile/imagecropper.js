import React from "react";
import "./style.css";
import { GiCancel } from "react-icons/gi";
import Cropper from "react-cropper";
import { Button } from "@mui/material";

const Imagecropper = ({ setImage, image, getCropData, setCropper }) => {
  return (
    <>
      <div className="cropper-box">
        <div className="close-box" onClick={() => setImage("")}>
          <GiCancel />
        </div>
        <div className="photo-preview">
          <div className="img-preview"></div>
        </div>
        <div className="cropper">
          <Cropper
            style={{ height: 300, width: "100%" }}
            // zoomTo={0.15}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            guides={false}
            onInitialized={(instance) => {
              setCropper(instance);
            }}
          />
        </div>
        <div className="upload-btn" onClick={getCropData}>
          <Button variant="contained">Upload Photo</Button>
        </div>
      </div>
    </>
  );
};

export default Imagecropper;
