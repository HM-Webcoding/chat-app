import React from 'react'
import "./style.css"
import { BiSearch } from 'react-icons/bi';
import { SlOptionsVertical } from 'react-icons/sl';
import Button from '@mui/material/Button';

const AllUser = () => {
  return (
    <div className='allUser'>
          <div className='allUserHeader'>
            <h2>People you may know</h2>
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
          <div className='allUserBody'>
            <div className="allUserWrapper">
                <div className='allUserImg'>
                <picture><img src='/assets/friend-profile-pic.jpg'></img></picture>
                </div>
                <div className='allUserTitle'>
                    <h2>Friends Reunion</h2>
                    <p>Today, 8:56pm</p>
                </div>
                <div className='allUserButton'>
                    <Button variant="contained">Add friend</Button>
                    </div>
            </div>
            <div className="allUserWrapper">
                <div className='allUserImg'>
                <picture><img src='/assets/friend-profile-pic.jpg'></img></picture>
                </div>
                <div className='allUserTitle'>
                    <h2>Friends Reunion</h2>
                    <p>Today, 8:56pm</p>
                </div>
                <div className='allUserButton'>
                    <Button variant="contained">Add friend</Button>
                    </div>
            </div>
            <div className="allUserWrapper">
                <div className='allUserImg'>
                <picture><img src='/assets/friend-profile-pic.jpg'></img></picture>
                </div>
                <div className='allUserTitle'>
                    <h2>Friends Reunion</h2>
                    <p>Today, 8:56pm</p>
                </div>
                <div className='allUserButton'>
                    <Button variant="contained">Add friend</Button>
                    </div>
            </div>
            <div className="allUserWrapper">
                <div className='allUserImg'>
                <picture><img src='/assets/friend-profile-pic.jpg'></img></picture>
                </div>
                <div className='allUserTitle'>
                    <h2>Friends Reunion</h2>
                    <p>Today, 8:56pm</p>
                </div>
                <div className='allUserButton'>
                    <Button variant="contained">Add friend</Button>
                    </div>
            </div>
            <div className="allUserWrapper">
                <div className='allUserImg'>
                <picture><img src='/assets/friend-profile-pic.jpg'></img></picture>
                </div>
                <div className='allUserTitle'>
                    <h2>Friends Reunion</h2>
                    <p>Today, 8:56pm</p>
                </div>
                <div className='allUserButton'>
                    <Button variant="contained">Add friend</Button>
                    </div>
            </div>
            <div className="allUserWrapper">
                <div className='allUserImg'>
                <picture><img src='/assets/friend-profile-pic.jpg'></img></picture>
                </div>
                <div className='allUserTitle'>
                    <h2>Friends Reunion</h2>
                    <p>Today, 8:56pm</p>
                </div>
                <div className='allUserButton'>
                    <Button variant="contained">Add friend</Button>
                    </div>
            </div>
          </div>
          
    </div>
  )
}

export default AllUser
