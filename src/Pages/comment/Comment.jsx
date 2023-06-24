import React from 'react'
import './Comment.css';
import { forumData } from '../../Database/database';
import { useNavigate } from 'react-router-dom'
import LeftSideBar from '../../Components/leftSidebar/LeftSideBar';
import RightSideBar from '../../Components/rightSideBar/RightSideBar';
import Post from '../../Pages/Post/Post';
import { useParams } from 'react-router-dom';
import { BiComment } from 'react-icons/bi';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BiBookmark } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';


export default function Comment() {
    const navigate = useNavigate()
    const { id } = useParams();
    const filterdPost = forumData.posts.find(item => item.postId === id)

    return (

        <div>
            <h3 id='post-text-comment' onClick={() => navigate('/')}>Post</h3>
            <div id='comment-page'>

                <LeftSideBar />
                <div id='comment-data'>
                    <div id='post-theme'>

                        <div id='post-theme-data'>
                            <span className='data-icon'>posted by @{filterdPost.username}</span>
                            <h3 className='data-icon'>{filterdPost.post}</h3>
                            <div id='tags-course'>{filterdPost.tags.map(item => <span id='course-button'>{item}</span>)}</div>

                            <div id='text-container'> <div id='description-container'> <span id='description'>{filterdPost.postDescription}</span></div></div>
                            <span id='line-container'> <div id='line'></div></span>
                            <div id='post-icons'>
                                <span onClick={() => navigate(`/comment/${filterdPost.postId}`)}><BiComment /></span>
                                <span><AiOutlineShareAlt /></span>
                                <span><BiBookmark /></span>
                            </div>
                        </div>
                    </div>

               
                </div>

            
            </div>

<div id='post-comment'>
            {
                filterdPost.comments.map(coment => 
                
                <div id='coment-icon-data'>
                    <img src={coment.picUrl} alt="" width='30px' height='30'/>
                    <div id='remain-data'>
                    <h4>@{coment.username}</h4>
                    <p>Replying to @tanaypratap</p>
                    <span>{coment.comment}</span>
                    <div id='coment-book'>
                        <span><AiOutlineHeart/></span>
                        <span><BiComment/></span>
                        <span><AiOutlineShareAlt /></span>
                    </div>
                    </div>
                
                </div>)
            }

</div>
        </div>
    )
}
