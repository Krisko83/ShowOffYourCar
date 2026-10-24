import { useEffect } from "react";
import { likesApi } from "../../api/index.js";
import LikeBtn from "./like-btn/likeBtn.jsx";
import { toast } from "react-toastify";


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
                return
            })
            .catch(err => {
                if(err.name !== 'AbortError') {
                    toast.error('Failed to retrive user likes. Please try again later!')
                }
            })

        return () => {
            abortController.abort();
        }

    }, [user_id, car_id, onLikeUnlike]);


    const likeCar = async () => {
        try {
            await likesApi.likeCar('/likes', { car_id });

            toast.success('You successfully liked this car!')
            onLikeUnlike(true);
        } catch {
            toast.error('Failed to like this car. Please try again later!')
        }

    };


    const unlikeCar = async () => {
        try {
            await likesApi.unlikeCar(`/likes?user_id=eq.${user_id}&car_id=eq.${car_id}`);
            toast.success('You successfully unliked this car!');

            onLikeUnlike(false);
        } catch  {
            alert('Failed to unlike this car. Please try again later!')
        }

    };


    return (
        <div className="reaction-buttons">

            <LikeBtn likeCar={likeCar} liked={liked} unlikeCar={unlikeCar} />

        </div>
    );
}