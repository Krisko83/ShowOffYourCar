import { useEffect, useState } from "react";
import CommentItem from "./commentItem.jsx";
import request from "../../utils/request.js";

export default function Comments({
    car_id,
    owner_id,
    refresh
}) {


    const [comments, setComments] = useState([]);

    useEffect(() => {
        request(`/comments?car_id=eq.${car_id}&order=created_at.desc`)
            .then(result => setComments(result))
    }, [car_id, refresh])


    return (
        <div className="comments-list">

            {comments.map(comment => <CommentItem key={comment.id} {...comment} isCarOwner={comment.owner_id === owner_id} />)}

        </div>
    );
}