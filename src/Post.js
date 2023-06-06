import React from 'react'
import "./Post.css";
import Avatar from '@mui/material/Avatar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Post({profilePic, image, username, timestamp, message}) {
    
  return (
   
    <div className='post'>
        <div className="post__top">
           <Avatar src={profilePic}
           className="post__avatar"/>
           <div className="post__topInfo">
            <h3>{username}</h3>
            <p>{timestamp}</p>

           </div> 
        </div>
        <div className="post__bottom">
            <p>{message}</p>
        </div>
        <div className="post__image">
            <img src={image} alt=""/>
        </div>
        <div className="post__options">
            <div className="post__option">
                <ThumbUpAltOutlinedIcon />
                <p>Like</p>
            </div>
            <div className="post__option">
                <ChatBubbleOutlineOutlinedIcon />
                <p>Connect</p>
            </div>
            <div className="post__option">
                <NearMeOutlinedIcon />
                <p>Share</p>
            </div>
            <div className="post__option">
                <AccountCircleOutlinedIcon />
                <ExpandMoreOutlinedIcon  />
            </div>
        </div>
    </div>
  );
}

export default Post