import { use } from "react";
import { Navigate, Outlet } from "react-router";
import UserContext from "../../contexts/UserContext.js";

export default function IsAuth() {
    const { user } = use(UserContext);
    
    if (user) {
        return <Navigate to="/" />
    }

    return <Outlet />

}