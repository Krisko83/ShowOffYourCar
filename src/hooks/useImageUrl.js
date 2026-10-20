import { useEffect, useState } from "react";
import request from "../utils/request.js";

export default function useImageUrl(user_id) {
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
        if (user_id) {
            request.getById(`/users?user_id=eq.${user_id}`)
                .then(result => setImageUrl(result[0].imageUrl))
                .catch(err => alert(err.message))
        }
    }, [user_id])

    return imageUrl;
}