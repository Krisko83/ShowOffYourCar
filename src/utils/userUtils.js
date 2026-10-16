import { use } from "react";
import UserContext from "../contexts/UserContext.js";

export default function getUserData(userData, newPassword) {
    const returnValue = {
        id: userData?.id,
        fullName: userData.fullName,
        email: userData.email,
        username: userData.username,
        age: userData.age,
        country: userData.country,
        city: userData.city,
        gender: userData.gender
    }

    if (newPassword) {
        returnValue.password = newPassword;
    }

    return returnValue
};


export function useUserContext() {
    const data = use(UserContext)

    return data;
};