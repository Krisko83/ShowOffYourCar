import { useParams } from "react-router";
import PersonalInfoItem from "./PersonalInfoItem.jsx";
import { use, useEffect, useState } from "react";
import request from "../../utils/request.js";
import UserContext from "../../contexts/UserContext.js";


export default function UserProfile() {
    const { user_id } = useParams();
    const [user, setUser] = useState({})
    const { isAuthenticated } = use(UserContext);

    const imageUrl = user.imageUrl;

    useEffect(() => {
        request.getById(`/users?user_id=eq.${user_id}`)
            .then(result => setUser(result[0]))
            .catch(err => alert(err.message))

    }, [user_id]);


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
            <PersonalInfoItem {...user} owner={isAuthenticated} />
        </main>
    );
}