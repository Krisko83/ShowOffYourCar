import { use } from "react";
import { Navigate, Outlet } from "react-router";
import UserContext from "../../contexts/UserContext.js";

export default function IsAuth() {
    const { userData } = use(UserContext);
    
    if (userData) {
        return <Navigate to="/" />
    }

    return <Outlet />

}