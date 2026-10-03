import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import './Login.css'
// import { showHidePassHandler } from '../../utils/utils.js';
import request from '../../utils/request.js';


const initialValues = {
    id: '',
    email: '',
    password: '',
}

export default function Login() {
    const [userData, setUserData] = useState(initialValues);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const navigate = useNavigate();

    const actionHandler = async () => {

         const { email, password } = userData;

        try {
            const response = await request(`/users?email=eq.${email}`);
        
            if (response[0].password !== password) {
                return alert('Email or password are not valid!')
            }            

            setUserData(response[0]) 
            console.log('Successful login:' , userData);
            
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


    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Welcome Back</h2>

                <p className="login-subtitle">
                    Sign in to your account
                </p>

                <form className="login-form" action={actionHandler}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={userData.email}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>

                        <div className="password-wrapper">
                            <input
                                id="password"
                                type={isPasswordVisible ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter your password"
                                value={userData.password}
                                onChange={changeHandler}
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                aria-label="Show password"
                                onClick={() => showHidePassHandler()}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </button>
                        </div>
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