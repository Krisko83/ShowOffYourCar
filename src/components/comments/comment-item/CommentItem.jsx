import { Link } from "react-router"; 
import { use } from "react";
import commentTimeAgo from "../../../utils/commentTimeAgo.js";
import UserContext from "../../../contexts/UserContext.js";

export default function CommentItem({
    author,
    created_at,
    content,
    isCarOwner,
    avatar,
    user_id
}) {
    const { isAuthenticated, userData } = use(UserContext);
    const commentOwnerId = user_id;
 

    return (
        <article className="comment">

            <div className="comment-header">
                {isAuthenticated ?
                    <Link to={isAuthenticated && commentOwnerId === userData.user.id ? '/user/profile' : `/user/user-profile/${commentOwnerId}`}>
                        {avatar ?
                            <img src={avatar} className="heading-icon" alt="User image" />
                            :
                            <span className="heading-icon" aria-hidden="true">👤</span>
                        }
                    </Link>
                    :
                    <span className="heading-icon" aria-hidden="true">👤</span>
                }
                <strong>{author}{isCarOwner ? <span>  - Car owner!</span> : ''}</strong>
                <span>{commentTimeAgo(created_at)}</span>
            </div>

            <p>
                {content}
            </p>

        </article>
    );
}