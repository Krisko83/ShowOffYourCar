import { use } from "react";
import UserContext from "../contexts/UserContext.js";

export default function getUserData(userData) {
    const { inputPassword, newPassword, repeatNewPassword, ...data } = userData
    const returnValue = {
        inputPassword,
        newPassword,
        data
    }
    return returnValue
};


export function useUserContext() {
    const data = use(UserContext)

    return data;
};