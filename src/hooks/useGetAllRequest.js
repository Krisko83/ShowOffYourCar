import { useEffect, useState } from "react";
// import request from "../utils/request.js";
import { carApi } from "../api/index.js";


export default function useGetAllRequest(path, initialValues) {
    const [data, setData] = useState(initialValues);


    useEffect(() => {
        const abortController = new AbortController();

        carApi.getAllCars(path, { signal: abortController.signal })
            .then(setData)
            .catch(err => console.log(err))
            
        return () => {
            abortController.abort();
        }
    }, [path]);


    return [data]
}