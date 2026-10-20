import { useEffect, useState } from "react";
import CommentItem from "./CommentItem.jsx";
import request from "../../utils/request.js";

export default function Comments({
    car_id,
    carOwner_id,
    commentsData
}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        request.getAll(`/comments?car_id=eq.${car_id}&order=created_at.desc`)
            .then(result => setComments(result))
    }, [car_id, commentsData])

 
    
    return (
        <div className="comments-list">
            {comments.map(comment => <CommentItem key={comment.id} {...comment} isCarOwner={comment.user_id === carOwner_id} />)}
        </div>
    );
}