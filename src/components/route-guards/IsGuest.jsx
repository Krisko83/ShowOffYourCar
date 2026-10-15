import { Navigate, Outlet } from "react-router"; 
import { use } from "react";
import UserContext from "../../contexts/UserContext.js";


export default function IsGuest() {
    const { user } = use(UserContext)


    if (!user) {
        return <Navigate to="/user/login" />
    }

    return <Outlet />

}