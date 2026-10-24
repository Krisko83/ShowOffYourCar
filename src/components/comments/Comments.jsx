import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { commentsApi } from "../../api/index.js";
import CommentItem from "./comment-item/CommentItem.jsx";

export default function Comments({
    car_id,
    carOwner_id,
    onCreate
}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const abortController = new AbortController()

        commentsApi.getAllCarsComments(`/comments?car_id=eq.${car_id}&order=created_at.desc`, { signal: abortController.signal })
            .then(result => setComments(result))
            .catch(err => {
                if (err.name !== 'AbortError') {
                    toast.error('Failed to retrive comments from server. Please try agoin later!')
                }
            })

        return () => {
            abortController.abort();
        }

    }, [car_id, onCreate])



    return (
        <div className="comments-list">
            {comments.length ?
                comments.map(comment => <CommentItem key={comment.id} {...comment} isCarOwner={comment.user_id === carOwner_id} />)
                :
                <p>There is no comments yet!</p>
            }
        </div>
    );
}