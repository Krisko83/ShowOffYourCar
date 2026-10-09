import { useEffect, useState } from "react";
import request from "../../utils/request.js";
import LikeBtn from "./likeBtn.jsx";

export default function LikeCar({
    user_id,
    car_id,
    onLikeUnlike,
    refresh
}) {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState([])

    useEffect(() => {
        request(`/likes?user_id=eq.${user_id}&car_id=eq.${car_id}`)
            .then(result => {
                if (result.length === 1) {
                    setLiked(true)
                }
            })

        request(`/likes?car_id=eq.${car_id}`)
            .then(result => setLikes(result))

    }, [user_id, car_id, refresh]);


    const likeCar = async () => {
        await request('/likes', 'POST', { user_id, car_id });

        onLikeUnlike();
    };

    const unlikeCar = async () => {
        await request(`/likes?user_id=eq.${user_id}&car_id=eq.${car_id}`, 'DELETE');
        setLiked(false);

        onLikeUnlike();
    };


    return (
        <div className="reaction-buttons">
            <p className="reaction-button">Likes: {likes.length}</p>

            <LikeBtn likeCar={likeCar} liked={liked} unlikeCar={unlikeCar} />

        </div>
    );
}