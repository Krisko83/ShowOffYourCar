import useLocalStorage from "../../hooks/useLocalStorage.js";
import UserContext from "../../contexts/UserContext.js";
import { useNavigate } from "react-router";
import request from "../../utils/request.js";



export default function UserProvider({
    children
}) {
    const [userData, setUser, removeUser] = useLocalStorage(null, 'auth');
    const navigate = useNavigate()

    const loginHandler = (inputUserData) => {
        setUser(inputUserData)
    }

    const registerHandler = (inputUserData) => {
        setUser(inputUserData)
    }

    const logoutHandler = async () => {
        try {
            await request.logout()
            
            removeUser('auth')  
            navigate('/')

        } catch (error) {
            alert(error)
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

