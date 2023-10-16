import React, { useEffect, useState } from "react";
import "./style.css";
import { BiSearch } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";

const FrienRequest = () => {
  const user = useSelector((users) => users.logIn.logined);
  const db = getDatabase();
  const [friendRequest, setFriendRequest] = useState([]);

  // show friend request
  useEffect(() => {
    const starCountRef = ref(db, "frndRequst");
    onValue(starCountRef, (snapshot) => {
      let frndReqArr = [];
      snapshot.forEach((item) => {
        if (item.val().receiverid == user.uid) {
          frndReqArr.push({ ...item.val(), id: item.key });
        }
      });
      setFriendRequest(frndReqArr);
    });
  }, []);

  // accept request
  let handleAcceptReq = (item) => {
    set(push(ref(db, "friends")), {
      ...item,
    }).then(() => {
      remove(ref(db, "frndRequst/" + item.id));
    });
  };

  return (
    <div className="friendRequest">
      <div className="friendRequestHeader">
        <h2>Friend Request</h2>
        <SlOptionsVertical />
        {/* <div className='searchBox'>
              <div className='searchIcon'>
                <BiSearch/>
              </div>
              <input type='text' placeholder='Search'/>
              <div className='searchOptionIcon'>
                <SlOptionsVertical/>
              </div>
            </div> */}
      </div>
      <div className="friendRequestBody">
        {friendRequest.map((item, i) => (
          <div className="friendRequestWrapper" key={i}>
            <div className="friendRequestImg">
              <picture>
                <img src="/assets/friend-profile-pic.jpg"></img>
              </picture>
            </div>
            <div className="friendRequestTitle">
              <h2>{item.sendername}</h2>
              <p>Hi Guys, Wassup!</p>
            </div>
            <div className="friendRequestButton">
              <Button variant="contained" onClick={() => handleAcceptReq(item)}>
                Accept
              </Button>
              <Button variant="contained" className="removeButton">
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrienRequest;
