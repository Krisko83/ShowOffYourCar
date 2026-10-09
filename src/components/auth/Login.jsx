import { Link, useNavigate } from 'react-router';
import { use } from 'react';

import request from '../../utils/request.js';
import EyeIcon from './EyeIcon.jsx';
import UserContext from '../../contexts/UserContext.js';
import getUserData from '../../utils/userUtils.js';
import useControlledAuthForms from '../../hooks/useControlledAuthForms.js';
import './Login.css'


const initialValues = {
    email: '',
    password: '',
}

export default function Login() {
    const { onLogin } = use(UserContext)
    const navigate = useNavigate();

    const {
        userData,
        isPasswordsVisible,
        errors,
        isTouched,
        showHidePassHandler,
        changeHandler,
        validationHandler,
        actionHandler } = useControlledAuthForms(onSubmit, initialValues, 'login')


    async function onSubmit(user) {
        const { email, password } = user;

        try {
            const response = await request(`/users?email=eq.${email}`);

            if (response[0].password !== password) {
                return alert('Email or password are not valid!')
            }

            const data = getUserData(response[0]);

            onLogin(data);


            navigate('/');

        } catch (error) {
            console.log(error);
        }
    }


    const errorMessage = (field) => errors[field] && isTouched[field] ? <p className="errorMessage">{errors[field]}</p> : '';
    const inputClass = (field) => errors[field] && isTouched[field] ? "form-group-error" : "form-group";

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Welcome Back</h2>

                <p className="login-subtitle">
                    Sign in to your account
                </p>

                <form className="login-form" action={actionHandler}>
                    <div className={inputClass('email')}>
                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            onBlur={validationHandler}
                            value={userData.email}
                            onChange={changeHandler}
                        />
                        {errorMessage('email')}
                    </div>

                    <div className={inputClass('password')}>
                        <label htmlFor="password">Password</label>

                        <div className="password-wrapper">
                            <input
                                id="password"
                                type={isPasswordsVisible['password'] ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter your password"
                                onBlur={validationHandler}
                                value={userData.password}
                                onChange={changeHandler}
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                aria-label="Show password"
                                onClick={() => showHidePassHandler('password')}
                            >
                                <EyeIcon isVisible={isPasswordsVisible['password']} />
                            </button>
                        </div>
                        {errorMessage('password')}
                    </div>

                    <button
                        type="submit"
                        className="login-button"
                    >
                        Login
                    </button>
                </form>

                <p className="register-link">
                    Don't have an account?{" "}
                    <Link to="/auth/register">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );

}