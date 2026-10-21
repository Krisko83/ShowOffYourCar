import { useEffect, useState } from "react";
import request from "../utils/request.js";

export default function useImageUrl(user_id) {
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
        const abortController = new AbortController();

        if (user_id) {
            request.getById(`/users?user_id=eq.${user_id}`, { signal: abortController.signal })
                .then(result => setImageUrl(result[0].imageUrl))
                .catch(err => console.log(err.message))
        }

        return () => {
            abortController.abort();
        }

    }, [user_id])


    return imageUrl;
}