import { useEffect, useState } from "react";
// import request from "../utils/request.js";
import { userApi } from "../api/index.js";
import { toast } from "react-toastify";

export default function useImageUrl(user_id) {
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
        const abortController = new AbortController();

        if (user_id) {
            userApi.getUserById(`/users?user_id=eq.${user_id}`, { signal: abortController.signal })
                .then(result => setImageUrl(result[0].imageUrl))
                .catch(err => {
                     if (err.name !== 'AbortError') {
                        toast.error('Failed attempt to retrive user image!')
                     }
                })
        }

        return () => {
            abortController.abort();
        }

    }, [user_id])


    return imageUrl;
}