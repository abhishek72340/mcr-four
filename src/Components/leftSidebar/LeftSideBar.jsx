import React from 'react'
import './LeftSideBar.css';
import {AiOutlineHome} from 'react-icons/ai'
import {BsRocket} from 'react-icons/bs'
import {BsBookmarks} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
export default function LeftSideBar() {
  return (
    <div id='left-side-bar'>
      <div id='left-sidebar-link'>
<div className='icon'><span><AiOutlineHome/></span>Home</div>
<div className='icon'><span><BsRocket/></span>Explore</div>
<div className='icon' ><span><BsBookmarks/></span>Bookmark</div>
<div className='icon'><span><CgProfile/></span>Profile</div>
</div>


    </div>
  )
}
