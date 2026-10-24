import { use, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext.js";
import { carApi } from "../api/index.js";
import { toast } from "react-toastify";

export default function useOwnedCars(userId) {
    const { userData } = use(UserContext);
    const [ownedCars, setOwnedCars] = useState([]);

    const user_id = userId ? userId : userData?.user.id;

    useEffect(() => {
        const abortController = new AbortController();

        carApi.getAllUserCars(`/cars?user_id=eq.${user_id}`, { signal: abortController.signal })
            .then(result => setOwnedCars(result))
            .catch(err => {
                if (err.name !== 'AbortError') {
                    toast.error('Failed attempt to retrive all cars. Please try again later! ')
                }
            })

        return () => {
            abortController.abort();
        }
    }, [user_id])

    return { ownedCars };
}