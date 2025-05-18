import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Topbar from '../../components/Topbar/Topbar';
import SideBar from '../../components/sidebar/SideBar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';

import './profile.css'

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src="/assets/person/1.jpeg" alt="" />
                            <img className='profileUserImg' src="/assets/person/7.jpeg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Nizar</h4>
                            <span className="profileInfoDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi assumenda dolore. Illum ex doloribus necessitatibus repudiandae ipsam nulla vitae excepturi, veniam ullam distinctio tempore mollitia blanditiis sint laudantium hic?</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar Profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
