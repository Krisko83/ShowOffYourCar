import { useEffect, useState } from "react";
import { validation } from "../../utils/validation.js";
import request from "../../utils/request.js";
import getUserData from "../../utils/userUtils.js";
import ChangePasswordMenu from "./changePasswordMenu.jsx";

const initialValues = {
    fullName: '',
    username: '',
    email: '',
    age: '',
    country: '',
    city: '',
    gender: '',
    password: ''
};

export default function ChangeProfileInfoItem({
    onClickCancel,
    user_id,
    updateUser
}) {

    const [userData, setUserData] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isTouched, setIsTouched] = useState(false);
    const [menuChangePasswordVisibility, setMenuChangePasswordVisibility] = useState(false);

    useEffect(() => {
        request(`/users?id=eq.${user_id}`)
            .then(result => setUserData(result[0]))
            .catch((err) => {
                console.log(err.message);
            });

    }, [user_id])


    const actionHandler = async () => {
        const errors = validation.changeProfileInfo(userData)
        setErrors(errors)

        if (Object.keys(errors).length > 0) {
            setIsTouched(errors);
            return
        }


        const data = getUserData(userData, userData.newPassword)

        try {
            await request(`/users?id=eq.${user_id}`, 'PATCH', data)

            updateUser(userData)
            onClickCancel();
        } catch (error) {
            console.log(error.message);
        }

    }

    const changeHandler = (e) => {
        setUserData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const validationHandler = (e) => {
        setIsTouched(state => ({
            ...state,
            [e.target.name]: true
        }))

        const errors = validation.changeProfileInfo(userData)

        setErrors(errors)
    }

    const clickChangePasswordMenu = () => {
        setMenuChangePasswordVisibility(state => !state);
    }

   

    const errorMessage = (field) => errors[field] && isTouched[field] ? <p className="errorMessage">{errors[field]}</p> : '';
    const inputClass = (field) => errors[field] && isTouched[field] ? 'profile-field error' : 'profile-field';

    return (
        <>
            <form className="profile-card" action={actionHandler} >
                <aside className="profile-picture-panel">
                    <div className="profile-avatar" aria-hidden="true">👤</div>
                    <label className="upload-picture">
                        <span className="upload-icon" aria-hidden="true">↑</span>
                        <span>Upload a profile picture</span>
                        <small>JPG, PNG or GIF (max 5 MB)</small>
                        <input type="file" accept="image/png,image/jpeg,image/gif" />
                    </label>
                </aside>

                <section className="profile-fields" aria-label="Profile details">
                    <div className={inputClass('fullName')}>
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            autoComplete="new-password" 
                            onBlur={validationHandler}
                            value={userData.fullName}
                            onChange={changeHandler}
                        />
                        {errorMessage('fullName')}
                    </div>

                    <div className={inputClass('fullName')}>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Enter your username"
                            autoComplete="new-password" 
                            onBlur={validationHandler}
                            value={userData.username}
                            onChange={changeHandler}
                        />
                        {errorMessage('username')}
                    </div>

                    <div className={inputClass('fullName')}>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="new-password" 
                            onBlur={validationHandler}
                            value={userData.email}
                            onChange={changeHandler}
                        />
                        {errorMessage('email')}
                    </div>

                    <div className={inputClass('fullName')}>
                        <label htmlFor="age">Age</label>
                        <input
                            id="age"
                            name="age"
                            type="number"
                            min="1"
                            placeholder="Enter your age"
                            autoComplete="new-password" 
                            onBlur={validationHandler}
                            value={userData.age}
                            onChange={changeHandler}
                        />
                        {errorMessage('age')}
                    </div>

                    <div className={inputClass('fullName')}>
                        <label htmlFor="country">Country</label>
                        <input
                            id="country"
                            name="country"
                            type="text"
                            placeholder="Enter your country"
                            autoComplete="new-password" 
                            onBlur={validationHandler}
                            value={userData.country}
                            onChange={changeHandler}
                        />
                        {errorMessage('country')}
                    </div>

                    <div className={inputClass('fullName')}>
                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            name="city"
                            type="text"
                            placeholder="Enter your city"
                            autoComplete="new-password" 
                            onBlur={validationHandler}
                            value={userData.city}
                            onChange={changeHandler}
                        />
                        {errorMessage('city')}
                    </div>

                    <div className={`${inputClass('gender')} profile-field-wide`}>
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" name="gender" value={userData.gender} onChange={changeHandler} onBlur={validationHandler} >
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
                        </select>
                        {errorMessage('gender')}
                    </div>

                    <button
                        className="profile-save-button"
                        type="button"
                        autoComplete="new-password"
                        onClick={clickChangePasswordMenu} >
                        {menuChangePasswordVisibility ? 'Hide Change Password' : 'Change Password'}
                    </button>

                    {menuChangePasswordVisibility &&
                        <ChangePasswordMenu
                            errorMessage={errorMessage}
                            inputClass={inputClass}
                            onPasswordSubmit={onClickCancel}
                            {...userData}
                        />
                    }

                    {/* {menuChangePasswordVisibility ?

                        <>
                            <div className={`${inputClass('gender')} profile-field-wide`}>
                                <label htmlFor="newPassword">New Password</label>
                                <input
                                    id="newPassword"
                                    name="newPassword"
                                    type="password"
                                    placeholder="Enter a new password"
                                    onBlur={validationHandler}
                                    value={userData.password ?? ''}
                                    onChange={changeHandler}
                                />
                                {errorMessage('newPassword')}
                            </div>

                            <div className={`${inputClass('gender')} profile-field-wide`}>
                                <label htmlFor="repeatNewPassword">Repeat New Password</label>
                                <input
                                    id="repeatNewPassword"
                                    name="repeatNewPassword"
                                    type="password"
                                    placeholder="Repeat your new password"
                                    onBlur={validationHandler}
                                    value={userData.password ?? ''}
                                    onChange={changeHandler}
                                />
                                {errorMessage('repeatNewPassword')}
                            </div>
                        </>

                        :
                        <div className={`${inputClass('gender')} profile-field-wide`}>
                            <label htmlFor="inputPassword">Current Password</label>
                            <input
                                id="inputPassword"
                                name="inputPassword"
                                type="password"
                                placeholder="Enter a current password"
                                onBlur={validationHandler}
                                value={userData.password ?? ''}
                                onChange={changeHandler}
                            />
                            {errorMessage('inputPassword')}
                        </div>
                    } */}





                    <button className="profile-save-button" onClick={onClickCancel} type="button" autoComplete="new-password" >Cancel Changes</button>
                    <button className="profile-save-button" type="submit" autoComplete="new-password" >Save Changes</button>
                </section>
            </form>
        </>
    );
}