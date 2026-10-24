import useLocalStorage from "../../hooks/useLocalStorage.js";
import UserContext from "../../contexts/UserContext.js";
import { useNavigate } from "react-router";
import { use } from "react";
import UserImageContext from "../../contexts/UserImageContext.js";
import { authApi } from "../../api/index.js";
import { toast } from "react-toastify";

export default function UserProvider({
    children
}) {
    const [userData, setUser, removeUser] = useLocalStorage(null, 'auth');
    const navigate = useNavigate();
    const { setUserImage } = use(UserImageContext)

    const loginHandler = (inputUserData) => {
        setUser(inputUserData)
    }

    const registerHandler = (inputUserData) => {
        setUser(inputUserData)
    }

    const logoutHandler = async () => {
        try {
            await authApi.logout()

            navigate('/user/login')
        } catch {            
            toast.error('Error occur.Please try again!')
        } finally {
            setUserImage(null)
            removeUser('auth');
        }
    }

    const contextValues = {
        userData,
        isAuthenticated: !!userData,
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

