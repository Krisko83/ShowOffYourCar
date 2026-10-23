import { useEffect } from "react";
// import request from "../../utils/request.js";
import LikeBtn from "./likeBtn.jsx";
import { likesApi } from "../../api/index.js";


export default function LikeCar({
    user_id,
    car_id,
    onLikeUnlike,
    liked
}) {

    useEffect(() => {
        const abortController = new AbortController();

        likesApi.getAllUserLikes(`/likes?user_id=eq.${user_id}&car_id=eq.${car_id}`, { signal: abortController.signal })
            .then(result => {
                if (result.length === 1) {
                    onLikeUnlike(true)
                }
            })
            .catch(err => console.log(err))

        return () => {
            abortController.abort();
        }

    }, [user_id, car_id, onLikeUnlike]);


    const likeCar = async () => {
        try {
            await likesApi.likeCar('/likes', { car_id });

            onLikeUnlike(true);
        } catch (error) {
            alert(error.message)
        }

    };


    const unlikeCar = async () => {
        try {
            await likesApi.unlikeCar(`/likes?user_id=eq.${user_id}&car_id=eq.${car_id}`);

            onLikeUnlike(false);
        } catch (error) {
            alert(error.message)
        }

    };


    return (
        <div className="reaction-buttons">

            <LikeBtn likeCar={likeCar} liked={liked} unlikeCar={unlikeCar} />

        </div>
    );
}