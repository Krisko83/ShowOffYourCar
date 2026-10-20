import { useState } from "react";
import HeaderUserImageContext from "../../contexts/UserImageContext.js";

export default function UserImageProvider({
    children
}) {
    const [userImage, setUserImage] = useState(null)


    return (
        <HeaderUserImageContext.Provider value={{ userImage, setUserImage }}>
            {children}
        </HeaderUserImageContext.Provider>
    );
}