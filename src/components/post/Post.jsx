import React, { useState } from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData'

export default function Post({post}) {
    const user = Users.filter((u)=> u.id === post.userId)[0]
    const [like ,setlike] = useState(post.like)
    const [isLiked ,setisLiked] = useState(false)

    const likeHandler = () => {
        setlike(isLiked ? like - 1 : like + 1)
        setisLiked(!isLiked) 
    }
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src={user ? user.profilePicture : ""} alt="" />
                        <span className="postUsername">{user ? user.username : ""}</span>
                        <span className="postUserDate">{post.date}</span>

                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                    </span>
                    <img className='postImg' src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/like.png" onClick={likeHandler} alt="" />
                        <img className='likeIcon' src="/assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
