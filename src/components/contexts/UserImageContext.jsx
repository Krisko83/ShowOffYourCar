import { useState } from "react"; 
import UserImageContext from "../../contexts/UserImageContext.js";

export default function UserImageProvider({
    children
}) {
    const [userImage, setUserImage] = useState(null)


    return (
        <UserImageContext.Provider value={{ userImage, setUserImage }}>
            {children}
        </UserImageContext.Provider>
    );
}