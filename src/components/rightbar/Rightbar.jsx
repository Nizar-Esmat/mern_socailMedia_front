import React from 'react'
import './rightBar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'
export default function rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Polina</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>Profile</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarinfoKey">City:</span>
            <span className="rightbarinfoValue">Bani suef</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarinfoKey">From:</span>
            <span className="rightbarinfoValue">Bani suef</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarinfoKey">RelationShip:</span>
            <span className="rightbarinfoValue">Bani suef</span>
          </div>
        </div>
       <h4 className='rightbarTitle'>User Friends</h4>
       <div className="rightbarFollowings">
        <div className="rightbarFollwing">
          <img className='rightbarFollowingImg' src="/assets/person/1.jpeg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollwing">
          <img className='rightbarFollowingImg' src="/assets/person/1.jpeg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollwing">
          <img className='rightbarFollowingImg' src="/assets/person/1.jpeg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollwing">
          <img className='rightbarFollowingImg' src="/assets/person/1.jpeg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollwing">
          <img className='rightbarFollowingImg' src="/assets/person/1.jpeg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>

       </div>

      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightBarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}