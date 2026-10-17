 
import commentTimeAgo from "../../utils/commentTimeAgo.js";
 
export default function CommentItem({
    author,
    created_at,
    content,
    isCarOwner,
    avatar
}) {
 
    return (
        <article className="comment">

            <div className="comment-header">
                {avatar ?
                    <img src={avatar} className="heading-icon" alt="User image" />
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