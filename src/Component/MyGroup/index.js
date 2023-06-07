import React from 'react'
import "./style.css"
import { BiSearch } from 'react-icons/bi';
import { SlOptionsVertical } from 'react-icons/sl';

const MyGroup = () => {
  return (
    <div className='myGroup'>
          <div className='myGroupHeader'>
            <h2>My Group</h2>
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
          <div className='myGroupBody'>
            <div className="myGroupWrapper">
              <div className='myGroupImg'>
              <picture><img src='/assets/friend-profile-pic.jpg'></img></picture>
              </div>
              <div className='myGroupTitle'>
                <h2>Friends Reunion</h2>
                <p>Dinner?</p>
              </div>
              <div className='myGroupButton'>
                <p>Yesterday, 6:22pm</p>
                </div>
            </div>
            <div className="myGroupWrapper">
              <div className='myGroupImg'>
              <picture><img src='/assets/friend-profile-pic-2.jpg'></img></picture>
              </div>
              <div className='myGroupTitle'>
                <h2>Friends Reunion</h2>
                <p>Dinner?</p>
              </div>
              <div className='myGroupButton'>
                <p>Yesterday, 6:22pm</p>
                </div>
            </div>
            <div className="myGroupWrapper">
              <div className='myGroupImg'>
              <picture><img src='/assets/friend-profile-pic.jpg'></img></picture>
              </div>
              <div className='myGroupTitle'>
                <h2>Friends Reunion</h2>
                <p>Dinner?</p>
              </div>
              <div className='myGroupButton'>
                <p>Yesterday, 6:22pm</p>
                </div>
            </div>
            <div className="myGroupWrapper">
              <div className='myGroupImg'>
              <picture><img src='/assets/friend-profile-pic-2.jpg'></img></picture>
              </div>
              <div className='myGroupTitle'>
                <h2>Friends Reunion</h2>
                <p>Dinner?</p>
              </div>
              <div className='myGroupButton'>
                <p>Yesterday, 6:22pm</p>
                </div>
            </div>
          </div>
      </div>
  )
}

export default MyGroup
