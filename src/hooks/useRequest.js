import { useEffect, useState } from "react";

const url = import.meta.env.VITE_BASE_URL;
const apikey = import.meta.env.VITE_API_KEY;


export default function useRequest(path, initialValues ,transform = (data) => data, method = 'GET') {
    const [data, setData] = useState(initialValues);
    const [isPending, setIsPending] = useState(true)
    const [refresh, setRefresh] = useState(false);
    const [error, setError] = useState(null)


    useEffect(() => {
        const abortContoller = new AbortController();

        fetch(`${url}${path}`, {
            signal: abortContoller.signal,
            method,
            headers: {
                apikey,
                "Prefer": 'return=representation'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.text)
                }

                return response.json()
            })
            .then(result => {
                 setData(transform(result))
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsPending(false))

        return () => {
            abortContoller.abort();

        }
    }, [method, refresh, path, transform]);

    const refetch = () => {
        setRefresh(state => !state)
    }

    return { data, isPending, refetch, error }
}