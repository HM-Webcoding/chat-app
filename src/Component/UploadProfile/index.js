import React, { useRef, useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import "./style.css";
import Imagecropper from "./imagecropper";
import "cropperjs/dist/cropper.css";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, updateProfile } from "firebase/auth";
import { loginusers } from "../../Feature/Slice/LoginSlice";

const UploadProfile = ({ setOpen }) => {
  const user = useSelector((users) => users.logIn.logined);
  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();
  // const cropperRef = createRef();
  const profilePic = useRef(null);
  const storage = getStorage();
  const storageRef = ref(storage, user.uid);
  const auth = getAuth();
  const dispatch = useDispatch();

  let handleUploadProfile = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    let reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  const getCropData = () => {
    if (cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
      const message4 = cropper.getCroppedCanvas().toDataURL();
      uploadString(storageRef, message4, "data_url").then((snapshot) => {
        getDownloadURL(storageRef).then((downloadURL) => {
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
          }).then(() => {
            setOpen(false);
            dispatch(loginusers({ ...user, photoURL: downloadURL }));
            localStorage.setItem(
              "users",
              JSON.stringify({ ...user, photoURL: downloadURL })
            );
          });
        });
      });
    }
  };

  return (
    <div className="upload_box">
      <input
        hidden
        type="file"
        ref={profilePic}
        onChange={handleUploadProfile}
      />
      <div className="upload">
        <div className="upload_icon" onClick={() => profilePic.current.click()}>
          <HiOutlinePhotograph />
        </div>
        <p className="upload_title">Upload Photo</p>
      </div>
      {image && (
        <Imagecropper
          setImage={setImage}
          image={image}
          getCropData={getCropData}
          setCropper={setCropper}
        />
      )}
    </div>
  );
};

export default UploadProfile;
