import { useState } from "react";
import { validation } from "../../utils/validation.js";
import request from "../../utils/request.js";
import ChangePasswordMenu from "./changePasswordMenu.jsx";
import { v4 as uuid } from 'uuid';

export default function ChangeProfileInfoItem({
    userData,
    onClickCancelEdit,
    onEdit
}) {

    const [errors, setErrors] = useState({});
    const [isTouched, setIsTouched] = useState({});
    const [previewUrl, setPreviewUrl] = useState(null);
    const [menuChangePasswordVisibility, setMenuChangePasswordVisibility] = useState(false);


    const actionHandler = async (formData) => {

        const imageFile = formData.get('image');

        let userImage = userData.imageUrl;

        if (imageFile && imageFile.name !== '') {
 
            const imageName = `${uuid()}${imageFile.name}`;

            try {
                await request.uploadImage(imageName, imageFile);

                userImage = `https://ggordfryvhhohlcicpdu.supabase.co/storage/v1/object/public/avatars/${imageName}`;

                onEdit(state => ({
                    ...state,
                    userImage
                }))

            } catch (error) {
                alert(error)
            }
        }

        const errors = validation.changeProfileInfo(userData, false)
        setErrors(errors)

        if (Object.keys(errors).length > 0) {
            setIsTouched(errors);
            return
        }

        const updatedUserData = { ...userData, imageUrl: userImage }

        try {
            await request.update(`/users?user_id=eq.${userData.user_id}`, updatedUserData)

            onEdit(updatedUserData)
            onClickCancelEdit();
        } catch (error) {
            console.log(error.message);
        }

    }

    const changeHandler = (e) => {

        onEdit(state => ({
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


    const changePasswordHandler = async () => {
        const errors = validation.changeProfileInfo(userData);

        setErrors(errors);

        if (Object.keys(errors).length > 0) {
            setIsTouched(errors)
            return;
        }

        const newPassword = userData.newPassword;
        const current_password = userData.inputPassword;
 
        try {
            await request.updateUser({ current_password, password: newPassword })

            onClickCancelEdit()
        } catch (error) {
            console.log(error);
            alert('Current password is incorect!');
        }
    }

    const filePreviewHandler = (e) => {
        const file = e.target.files[0];

        const previewUrl = URL.createObjectURL(file)
        setPreviewUrl(previewUrl);
    }

    const errorMessage = (field) => errors[field] && isTouched[field] ? <p className="errorMessage">{errors[field]}</p> : '';
    const inputClass = (field) => errors[field] && isTouched[field] ? 'profile-field error' : 'profile-field';

    return (
        <>
            <form className="profile-card" action={actionHandler} >
                <aside className="profile-picture-panel">
                    <div className="profile-avatar" aria-hidden="true">
                        {
                            previewUrl
                                ?
                                <img src={previewUrl} alt="preview" className='image' />
                                :
                                userData.imageUrl
                                    ?
                                    <img src={userData.imageUrl} alt="avatar" className='image' />
                                    :
                                    <div className="profile-heading-icon" aria-hidden="true">👤</div>
                        }
                    </div>
                    <label id="fileUpload" className="upload-picture">
                        <span className="upload-icon" aria-hidden="true">↑</span>
                        <span>Upload a profile picture</span>
                        <small>JPG, PNG or GIF (max 5 MB)</small>
                        <input type="file" id="fileUpload" name="image" accept="image/png,image/jpeg,image/gif" onChange={filePreviewHandler} />
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
                            autoComplete="name"
                            onBlur={validationHandler}
                            value={userData.fullName}
                            onChange={changeHandler}
                        />
                        {errorMessage('fullName')}
                    </div>

                    <div className={inputClass('username')}>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Enter your username"
                            autoComplete="username"
                            onBlur={validationHandler}
                            value={userData.username}
                            onChange={changeHandler}
                        />
                        {errorMessage('username')}
                    </div>

                    <div className={`${inputClass('email')} disabled-email`}>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="email"
                            onBlur={validationHandler}
                            value={userData.email}
                            disabled
                        />
                        {errorMessage('email')}
                    </div>

                    <div className={inputClass('age')}>
                        <label htmlFor="age">Age</label>
                        <input
                            id="age"
                            name="age"
                            type="number"
                            min="1"
                            placeholder="Enter your age"
                            autoComplete="No specific value"
                            onBlur={validationHandler}
                            value={userData.age}
                            onChange={changeHandler}
                        />
                        {errorMessage('age')}
                    </div>

                    <div className={inputClass('country')}>
                        <label htmlFor="country">Country</label>
                        <input
                            id="country"
                            name="country"
                            type="text"
                            placeholder="Enter your country"
                            autoComplete="country-name"
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
                            autoComplete="address-level2"
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
                        onClick={clickChangePasswordMenu} >
                        {menuChangePasswordVisibility ? 'Hide Change Password' : 'Change Password'}
                    </button>

                    {menuChangePasswordVisibility &&
                        <ChangePasswordMenu
                            errorMessage={errorMessage}
                            inputClass={inputClass}
                            changeHandler={changeHandler}
                            changePasswordHandler={changePasswordHandler}
                            validationHandler={validationHandler}
                            setErrors={setErrors}
                            errors={errors}
                            {...userData}
                        />
                    }

                    <button className="profile-save-button" type="button" onClick={onClickCancelEdit} >Cancel Changes</button>
                    <button className="profile-save-button" type="submit" >Save Changes</button>
                </section>
            </form>
        </>
    );
}