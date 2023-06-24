import React from 'react'
import './RightSideBar.css';
import {AiFillCaretDown} from 'react-icons/ai';
export default function RightSideBar() {
  return (
    <div id='right-side-bar'>

<div id='right-sidebar-button'>
<span id='sort-heading'>Sort By</span>
<div id='sort-button'>Latest Posts  <span><AiFillCaretDown/></span></div>
</div>
    </div>
  )
}
