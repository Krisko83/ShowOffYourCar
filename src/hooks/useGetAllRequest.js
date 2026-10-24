import { useEffect, useState } from "react"; 
import { carApi } from "../api/index.js";
import { toast } from "react-toastify";


export default function useGetAllRequest(path, initialValues) {
    const [data, setData] = useState(initialValues);


    useEffect(() => {
        const abortController = new AbortController();

        carApi.getAllCars(path, { signal: abortController.signal })
            .then(setData)
            .catch(err => {
                if (err.name !== 'AbortError') {
                    toast.error('Failed attempt to retrive all cars. Please try again later!')
                }
            })
            
        return () => {
            abortController.abort();
        }

    }, [path]);


    return [data]
}