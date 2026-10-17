import { useState } from "react";
import request from "../../utils/request.js";

export default function AddComment({
    car_id,
    user_id,
    onCreate,
    title
}) {
    const [commentData, setCommentData] = useState('');

    const changeHandler = (e) => {
        setCommentData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const actionHandler = async () => {
        if (!commentData.content) {
            return
        };

        try {
            const userInfo = await request.getById(`/users?user_id=eq.${user_id}`)
      
            const comment = {
                car_id,
                content: commentData.content,
                author: userInfo[0].fullName,
                title
            }

           const createdComment = await request.post('/comments', comment)
            setCommentData(createdComment)
            onCreate()

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <form className="comment-form" action={actionHandler}>

            <textarea
                placeholder="Write a comment..."
                rows="4"
                name="content"
                value={commentData.content}
                onChange={changeHandler}
            />

            <button type="submit">
                Add Comment
            </button>

        </form>
    );
}