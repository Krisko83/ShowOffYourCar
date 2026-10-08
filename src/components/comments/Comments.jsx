import { useEffect, useState } from "react";
import CommentItem from "./commentItem.jsx";
import request from "../../utils/request.js";

export default function Comments({
    carId,
    refresh
}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        request(`/comments?carId=eq.${carId}&order=created_at.desc`)
        .then(result => setComments(result))
    }, [carId,refresh])
 
    
    return (
        <div className="comments-list">

            {comments.map(comment => <CommentItem key={comment.id} {...comment} />)} 

        </div>
    );
}