import React, { useState } from "react";
import "./style.css";
import ProfileIcons from "../ProfileIcons";
import { TbLogout } from "react-icons/tb";
import { AiOutlineCloudUpload } from "react-icons/ai";
import BasicModal from "../Modal";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginusers } from "../../Feature/Slice/LoginSlice";

const Sidebar = () => {
  const user = useSelector((users) => users.logIn.logined);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("users");
        dispatch(loginusers(null));
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="profile_picture" onClick={handleOpen}>
          <picture>
            <img alt="" src={user.photoURL}></img>
          </picture>
          <div className="profile-overlay">
            <AiOutlineCloudUpload />
          </div>
        </div>
        {<p>{user.displayName}</p>}
        <div className="sidebar_icons">
          <ProfileIcons />
        </div>
        <div className="logout" onClick={handleLogout}>
          <TbLogout />
        </div>
        <BasicModal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Sidebar;
