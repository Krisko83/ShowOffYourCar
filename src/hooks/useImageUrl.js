import { useEffect, useState } from "react";
import { userApi } from "../api/index.js";
import { toast } from "react-toastify";

export default function useImageUrl(user_id) {
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
        const abortController = new AbortController();

        if (user_id) {
            userApi.getUserById(`/users?user_id=eq.${user_id}`, { signal: abortController.signal })
                .then(result => {
                    if (result.length > 0) {
                        setImageUrl(result[0].imageUrl)
                    }
                })
                .catch(err => {
                    if (err.name !== 'AbortError') {
                        console.error(err);
                        toast.error('Failed attempt to retrive user image!')
                    }
                })
        }

        return () => {
            abortController.abort();
        }

    }, [user_id])


    return [imageUrl, setImageUrl];
}