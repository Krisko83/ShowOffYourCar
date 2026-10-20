import { useParams } from "react-router";
import PersonalInfoItem from "./PersonalInfoItem.jsx";
import { useEffect, useState } from "react";
import request from "../../utils/request.js";


export default function UserProfile() {
    const { commentOwnerId } = useParams();
    const [user, setUser] = useState({})

    const imageUrl = user.imageUrl;

    useEffect(() => {
        request.getById(`/users?user_id=eq.${commentOwnerId}`)
            .then(result => setUser(result[0]))
            .catch(err => alert(err.message))

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
            <PersonalInfoItem {...user} owner={false} />
        </main>
    );
}