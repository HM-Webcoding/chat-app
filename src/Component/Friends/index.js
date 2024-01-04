import React, { useEffect, useState } from "react";
import "./style.css";
import { BiSearch } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import { BiChevronsDown } from "react-icons/bi";
import { getDatabase, ref, onValue, remove, set, push } from "firebase/database";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CustomButton from "../CustomButton/index";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "var(--white-color)",
  boxShadow: 24,
  borderRadius: "8px",
  padding: "20px 40px",
};
const Friends = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const db = getDatabase();
  const user = useSelector((users) => users.logIn.logined);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const starCountRef = ref(db, "friends");
    onValue(starCountRef, (snapshot) => {
      let friendArr = [];
      snapshot.forEach((item) => {
        if (
          user.uid == item.val().receiverid ||
          user.uid == item.val().senderid
        ) {
          friendArr.push({ ...item.val(), id: item.key });
        }
      });
      setFriends(friendArr);
    });
  }, []);

  const handleBlock = (item) => {
    if (item.senderid == user.uid){
      set(push(ref(db, 'block')), {
        block: item.receivername,
        blockId: item.receiverid,
        blockBy : item.sendername,
        blockById : item.senderid
      }).then(()=>{
        remove(ref(db, "friends/" + item.id))
      })
    }else{
      set(push(ref(db, 'block')), {
        block: item.sendername,
        blockId: item.senderid,
        blockBy : item.receivername,
        blockById : item.receiverid
      }).then(()=>{
        remove(ref(db, "friends/" + item.id))
      })
    }
  }

  const handleUnfrien = (item) => {
    remove(ref(db, "friends/" + item.id));
    setOpen(false);
  };

  return (
    <div className="Friends">
      <div className="FriendsHeader">
        <h2>Friends</h2>
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
      <div className="FriendsBody">
        {friends.map((item, i) => (
          <div className="FriendsWrapper" key={i}>
            <div className="FriendsImg">
              <picture>
                <img src="/assets/friend-profile-pic.jpg"></img>
              </picture>
            </div>
            <div className="FriendsTitle">
              <h2>
                {user.uid === item.senderid
                  ? item.receivername
                  : item.sendername}
              </h2>
              <p>Sure</p>
            </div>
            <div className="FriendsButton">
              <CustomButton
                onClick={() => handleOpen()}
                className="friendsOption"
              >
                <BiChevronsDown />
              </CustomButton>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} className="modalbox">
                  <CustomButton
                    variant="contained"
                    onClick={() => handleUnfrien(item)}
                  >
                    Unfriend
                  </CustomButton>
                  <CustomButton 
                  variant="contained" 
                  className="removeButton"
                  onClick={() => handleBlock(item)}>
                    Block
                  </CustomButton>
                </Box>
              </Modal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
