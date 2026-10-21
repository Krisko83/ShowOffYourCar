import { useEffect, useState } from "react";
import request from "../utils/request.js";


export default function useGetAllRequest(path, initialValues) {
    const [data, setData] = useState(initialValues);


    useEffect(() => {
        const abortController = new AbortController();

        request.getAll(path, { signal: abortController.signal })
            .then(setData)
            .catch(err => console.log(err))
            
        return () => {
            abortController.abort();
        }
    }, [path]);


    return [data]
}