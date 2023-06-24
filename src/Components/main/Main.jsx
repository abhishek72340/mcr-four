import React from 'react'
import './Main.css';
import LeftSideBar from '../leftSidebar/LeftSideBar';
import RightSideBar from '../rightSideBar/RightSideBar';
import Post from '../../Pages/Post/Post';

export default function Main() {
  return (
    <div>
      <div id='main-com'>
        <LeftSideBar/>
        <Post/>
        <RightSideBar/>
        </div>
      
    </div>
  )
}
