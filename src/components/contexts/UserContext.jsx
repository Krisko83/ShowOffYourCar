import useLocalStorage from "../../hooks/useLocalStorage.js";
import UserContext from "../../contexts/UserContext.js";
import { useNavigate } from "react-router";


export function UserProvider({
    children
}) {
    const [user, setUser, removeUser] = useLocalStorage(null, 'auth')
    const navigate = useNavigate()


    const loginHandler = (userData) => {
        setUser(userData)
    }

    const registerHandler = (userData) => {
        setUser(userData)
    }

    const logoutHandler = () => {
        removeUser('auth')
        navigate('/')
    }

    const contextValues = {
        user,
        isAuthenticated: !!user,
        onLogin: loginHandler,
        onRegister: registerHandler,
        onLogout: logoutHandler
    }

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    );
}

