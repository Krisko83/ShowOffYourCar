import useLocalStorage from "../../hooks/useLocalStorage.js";
import UserContext from "../../contexts/UserContext.js";
import { useNavigate } from "react-router";
import { authApi } from "../../api/index.js";
import { toast } from "react-toastify";
import useImageUrl from "../../hooks/useImageUrl.js";

export default function UserProvider({
    children
}) {
    const [userData, setUser, removeUser] = useLocalStorage(null, 'auth');
    const user_id = userData?.user.id

    const [userImage, setUserImage] = useImageUrl(user_id);
    const navigate = useNavigate();
 
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
        onLogout: logoutHandler,
        userImage,
        setUserImage
    }

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    );
}

