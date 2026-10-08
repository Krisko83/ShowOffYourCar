import commentTimeAgo from "../../utils/commentTimeAgo.js";

export default function CommentItem({    
    author,    
    created_at,
    content
}) {

    return (
        <article className="comment">

            <div className="comment-header">
                <strong>{author}</strong>
                <span>{commentTimeAgo(created_at)}</span>
            </div>

            <p>
                {content}
            </p>

        </article>
    );
}