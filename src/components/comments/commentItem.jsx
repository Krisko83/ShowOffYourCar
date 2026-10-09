import commentTimeAgo from "../../utils/commentTimeAgo.js";

export default function CommentItem({    
    author,    
    created_at,
    content,
    isCarOwner
}) {

    return (
        <article className="comment">

            <div className="comment-header">
                <strong>{author}{isCarOwner ? ' - Car Owner' : ''}</strong>
                <span>{commentTimeAgo(created_at)}</span>
            </div>

            <p>
                {content}
            </p>

        </article>
    );
}