import React from 'react'
import "./style.css"
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { TbMessageDots } from 'react-icons/tb';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const ProfileIcons = () => {
  return (
    <div className='profileIconsWrapper'>
      <div className='profileIcons'>
        <NavLink to="/"><AiOutlineHome/></NavLink>
      </div>
      <div className='profileIcons'>
        <TbMessageDots/>
      </div>
      <div className='profileIcons'>
        <MdOutlineNotificationsNone/>
      </div>
      <div className='profileIcons'>
        <AiOutlineSetting/>
      </div>
    </div>
  )
}

export default ProfileIcons
