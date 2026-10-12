import { useState } from "react";
import EyeIcon from "../user/EyeIcon.jsx";

export default function ChangePasswordMenu({
    password,
    inputPassword,
    newPassword,
    repeatNewPassword,
    setErrors,
    changeHandler,
    validationHandler,
    errorMessage,
    inputClass,
    changePasswordHandler
}) {

    const [correctPassword, setCorrectPassword] = useState(false);
    const [isPasswordsVisible, setIsPasswordsVisible] = useState({ currentPassword: false, newPassword: false, repeatNewPassword: false })

    const correctPasswordHandler = () => {

        if (inputPassword === password) {
            setCorrectPassword(true)
            setErrors({})
        } else {

            setErrors({ 'inputPassword': 'Password is incorrect!' })
        }

    }


    const showHidePassHandler = (field) => {

        setIsPasswordsVisible(state => ({
            ...state,
            [field]: isPasswordsVisible[field] ? false : true
        }))
    };

    return (
        <>
            {correctPassword

                ?

                <>
                    <div className={`${inputClass('newPassword')} profile-field-wide`}>
                        <label htmlFor="newPassword">New Password</label>
                        <div className="password-wrapper">
                            <input
                                id="newPassword"
                                name="newPassword"
                                type={isPasswordsVisible["newPassword"] ? 'text' : 'password'}
                                placeholder="Enter a new password"
                                autoComplete="new-password"
                                onBlur={validationHandler}
                                value={newPassword ?? ''}
                                onChange={changeHandler}
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                aria-label="Show password"
                                onClick={() => showHidePassHandler('newPassword')}
                            >

                                <EyeIcon isVisible={isPasswordsVisible['newPassword']} />
                            </button>
                        </div>
                        {errorMessage('newPassword')}
                    </div>

                    <div className={`${inputClass('repeatNewPassword')} profile-field-wide`}>
                        <label htmlFor="repeatNewPassword">Repeat New Password</label>
                        <div className="password-wrapper">
                            <input
                                id="repeatNewPassword"
                                name="repeatNewPassword"
                                type={isPasswordsVisible['repeatNewPassword'] ? 'text' : 'password'}
                                placeholder="Repeat your new password"
                                autoComplete="repeate-password"
                                onBlur={validationHandler}
                                value={repeatNewPassword ?? ''}
                                onChange={changeHandler}
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                aria-label="Show password"
                                onClick={() => showHidePassHandler('repeatNewPassword')}
                            >
                                <EyeIcon isVisible={isPasswordsVisible['repeatNewPassword']} />
                            </button>
                        </div>
                        {errorMessage('repeatNewPassword')}
                    </div>
                    <button className="profile-save-button" type="button" onClick={changePasswordHandler} >Change</button>
                </>

                :

                <>
                    <div className={`${inputClass('inputPassword')} profile-field-wide`}>
                        <label htmlFor="inputPassword">Current Password</label>
                        <div className="password-wrapper">
                            <input
                                id="inputPassword"
                                name="inputPassword"
                                type={isPasswordsVisible['inputPassword'] ? 'text' : 'password'}
                                autoComplete="current-password"
                                placeholder="Enter a current password"
                                onBlur={validationHandler}
                                value={inputPassword ?? ''}
                                onChange={changeHandler}
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                aria-label="Show password"
                                onClick={() => showHidePassHandler('inputPassword')}
                            >
                                <EyeIcon isVisible={isPasswordsVisible['inputPassword']} />
                            </button>
                        </div>
                        {errorMessage('inputPassword')}
                    </div>
                    <button className="profile-save-button" type="button" onClick={correctPasswordHandler} >Continue</button>
                </>
            }
        </>
    );
}