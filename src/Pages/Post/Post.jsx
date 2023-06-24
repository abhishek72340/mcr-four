import React, { useState } from 'react';
import './Post.css'
import {useNavigate} from 'react-router-dom'
import { BiComment } from 'react-icons/bi';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BiBookmark } from 'react-icons/bi';


import { forumData } from '../../Database/database'
export default function Post() {
    const [data, setData] = useState();
    const navigate =useNavigate();


    return (
        <div>
            {
                forumData.posts.map((post) => {
                    return (
                        <div id='post-theme'>

                            <div id='post-theme-data'>
                                <span className='data-icon'>posted by @{post.username}</span>
                                <h3 className='data-icon'>{post.post}</h3>
                                <div id='tags-course'>{post.tags.map(item => <span id='course-button'>{item}</span>)}</div>

                                <div id='text-container'> <div id='description-container'> <span id='description'>{post.postDescription}</span></div></div>
                                <span id='line-container'> <div id='line'></div></span>
                                <div id='post-icons'>
                                    <span onClick={()=>navigate(`/comment/${post.postId}`)}><BiComment /></span>
                                    <span><AiOutlineShareAlt /></span>
                                    <span><BiBookmark /></span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
