// import { useState } from "react";
import request from "../../utils/request.js";
import useImageUrl from "../../hooks/useImageUrl.js";
import { toast } from "react-toastify";


export default function AddComment({
    car_id,
    user_id,
    commentData,
    onCreate,
    title
}) {
    const avatar = useImageUrl(user_id);

    const changeHandler = (e) => {
        onCreate(state => ({
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
                author: userInfo[0].username,
                title,
                avatar
            }

            const createdComment = await request.post('/comments', comment);

            toast.success('Your comment is added successfully!')

            onCreate(createdComment)

        } catch (error) {
            alert(error);
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