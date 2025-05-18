import React from 'react'
import './sideBar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

import { Users } from '../../dummyData'
import CloseFriends from '../closeFriends/CloseFriends';
export default function SideBar() {
    return (
        <div className='sideBar'>
            <div className="sideBarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <RssFeedIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarItem">
                        <ChatIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarItem">
                        <PlayCircleFilledIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarItem">
                        <GroupIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarItem">
                        <BookmarkIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarItem">
                        <HelpOutlineIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarItem">
                        <WorkIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarItem">
                        <EventIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarItem">
                        <SchoolIcon className='sidebarIcon' />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className='sidebarButton'>show More</button>
                <hr className='sidebarHr' />
                <ul className="siebarFrinedList">
                    {
                    Users.map((value, index) => {
                        return (
                            <CloseFriends freind={value} key={index} />
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    )
}