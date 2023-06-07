import React from 'react'
import "./style.css"
import { BiSearch } from 'react-icons/bi';
import { SlOptionsVertical } from 'react-icons/sl';
import Button from '@mui/material/Button';

const FrienRequest = () => {
  return (
      <div className='friendRequest'>
          <div className='friendRequestHeader'>
            <h2>Friend  Request</h2>
            <SlOptionsVertical/>
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
          <div className='friendRequestBody'>
            <div className="friendRequestWrapper">
              <div className='friendRequestImg'>
              <picture><img src='/assets/friend-profile-pic.jpg'></img></picture>
              </div>
              <div className='friendRequestTitle'>
                <h2>Friends Reunion</h2>
                <p>Hi Guys, Wassup!</p>
              </div>
              <div className='friendRequestButton'>
                <Button variant="contained">Accept</Button>
                <Button variant="contained" className='removeButton'>Remove</Button>
                </div>
            </div>
            <div className="friendRequestWrapper">
              <div className='friendRequestImg'>
                <picture><img src='/assets/friend-profile-pic-2.jpg'></img></picture>
              </div>
              <div className='friendRequestTitle'>
                <h2>Friends Reunion</h2>
                <p>Hi Guys, Wassup!</p>
              </div>
              <div className='friendRequestButton'>
                <Button variant="contained">Accept</Button>
                <Button variant="contained" className='removeButton'>Remove</Button>
                </div>
            </div>
            <div className="friendRequestWrapper">
              <div className='friendRequestImg'>
                <picture><img src='/assets/dummy-profile.png'></img></picture>
              </div>
              <div className='friendRequestTitle'>
                <h2>Friends Reunion</h2>
                <p>Hi Guys, Wassup!</p>
              </div>
              <div className='friendRequestButton'>
                <Button variant="contained">Accept</Button>
                <Button variant="contained" className='removeButton'>Remove</Button>
                </div>
            </div>
            <div className="friendRequestWrapper">
              <div className='friendRequestImg'>
              <picture><img src='/assets/friend-profile-pic-2.jpg'></img></picture>
              </div>
              <div className='friendRequestTitle'>
                <h2>Friends Reunion</h2>
                <p>Hi Guys, Wassup!</p>
              </div>
              <div className='friendRequestButton'>
                <Button variant="contained">Accept</Button>
                <Button variant="contained" className='removeButton'>Remove</Button>
                </div>
            </div>
            <div className="friendRequestWrapper">
              <div className='friendRequestImg'>
                <picture><img src='/assets/dummy-profile.png'></img></picture>
              </div>
              <div className='friendRequestTitle'>
                <h2>Friends Reunion</h2>
                <p>Hi Guys, Wassup!</p>
              </div>
              <div className='friendRequestButton'>
                <Button variant="contained">Accept</Button>
                <Button variant="contained" className='removeButton'>Remove</Button>
                </div>
            </div>
          </div>
      </div>
  )
}

export default FrienRequest
