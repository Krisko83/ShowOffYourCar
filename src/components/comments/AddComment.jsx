import { use, useState } from "react";
import UserContext from "../../contexts/UserContext.js";
import request from "../../utils/request.js";

export default function AddComment({
    car_id,
    onCreate
}) {
    const [commentData, setCommentData] = useState('');

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
            owner_id: user.id,
            author: user.fullName,
            car_id
        }


        try {
            await request('/comments', 'POST', comment)
            setCommentData('')
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