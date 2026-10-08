import { use } from "react";
import { Navigate } from "react-router";
import UserContext from "../../contexts/UserContext.js";

export default function Logout() {
    const { onLogout } = use(UserContext);

    onLogout();

    return (
        <Navigate to='/' />
    );
}