import React, { useEffect, useState } from "react";
import "./style.css";
import { BiSearch, BiMessageRounded } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import Button from "@mui/material/Button";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";
import { useSelector } from "react-redux";
import CustomButton from "../CustomButton";

const AllUser = () => {
  const user = useSelector((users) => users.logIn.logined);
  const db = getDatabase();
  const [userlist, setUserList] = useState([]);
  const [filterUser, setFilterUser] = useState([]);
  const [frndReq, setFrndReq] = useState([]);
  const [friends, setFriends] = useState([]);

  // show all user list
  useEffect(() => {
    const starCountRef = ref(db, "users");
    onValue(starCountRef, (snapshot) => {
      let userArray = [];
      snapshot.forEach((userlist) => {
        if (user.uid != userlist.key) {
          userArray.push({ ...userlist.val(), id: userlist.key });
        }
      });
      setUserList(userArray);
    });
  }, []);
  // searching
  let handleUserSearch = (e) => {
    let searchWord = [];
    if (e.target.value.length == 0) {
      setFilterUser([]);
    } else {
      userlist.filter((item) => {
        if (
          item.username.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          searchWord.push(item);
          setFilterUser(searchWord);
        }
      });
    }
  };
  // show friends
  useEffect(() => {
    const starCountRef = ref(db, "friends/");
    onValue(starCountRef, (snapshot) => {
      let friendArry = [];
      snapshot.forEach((item) => {
        friendArry.push(item.val().senderid + item.val().receiverid);
      });
      setFriends(friendArry);
    });
  }, []);
  // show friend request
  useEffect(() => {
    const starCountRef = ref(db, "frndRequst/");
    onValue(starCountRef, (snapshot) => {
      let frndReqArry = [];
      snapshot.forEach((item) => {
        frndReqArry.push(item.val().senderid + item.val().receiverid);
      });
      setFrndReq(frndReqArry);
    });
  }, []);

  // friend request send

  let handleFrndReq = (item) => {
    set(ref(db, "frndRequst/" + user.uid + item.id), {
      sendername: user.displayName,
      senderid: user.uid,
      receivername: item.username,
      receiverid: item.id,
    });
  };

  // cancel friend request
  let handleCancelReq = (userid) => {
    remove(ref(db, "frndRequst/" + user.uid + userid.id));
  };

  return (
    <div className="allUser">
      <div className="allUserHeader">
        <h2>People you may know</h2>
        <div className="searchBox">
          <div className="searchIcon">
            <BiSearch />
          </div>
          <input onChange={handleUserSearch} type="text" placeholder="Search" />
          <div className="searchOptionIcon">
            <SlOptionsVertical />
          </div>
        </div>
      </div>
      <div className="allUserBody">
        {filterUser.length > 0
          ? filterUser.map((item, i) => (
              <div className="allUserWrapper" key={i}>
                <div className="allUserImg">
                  <picture>
                    <img src={item.photoURL}></img>
                  </picture>
                </div>
                <div className="allUserTitle">
                  <h2>{item.username}</h2>
                  <p>Today, 8:56pm</p>
                </div>
                <div className="allUserButton">
                  <Button variant="contained">Add friend</Button>
                </div>
              </div>
            ))
          : userlist.map((item, i) => (
              <div className="allUserWrapper" key={i}>
                <div className="allUserImg">
                  <picture>
                    <img src={item.photoURL}></img>
                  </picture>
                </div>
                <div className="allUserTitle">
                  <h2>{item.username}</h2>
                  <p>Today, 8:56pm</p>
                </div>
                {friends.includes(item.id + user.uid) ||
                friends.includes(user.uid + item.id) ? (
                  <CustomButton className="message" variant="contained">
                    <BiMessageRounded /> Message
                  </CustomButton>
                ) : (
                  <div className="allUserButton">
                    {frndReq.includes(item.id + user.uid) ||
                    frndReq.includes(user.uid + item.id) ? (
                      <Button
                        variant="contained"
                        className="removeButton"
                        onClick={() => handleCancelReq(item)}
                      >
                        Cancel
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleFrndReq(item)}
                        variant="contained"
                      >
                        Add friend
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ))}
      </div>
    </div>
  );
};

export default AllUser;
