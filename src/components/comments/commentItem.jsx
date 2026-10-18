
import { Link } from "react-router";
import commentTimeAgo from "../../utils/commentTimeAgo.js";
import UserContext from "../../contexts/UserContext.js";
import { use } from "react";

export default function CommentItem({
    author,
    created_at,
    content,
    isCarOwner,
    avatar,
    user_id
}) {
    const { isAuthenticated , userData } = use(UserContext);
    
    return (
        <article className="comment">

            <div className="comment-header">
                <Link to={isAuthenticated && user_id === userData.user.id ? '/user/profile' : `/user/user-profile/${user_id}`}>

                    {avatar ?
                        <img src={avatar} className="heading-icon" alt="User image" />
                        :
                        <span className="heading-icon" aria-hidden="true">👤</span>
                    }
                </Link>
                <strong>{author}{isCarOwner ? <span>  - Car owner!</span> : ''}</strong>
                <span>{commentTimeAgo(created_at)}</span>
            </div>

            <p>
                {content}
            </p>

        </article>
    );
}