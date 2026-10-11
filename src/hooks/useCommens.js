import { use, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext.js";
import request from "../utils/request.js";

export default function useComments() {
    const [comments, setComments] = useState([])
    const { user } = use(UserContext);
    const user_id = user.id;

    useEffect(() => {
        request(`/comments?owner_id=eq.${user_id}`)
            .then(result => setComments(result))

    }, [user_id]);

    // const value = commentedCars.map(comment => ({
       
    // }))

    // console.log(value);
    
 
    return { comments, user_id };
}


 