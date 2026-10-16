import { useEffect, useState } from "react";
import request from "../../utils/request.js";
import LikeBtn from "./likeBtn.jsx";


export default function LikeCar({
    user_id,
    car_id,
    onLikeUnlike,
    refresh,     
}) {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        request.getAll(`/likes?user_id=eq.${user_id}&car_id=eq.${car_id}`)
            .then(result => {
                if (result.length === 1) {
                    setLiked(true)
                }
            })

    }, [user_id, car_id, refresh]);


    const likeCar = async () => {
        console.log(car_id,' - ', user_id);
        await request.post('/likes', { user_id, car_id });

        onLikeUnlike();
    };  

    

    const unlikeCar = async () => {
        await request.remove(`/likes?user_id=eq.${user_id}&car_id=eq.${car_id}`);
        setLiked(false);

        onLikeUnlike();
    };




    return (
        <div className="reaction-buttons">
            {/* <p className="reaction-button">Likes: {likes}</p> */}

            <LikeBtn likeCar={likeCar} liked={liked} unlikeCar={unlikeCar} />

        </div>
    );
}