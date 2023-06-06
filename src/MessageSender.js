import "./MessageSender.css";
import Avatar from '@mui/material/Avatar';
import React, { useState } from 'react'
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import { useStateValue } from './StateProvider';


function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        setInput("");
        setImageUrl("");
    };


  return (
    <div className="messageSender">
        <div className="messageSender__top">
            <Avatar src={user.photoURL}/>
            <form>
                <input 
                 value={input}
                 onChange= {e => setInput(e.target.value)}
                    className="messageSender__input"
                    placeholder={`What's on your mind? ${user.displayName}`}
                />
                <input
                onChange= {e => setImageUrl(e.target.value)}
                 placeholder="image URL (Optional)"/>
                <button onClick={handleSubmit} type="submit">
                    Hidden submit
                </button>
            </form>
        </div>
        <div className="messageSender__bottom">
            <div className="messageSender__option">
                <VideoCallOutlinedIcon style={{color: "red"}} />
                <h3>Live Video</h3>
            </div>
            <div className="messageSender__option">
                <PhotoLibraryOutlinedIcon style={{color: "green"}} />
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender__option">
                <InsertEmoticonOutlinedIcon style={{color: "orange"}} />
                <h3>Feeling/Activity</h3>
            </div>
        </div>
    </div>
  )
}

export default MessageSender