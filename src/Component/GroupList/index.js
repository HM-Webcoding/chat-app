import React, { useEffect, useState } from "react";
import "./style.css";
import { BiSearch } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import CustomButton from "../CustomButton";
import GroupModal from "./Modal";
import { getDatabase, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";

const GroupList = () => {
  const [groupName, setGroupName] = useState("")
  const [groupTag, setGroupTag] = useState("")
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const db = getDatabase();
  const user = useSelector(user => user.logIn.logined)

 const handleCreate = ()=>{
  set(push(ref(db, 'groups' )), {
    groupName,
    groupTag,
    admin: user.displayName,
    adminId: user.uid 
  }).then(()=>{
    setOpen(false)
  })
 }
    
  
  return (
    <>
      <div className="groupList">
        <div className="groupListHeader">
          <h2>Group List</h2>
          <div className="groupListHeaderWrapper">
            <div className="searchBox">
              <div className="searchIcon">
                <BiSearch />
              </div>
              <input type="text" placeholder="Search" />
              <div className="searchOptionIcon">
                <SlOptionsVertical />
              </div>
            </div>
            <div>
              <GroupModal 
              setGroupName={setGroupName} 
              setGroupTag={setGroupTag} 
              handleCreate={handleCreate}
              setOpen={setOpen}
              handleOpen={handleOpen}
              open={open}/>
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
