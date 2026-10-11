import { use, useEffect, useState } from 'react';
import './Profile.css';
import UserContext from '../../contexts/UserContext.js';
import PersonalInfoItem from './PersonalInfoItem.jsx';
import ChangeProfileInfoItem from './ChangeProfileInfoItem.jsx';
import request from '../../utils/request.js';
import CarOwned from '../car-owned/carOwned.jsx';
import CarCommented from '../car-commented/CarCommented.jsx';
 

const initialValues = {
    fullName: '',
    username: '',
    email: '',
    age: '',
    country: '',
    city: '',
    gender: '',
    password: '',

};

export default function Profile() {
    const { user } = use(UserContext);
    const [isEditClicked, setIsEditClicked] = useState(false);
    const [userInfo, setUserInfo] = useState(initialValues)
    const user_id = user.id;


    useEffect(() => {
        request(`/users?id=eq.${user_id}`)
            .then(result => setUserInfo(result[0]))
            .catch((err) => {
                console.log(err.message);
            });

    }, [user_id])

    const updateUserProfile = (info) => {
        setUserInfo(info);
    }


    const onClickEdit = () => {
        setIsEditClicked(state => !state);
    };


    return (
        <main className="profile-page">
            <header className="profile-heading">
                <div className="profile-heading-icon" aria-hidden="true">👤</div>
                <div>
                    <h1>My Profile</h1>
                    <p>Manage your personal information and keep your profile up to date.</p>
                </div>
            </header>

            {isEditClicked
                ?
                <ChangeProfileInfoItem
                    onClickCancel={onClickEdit}
                    user_id={user_id}
                    updateUser={updateUserProfile}
                />
                :
                <PersonalInfoItem
                    onClickEdit={onClickEdit}
                    {...userInfo}
                />
            }

            <section className="profile-bottom">
                <CarCommented />
            
                <div className="personal-info-panel">
                    <div className="section-title">
                        <span className="section-icon" aria-hidden="true">⚙️</span>
                        <div>
                            <h2>Personal Information</h2>
                            <p>Keep your account details up to date.</p>
                        </div>
                    </div>
                    <p className="personal-info-description">
                        You can edit your name, contact details, location, and password using the form above.
                    </p>
                    <button className="change-info-btn" onClick={onClickEdit} >✎ &nbsp; Change Personal Info</button>
                </div>
            </section>

            <CarOwned user_id={user_id} />
        </main>
    );
}
