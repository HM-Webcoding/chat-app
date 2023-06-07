import React from 'react'
import "./style.css"
import { BiSearch } from 'react-icons/bi';
import { SlOptionsVertical } from 'react-icons/sl';
import Button from '@mui/material/Button';

const BlockUser = () => {
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
            <div className="blockUserWrapper">
                <div className='blockUserImg'>
                <picture><img src='/assets/friend-profile-pic.jpg'></img></picture>
                </div>
                <div className='blockUserTitle'>
                    <h2>Friends Reunion</h2>
                    <p>Today, 8:56pm</p>
                </div>
                <div className='blockUserButton'>
                    <Button variant="contained">Unblock</Button>
                </div>
            </div>
            <div className="blockUserWrapper">
                <div className='blockUserImg'>
                <picture><img src='/assets/friend-profile-pic.jpg'></img></picture>
                </div>
                <div className='blockUserTitle'>
                    <h2>Friends Reunion</h2>
                    <p>Today, 8:56pm</p>
                </div>
                <div className='blockUserButton'>
                    <Button variant="contained">Unblock</Button>
                </div>
            </div>
            <div className="blockUserWrapper">
                <div className='blockUserImg'>
                <picture><img src='/assets/friend-profile-pic.jpg'></img></picture>
                </div>
                <div className='blockUserTitle'>
                    <h2>Friends Reunion</h2>
                    <p>Today, 8:56pm</p>
                </div>
                <div className='blockUserButton'>
                    <Button variant="contained">Unblock</Button>
                </div>
            </div>
          </div>
          
    </div>
  )
}

export default BlockUser
