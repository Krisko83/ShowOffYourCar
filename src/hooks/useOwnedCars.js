import { use, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext.js";
import request from "../utils/request.js";

export default function useOwnedCars() {
    const { user } = use(UserContext);
    const [ownedCars, setOwnedCars] = useState([]);
    const user_id = user.id;

    useEffect(() => {
        request(`/cars?owner_id=eq.${user_id}`)
            .then(result => setOwnedCars(result))

    }, [user_id])
    
    return {ownedCars};
}