import { use, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext.js";
// import request from "../utils/request.js";
import { carApi, commentsApi } from "../api/index.js";

export default function useComments() {
    const [comments, setComments] = useState([])
    const [uniqueCarIds, setUniqueCarIds] = useState([])
    const [commentedCars, setCommentedCars] = useState([])
    const { userData } = use(UserContext);

    const user_id = userData.user.id;

    useEffect(() => {
        const abortController = new AbortController();

        commentsApi.getCommentsByUserId(`/comments?user_id=eq.${user_id}`, { signal: abortController.signal })
            .then(result => {
                setComments(result)
                const uniqueIds = Array.from(new Set(result.map(comment => comment.car_id)))
                setUniqueCarIds(uniqueIds)
            })
            .catch(err => console.log(err))

        return () => {
            abortController.abort();
        }

    }, [user_id]);

    useEffect(() => {
        const abortController = new AbortController();

        carApi.getAllCars('/cars', { signal: abortController.signal })
            .then(result => {
                const filteredCars = result.filter(car => uniqueCarIds.includes(car.id))
                setCommentedCars(filteredCars)
            })
            .catch(err => console.log(err))

        return () => {
            abortController.abort();
        }
    }, [uniqueCarIds]);


    return { comments, uniqueCarIds, commentedCars };
}


