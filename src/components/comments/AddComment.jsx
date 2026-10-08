import { use, useState } from "react";
import UserContext from "../../contexts/UserContext.js";
import request from "../../utils/request.js";

export default function AddComment({
    carId
}) {
    const [commentData, setCommentData] = useState({ content: '' });

    const { user } = use(UserContext)

    const changeHandler = (e) => {
        setCommentData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const actionHandler = async () => {
        const comment = {
            content: commentData.content,
            ownerId: user.id,
            author: user.fullName,
            carId
        }
        try {
            await request('/comments', 'POST', comment)

        } catch (error) {
            console.log(error);

        }
    }

    console.log(commentData);

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