import React from "react";
import "./style.css";
import { BiSearch } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import Button from "@mui/material/Button";
import CustomButton from "../CustomButton";

const GroupList = () => {
  return (
    <>
      <div className="groupList">
        <div className="groupListHeader">
          <h2>Group List</h2>
          <div className="searchBox">
            <div className="searchIcon">
              <BiSearch />
            </div>
            <input type="text" placeholder="Search" />
            <div className="searchOptionIcon">
              <SlOptionsVertical />
            </div>
          </div>
        </div>
        <div className="groupListBody">
          <div className="groupListWrapper">
            <div className="groupListImg">
              <picture>
                <img src="/assets/dummy-profile.png"></img>
              </picture>
            </div>
            <div className="groupListTitle">
              <h2>Friends Reunion</h2>
              <p>Hi Guys, Wassup!</p>
            </div>
            <div className="groupListButton">
              <CustomButton variant="contained">Join</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupList;
