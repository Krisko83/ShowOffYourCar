import { use, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext.js";
import request from "../utils/request.js";

export default function useOwnedCars() {
    const { userData } = use(UserContext);
    const [ownedCars, setOwnedCars] = useState([]);
    const user_id = userData?.user.id;

    useEffect(() => {
        const abortController = new AbortController();

        request.getById(`/cars?user_id=eq.${user_id}`, {signal: abortController.signal})
            .then(result => setOwnedCars(result))
            .catch(err => alert(err))

            return () => {
            abortController.abort();
        }
    }, [user_id])
    
    return {ownedCars};
}