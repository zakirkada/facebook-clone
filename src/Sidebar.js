import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useStateValue } from './StateProvider';
function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='sidebar'>
        <SidebarRow src={user.photoURL}
         title={user.displayName} />
        <SidebarRow Icon={LocalHospitalIcon}
            title="COVID-19 Information Center"
        />
        <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
        <SidebarRow Icon={PeopleAltOutlinedIcon} title='Friends' />
        <SidebarRow Icon={ChatBubbleOutlineOutlinedIcon} title='Messenger' />
        <SidebarRow Icon={StorefrontOutlinedIcon} title='Marketplace' />
        <SidebarRow Icon={VideoLibraryOutlinedIcon} title='Videos' />
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Marketplace' />
        
    </div>
  )
}

export default Sidebar