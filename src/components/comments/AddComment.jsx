import { use, useState } from "react";
import UserContext from "../../contexts/UserContext.js";
import request from "../../utils/request.js";

export default function AddComment({
    car_id,
    onCreate,
    title
}) {
    const [commentData, setCommentData] = useState('');

    const { user } = use(UserContext);
    const user_id = user.user.id

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
            const userInfo = await request(`/users?id=eq.${user_id}`)

            const comment = {
                content: commentData.content,
                owner_id: userInfo.id,
                author: userInfo.fullName,
                car_id,
                title
            }

            await request.post('/comments', comment)
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