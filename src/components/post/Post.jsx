import React from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Post() {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src="/assets/person/1.jpeg" alt="" />
                        <span className="postUsername">Nizar Esmat</span>
                        <span className="postUserDate">5 Min</span>

                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        hey! its my first post
                    </span>
                    <img className='postImg' src="/assets/post/1.jpeg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/like.png" alt="" />
                        <img className='likeIcon' src="/assets/heart.png" alt="" />
                        <span className="postLikeCounter">32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
