import { Navigate, Outlet } from "react-router";

export default function IsGuest({ user }) {
    if (!user) {
        return <Navigate to="/auth/login" />
    }

   return <Outlet />

}