import React from 'react'
import "./style.css"
import ProfileIcons from '../ProfileIcons'
import { TbLogout } from 'react-icons/tb';

const Sidebar = () => {
  return (
    <div className='sidebar'>
     <div className='sidebarWrapper'>
        <div className='profile_picture'>
            <picture><img src='/assets/profile.png'></img></picture>
            <p>Hamidur Rashid</p>
        </div>
        <div className='sidebar_icons'>
            <ProfileIcons/>
        </div>
        <div className='logout'>
           <TbLogout />
        </div>
     </div>
    </div>
  )
}

export default Sidebar
