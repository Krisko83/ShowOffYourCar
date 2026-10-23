import { useParams } from "react-router";
import PersonalInfoItem from "./PersonalInfoItem.jsx";
import { useEffect, useState } from "react";
// import request from "../../utils/request.js";
import { userApi } from "../../api/index.js";


export default function UserProfile() {
    const { commentOwnerId } = useParams();
    const [user, setUser] = useState({})

    const imageUrl = user.imageUrl;

    useEffect(() => {
        const abortController = new AbortController()

        userApi.getUserById(`/users?user_id=eq.${commentOwnerId}`, {signal: abortController.signal})
            .then(result => setUser(result[0]))
            .catch(err => console.log(err))

        return () => {
            abortController.abort();
        }

    }, [commentOwnerId]);


    return (
        <main className="profile-page">
            <header className="profile-heading">
                {imageUrl ?
                    <img src={imageUrl} className="heading-icon-profile" alt="User image" />
                    :
                    <div className="profile-heading-icon" aria-hidden="true">👤</div>
                }
                <div>
                    <h1>User Profile</h1>
                </div>
            </header>
            
            <PersonalInfoItem {...user} owner={false} userOwnerId={commentOwnerId} userProfile />
        </main>
    );
}