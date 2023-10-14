import React from 'react'
import "./style.css"
import { BiSearch } from 'react-icons/bi';
import { SlOptionsVertical } from 'react-icons/sl';
import Button from '@mui/material/Button';

const Friends = () => {
  return (
    <div className='Friends'>
          <div className='FriendsHeader'>
            <h2>Friends</h2>
            <div className='searchBox'>
              <div className='searchIcon'>
                <BiSearch/>
              </div>
              <input type='text' placeholder='Search'/>
              <div className='searchOptionIcon'>
                <SlOptionsVertical/>
              </div>
            </div>
          </div>
          <div className='FriendsBody'>
            <div className="friendRequestWrapper">
                <div className='friendRequestImg'>
                  <picture><img src='/assets/friend-profile-pic.jpg'></img></picture>
                </div>
                <div className='friendRequestTitle'>
                    <h2>Friends Reunion</h2>
                    <p>Sure</p>
                </div>
                <div className='friendRequestButton'>
                    <Button variant="contained">Unfriend</Button>
                    <Button variant="contained" className='removeButton'>Block</Button>
                </div>
            </div>
          </div> 
    </div>
  )
}

export default Friends
