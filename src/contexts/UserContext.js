import { createContext } from "react";

const UserContext = createContext({
    user: {},
    isAuthenticated: false,
    onLogin() { },
    onRegister() { },
    onLogout() { }
})

export default UserContext;