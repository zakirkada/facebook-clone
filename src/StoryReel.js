import React from 'react'
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'>
        <Story 
        image="https://images.pexels.com/photos/1068205/pexels-photo-1068205.jpeg?auto=compress&cs=tinysrgb&w=400"
        profilesrc="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Zakir Kada"
        />
        <Story 
        image="https://images.pexels.com/photos/1231215/pexels-photo-1231215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        profilesrc="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Zakir Kada"
        />
        <Story 
        image="https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        profilesrc="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Zakir Kada"
        />
        <Story 
        image="https://images.pexels.com/photos/2026960/pexels-photo-2026960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        profilesrc="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Zakir Kada"
        />
        <Story 
        image="https://images.pexels.com/photos/127968/pexels-photo-127968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        profilesrc="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Zakir Kada"
        />
    </div>
  )
}

export default StoryReel