import { use, useEffect, useState } from 'react';
import UserContext from '../../contexts/UserContext.js';
import PersonalInfoItem from './PersonalInfoItem.jsx';
import ChangeProfileInfoItem from './ChangeProfileInfoItem.jsx';
import request from '../../utils/request.js';
import CarOwned from '../car-owned/CarOwned.jsx';
import CarCommented from '../car-commented/CarCommented.jsx';
import './Profile.css';
import useDecumentTitle from '../../hooks/useDocumentTitle.js';


const initialValues = {
    fullName: '',
    username: '',
    email: '',
    age: '',
    country: '',
    city: '',
    gender: ''
};

export default function Profile() {
    useDecumentTitle('My Profile')
    const { userData } = use(UserContext);
    const [isEditClicked, setIsEditClicked] = useState(false);
    const [userInfo, setUserInfo] = useState(initialValues)
    const user_id = userData.user.id;

    const imageUrl = userInfo.imageUrl;

    useEffect(() => {
        const abortController = new AbortController()

        request.getById(`/users?user_id=eq.${user_id}`, { signal: abortController.signal })
            .then(result => setUserInfo(result[0]))
            .catch((err) => console.log(err));

        return () => {
            abortController.abort();
        }

    }, [user_id]);


    const onClickEdit = () => {
        setIsEditClicked(state => !state);
    };

    const editUserInfo = (inputData) => {
        let data = inputData;

        if (typeof inputData === 'function') {
            data = inputData(userInfo)
        }

        setUserInfo(data)
    }


    return (
        <main className="profile-page">
            <header className="profile-heading">
                {imageUrl ?
                    <img src={imageUrl} className="heading-icon-profile" alt="User image" />
                    :
                    <div className="profile-heading-icon" aria-hidden="true">👤</div>
                }
                <div>
                    <h1>My Profile</h1>
                    <p>Manage your personal information and keep your profile up to date.</p>
                </div>
            </header>

            {isEditClicked
                ?
                <ChangeProfileInfoItem
                    onClickCancelEdit={onClickEdit}
                    onEdit={editUserInfo}
                    userData={userInfo}
                />
                :
                <PersonalInfoItem
                    onClickEdit={onClickEdit}
                    {...userInfo}
                />
            } 

            <section className="profile-bottom">
                <div className="personal-info-panel">
                    <div className="section-title">
                        <span className="section-icon" aria-hidden="true">⚙️</span>
                        <div>
                            <h2>Personal Information</h2>
                            <p>Keep your account details up to date.</p>
                        </div>
                    </div>

                    <p className="personal-info-description">
                        You can edit your name, contact details, location, and
                        password using the form above.
                    </p>

                    <button
                        className="change-info-btn"
                        type="button"
                        onClick={onClickEdit}
                    >
                        ✎ &nbsp; {isEditClicked ? 'Hide Change Menu' : 'Change Personal Info'}
                    </button>
                </div>

                <CarCommented />
            </section>


            <CarOwned />
        </main>
    );
}
