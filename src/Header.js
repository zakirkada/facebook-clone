import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import Avatar from '@mui/material/Avatar';
import "./Header.css";
import { IconButton } from '@mui/material';
import { useStateValue } from './StateProvider';
function Header () { 
    const [{ user }, dispatch] = useStateValue();
  return (
    <div className='header'>
        <div className="header__left">
             <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKytFJcTqHVxK2v01w9NPijR6KGaUl5NeuqdV8OIA&s'
                alt=''
             />
             <div className="header__input">
                <SearchIcon />
                <input placeholder='Search Facebook' type="text" />
             </div>
        </div>

        <div className="header__center">
            <div className="header__option header__option--active">
                <HomeIcon fontSize='large' />
            </div>
            <div className="header__option">
                <FlagIcon fontSize='large' />
            </div>
            <div className="header__option">
                <SubscriptionsIcon fontSize='large' />
            </div>
            <div className="header__option">
                <StorefrontIcon fontSize='large' />
            </div>
            <div className="header__option">
                <SupervisorAccountIcon fontSize='large' />
            </div>
        </div>

        <div className="header__right">
           <div className="header__info">
            <Avatar src={user.photoURL} />
             <h4>{user.displayNmae}</h4>
           </div>

           <IconButton>
            <AddOutlinedIcon />
           </IconButton>
           <IconButton>
            <ForumOutlinedIcon />
           </IconButton>
           <IconButton>
            <NotificationsActiveOutlinedIcon />
           </IconButton>
           <IconButton>
            <ExpandMoreOutlinedIcon />
           </IconButton>
        </div>
    </div>
  )
}

export default  Header;