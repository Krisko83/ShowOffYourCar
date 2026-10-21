import { useEffect } from "react";
import request from "../../utils/request.js";
import LikeBtn from "./likeBtn.jsx";


export default function LikeCar({
    user_id,
    car_id,
    onLikeUnlike,
    liked
}) {

    useEffect(() => {
        const abortController = new AbortController();

        request.getAll(`/likes?user_id=eq.${user_id}&car_id=eq.${car_id}`, { signal: abortController.signal })
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
            await request.post('/likes', { car_id });

            onLikeUnlike(true);
        } catch (error) {
            alert(error.message)
        }

    };


    const unlikeCar = async () => {
        try {
            await request.remove(`/likes?user_id=eq.${user_id}&car_id=eq.${car_id}`);

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