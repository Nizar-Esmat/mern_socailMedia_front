import React from 'react'
import './closeFriends.css'
export default function CloseFriends({freind}) {
    console.log(freind)
    return (
        <li className="sidebarFrined">
            <img className='sidebarFrinedImg' src={freind.profilePicture} alt="" />
            <span className="sidebarFrinedName">{freind.username}</span>
        </li>
    )
}
