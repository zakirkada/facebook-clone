import React, { useEffect, useState } from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import  db  from './firebase'

function Feed() {
  
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
     
        <Post 
          profilePic="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          message="message is working"
          timestamp="this is a timestamp"
          username="Zakir Kada"
          image="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Post 
          profilePic="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          message="message is working"
          timestamp="this is a timestamp"
          username="Zakir Kada"
          image="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Post 
          profilePic="https://images.pexels.com/photos/7171858/pexels-photo-7171858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          message="message is working"
          timestamp="this is a timestamp"
          username="Zakir Kada"
          image="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      
    </div>
  )
}

export default Feed
