import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { validation } from '../../utils/validation.js';
 import request from '../../utils/request.js';
import EyeIcon from './EyeIcon.jsx';
import './Login.css'


const initialValues = {
    email: '',
    password: '',
}

export default function Login() {
    const [userData, setUserData] = useState(initialValues);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [errors, setErrors] = useState({});
    const [isTouched, setIsTouched] = useState({})

    const navigate = useNavigate();

    const actionHandler = async () => {
        const errors = validation.login(userData);
        setErrors(errors);

        if (Object.keys(errors).length > 0) {
            setIsTouched(errors);
        }

        const { email, password } = userData;

        try {
            const response = await request(`/users?email=eq.${email}`);

            if (response[0].password !== password) {
                return alert('Email or password are not valid!')
            }

            // setUserData(response[0])
            // console.log(response[0]);
            // console.log('Successful Login');

            navigate('/');

        } catch (error) {
            console.log(error);
        }
    }


    const changeHandler = (e) => {

        setUserData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const showHidePassHandler = () => {
        setIsPasswordVisible(() => isPasswordVisible ? false : true
        )
    }

    const validationHandler = (e) => {
        setIsTouched(state => ({
            ...state,
            [e.target.name]: true
        }))

        const errors = validation.login(userData);

        setErrors(errors)
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
                                type={isPasswordVisible ? 'text' : 'password'}
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
                                onClick={() => showHidePassHandler()}
                                >
                                <EyeIcon isVisible={isPasswordVisible} />
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