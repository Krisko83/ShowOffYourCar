import { Navigate, Outlet } from "react-router";

export default function IsAuth({ user }) {
    if (user) {
        return <Navigate to="/" />
    }

   return <Outlet />

}