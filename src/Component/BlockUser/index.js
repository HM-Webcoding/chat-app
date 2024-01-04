import React, { useEffect, useState } from 'react'
import "./style.css"
import { BiSearch } from 'react-icons/bi';
import { SlOptionsVertical } from 'react-icons/sl';
import Button from '@mui/material/Button';
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useSelector } from 'react-redux';

const BlockUser = () => {
  let user = useSelector(user => user.logIn.logined)
  let [blockedUser, setBlockedUser] = useState()
  const db = getDatabase();

  useEffect(()=>{
    const starCountRef = ref(db, 'block');
    onValue(starCountRef, (snapshot) => {
      let blockArry = []
    snapshot.forEach((blockItem)=>{
      if(blockItem.val().blockById == user.uid){
        blockArry.push({
          block: blockItem.val().block,
          blockId: blockItem.val().blockId,
          id: blockItem.key
        })
      }
      setBlockedUser(blockArry)
    })
  });
}, [])

//unblock user
const handleUnblock = (item) =>{
  remove(ref(db, "block/" + item.id))
}

  return (
    <div className='blockUser'>
          <div className='blockUserHeader'>
            <h2>Blocked user</h2>
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
          <div className='blockUserBody'>
            {blockedUser ? blockedUser.map((item, i)=>(
              <div className="blockUserWrapper" key={i}>
                <div className='blockUserImg'>
                <picture><img src='/assets/friend-profile-pic.jpg'></img></picture>
                </div>
                <div className='blockUserTitle'>
                    <h2>{item.block}</h2>
                    <p>Today, 8:56pm</p>
                </div>
                <div className='blockUserButton'>
                    <Button variant="contained" onClick={()=> handleUnblock(item)}>Unblock</Button>
                </div>
             </div>
            )): ''}
            
          </div>
          
    </div>
  )
}

export default BlockUser
