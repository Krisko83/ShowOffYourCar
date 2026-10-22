// import { Outlet } from "react-router";
import { Navigate } from "react-router";
import UserContext from "../../contexts/UserContext.js";
import { use } from "react";

export default function Logout() {
    const { onLogout } = use(UserContext)

    onLogout();

    return (
        <Navigate to='/' />
    );
}