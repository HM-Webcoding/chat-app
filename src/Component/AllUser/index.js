import React, { useEffect, useState } from "react";
import "./style.css";
import { BiSearch } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import Button from "@mui/material/Button";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

const AllUser = () => {
  const user = useSelector((users) => users.logIn.logined);
  const db = getDatabase();
  const [userlist, setUserList] = useState([]);
  const [filterUser, setFilterUser] = useState([]);

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

  console.log(userlist);
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
                <div className="allUserButton">
                  <Button variant="contained">Add friend</Button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default AllUser;
