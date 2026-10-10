import { useState } from "react";
import { validation } from "../../utils/validation.js";
import request from "../../utils/request.js";

export default function ChangePasswordMenu({
    password,
    id,
    onPasswordSubmit
}) {

    const [correctPassword, setCorrectPassword] = useState(false);
    const [userInputPasswords, setUserInputPasswords] = useState({ inputPassword: '', newPassword: '', repeatNewPassword: '' });
    const [errors, setErrors] = useState({});
    const [isTouched, setIsTouched] = useState(false);

    const changeHandler = (e) => {
        setUserInputPasswords(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))

    }

    const validationHandler = (e) => {
        setIsTouched(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))

        const errors = validation.changePassword(userInputPasswords, password);
        setErrors(errors)
    }

    const correctPasswordHandler = () => {
        if (userInputPasswords.inputPassword === password) {
            setCorrectPassword(true)
        }
         setErrors({ 'inputPassword': 'Password is incorrect!' })

    }

    const changePasswordHandler = () => {
        const errors = validation.changePassword(userInputPasswords, password);

        setErrors(errors);

        if (Object.keys(errors).length > 0) {
            setIsTouched(errors)
            return;
        }


        const newPassword = userInputPasswords.newPassword;

        try {
            request(`/users?id=eq.${id}`, 'PATCH', { password: newPassword })

            onPasswordSubmit()
        } catch (error) {
            console.log(error.message);

        }
    }


    const errorMessage = (field) => errors[field] && isTouched[field] ? <p className="errorMessage">{errors[field]}</p> : '';
    const inputClass = (field) => errors[field] && isTouched[field] ? 'profile-field error profile-field-wide' : 'profile-field profile-field-wide';

    return (
        <>
            {correctPassword

                ?

                <>
                    <div className={`${inputClass('gender')} profile-field-wide`}>
                        <label htmlFor="newPassword">New Password</label>
                        <input
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            placeholder="Enter a new password"
                            autoComplete="new-password" 
                            onBlur={validationHandler}
                            value={userInputPasswords.newPassword}
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
                            autoComplete="new-password" 
                            onBlur={validationHandler}
                            value={userInputPasswords.repeatNewPassword}
                            onChange={changeHandler}
                        />
                        {errorMessage('repeatNewPassword')}
                    </div>
                    <button className="profile-save-button" type="button" onClick={changePasswordHandler} >Change</button>
                </>

                :
                
                <>
                    <div className={`${inputClass('gender')} profile-field-wide`}>
                        <label htmlFor="inputPassword">Current Password</label>
                        <input
                            id="inputPassword"
                            name="inputPassword"
                            type="password"
                            autoComplete="new-password" 
                            placeholder="Enter a current password"
                            onBlur={validationHandler}
                            value={userInputPasswords.inputPassword}
                            onChange={changeHandler}
                        />
                        {errorMessage('inputPassword')}
                    </div>
                    <button className="profile-save-button" type="button" onClick={correctPasswordHandler} >Continue</button>
                </>
            }
        </>
    );
}