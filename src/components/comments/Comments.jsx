import { useEffect, useState } from "react";
import CommentItem from "./CommentItem.jsx";
import request from "../../utils/request.js";
import { toast } from "react-toastify";

export default function Comments({
    car_id,
    carOwner_id,
    onCreate
}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const abortController = new AbortController()

        request.getAll(`/comments?car_id=eq.${car_id}&order=created_at.desc`, { signal: abortController.signal })
            .then(result => setComments(result))
            .catch(err => toast.error(err))

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