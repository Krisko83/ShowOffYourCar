import { use, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext.js";
import request from "../utils/request.js";

export default function useOwnedCars() {
    const { userData } = use(UserContext);
    const [ownedCars, setOwnedCars] = useState([]);
    const user_id = userData?.user.id;

    useEffect(() => {
        request.getById(`/cars?user_id=eq.${user_id}`)
            .then(result => setOwnedCars(result))

    }, [user_id])
    
    return {ownedCars};
}