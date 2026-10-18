import { Navigate, Outlet } from "react-router"; 
import { use } from "react";
import UserContext from "../../contexts/UserContext.js";


export default function IsGuest() {
    const { userData } = use(UserContext)


    if (!userData) {
        return <Navigate to="/user/login" />
    }

    return <Outlet />

}