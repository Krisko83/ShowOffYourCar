import { use, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext.js";
import request from "../utils/request.js";

export default function useComments() {
    const [comments, setComments] = useState([])
    const [uniqueCarIds, setUniqueCarIds] = useState([])
    const [commentedCars, setCommentedCars] = useState([])
    const { user } = use(UserContext);

    const user_id = user.user.id;

    useEffect(() => {
        request.getById(`/comments?owner_id=eq.${user_id}`)
            .then(result => {
                setComments(result)
                const uniqueIds = Array.from(new Set(result.map(comment => comment.car_id)))
                setUniqueCarIds(uniqueIds)
            })

    }, [user_id]);

    useEffect(() => {
        request.getAll('/cars')
            .then(result => {
                const filteredCars = result.filter(car => uniqueCarIds.includes(car.id))
                setCommentedCars(filteredCars)
            })

    }, [uniqueCarIds]);
    

    return { comments, uniqueCarIds, commentedCars };
}


