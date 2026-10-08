import { Link, useNavigate } from 'react-router';
import { use, useState } from 'react';
import { validation } from '../../utils/validation.js';
import request from '../../utils/request.js';
import EyeIcon from './EyeIcon.jsx';
 import "./Register.css";
import UserContext from '../../contexts/UserContext.js';
import getUserData from '../../utils/userUtils.js';

const initialValues = {
    fullName: '',
    username: '',
    email: '',
    age: '',
    country: '',
    city: '',
    gender: 'male',
    password: '',
    repeatPassword: ''
}

const visibilityInitials = {
    password: false,
    repeatPassword: false
}


export default function Register() {
    const [userData, setUserData] = useState(initialValues);
    const [isPasswordsVisible, setIsPasswordsVisible] = useState(visibilityInitials);
    const [errors, setErrors] = useState({});
    const [isTouched, setIsTouched] = useState({});
    const { onRegister } = use(UserContext)

    const navigate = useNavigate();

    const actionHandler = async () => {

        const errors = validation.register(userData)
        setErrors(errors)

        if (Object.keys(errors).length > 0) {
            setIsTouched(errors)
            return
        }

        const userFormData = {
            password: userData.password,
            ...getUserData(userData)
        }

        console.log(userFormData);
        
 
        try {
            const response = await request('/users', 'POST', userFormData);
 
            const data = getUserData(response[0])
            
            onRegister(data);

            navigate('/');

        } catch (error) {
            console.log(error);
        }

    };

    const changeHandler = (e) => {

        setUserData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };


    const showHidePassHandler = (field) => {

        setIsPasswordsVisible(state => ({
            ...state,
            [field]: isPasswordsVisible[field] ? false : true
        }))
    };

    const validationHandler = (e) => {

        setIsTouched(state => ({
            ...state,
            [e.target.name]: true
        }))

        const errors = validation.register(userData);

        setErrors(errors);
    }

    const errorMessage = (field) => errors[field] && isTouched[field] ? <p className="errorMessage">{errors[field]}</p> : '';
    const inputClass = (field) => errors[field] && isTouched[field] ? "form-group-error" : "form-group";


    return (
        <div className="register-page">
            <div className="register-container">
                <h2>Create Account</h2>

                <p className="register-subtitle">
                    Please fill in the information below
                </p>

                <form className="register-form" action={actionHandler}>
                    <div className={inputClass('fullName')}>
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            className='red-border'
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
                            type="text"
                            name="username"
                            placeholder="Choose a username"
                            onBlur={validationHandler}
                            value={userData.username}
                            onChange={changeHandler}
                        />
                        {errorMessage('username')}

                    </div>

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

                    <div className={inputClass('age')}>
                        <label htmlFor="age">Age</label>
                        <input
                            id="age"
                            type="number"
                            min={18}
                            max={120}
                            name="age"
                            placeholder="18"
                            onBlur={validationHandler}
                            value={userData.age}
                            onChange={changeHandler}
                        />
                        {errorMessage('age')}

                    </div>

                    <div className="form-row">
                        <div className={inputClass('country')}>
                            <label htmlFor="country">Country</label>
                            <input
                                id="country"
                                type="text"
                                name="country"
                                placeholder="Country"
                                onBlur={validationHandler}
                                value={userData.country}
                                onChange={changeHandler}
                            />
                            {errorMessage('country')}

                        </div>

                        <div className={inputClass('city')}>
                            <label htmlFor="city">City</label>
                            <input
                                id="city"
                                type="text"
                                name="city"
                                placeholder="City"
                                onBlur={validationHandler}
                                value={userData.city}
                                onChange={changeHandler}
                            />
                            {errorMessage('city')}

                        </div>
                    </div>

                    <fieldset className="gender-group">
                        <legend>Gender</legend>

                        <label className="gender-option">
                            <input
                                type="radio"
                                name="gender"
                                value='male'
                                onChange={changeHandler}
                                checked={userData.gender === 'male'}
                            />
                            <span>Male</span>
                        </label>

                        <label className="gender-option">
                            <input
                                type="radio"
                                name="gender"
                                value='female'
                                onChange={changeHandler}
                                checked={userData.gender === 'female'}
                            />
                            <span>Female</span>
                        </label>

                        <label className="gender-option">
                            <input
                                type="radio"
                                name="gender"
                                value='other'
                                onChange={changeHandler}
                                checked={userData.gender === 'other'}
                            />
                            <span>Other</span>
                        </label>
                    </fieldset>

                    <div className={inputClass('password')}>
                        <label htmlFor="password">Password</label>

                        <div className="password-wrapper">
                            <input
                                id="password"
                                type={isPasswordsVisible['password'] ? 'text' : 'password'}
                                name="password"
                                placeholder="Create a password"
                                onBlur={validationHandler}
                                value={userData.password}
                                onChange={changeHandler}
                            />

                            <button
                                onClick={() => showHidePassHandler('password')}
                                type="button"
                                className="password-toggle"
                                aria-label="Show password"
                            >

                                <EyeIcon isVisible={isPasswordsVisible['password']} />

                            </button>
                        </div>
                        {errorMessage('password')}
                    </div>

                    <div className={inputClass('repeatPassword')}>
                        <label htmlFor="repeatPassword">
                            Repeat Password
                        </label>

                        <div className="password-wrapper">
                            <input
                                id="repeatPassword"
                                type={isPasswordsVisible['repeatPassword'] ? 'text' : 'password'}
                                name="repeatPassword"
                                placeholder="Repeat your password"
                                onBlur={validationHandler}
                                value={userData.repeatPassword}
                                onChange={changeHandler}
                            />

                            <button
                                onClick={() => showHidePassHandler('repeatPassword')}
                                type="button"
                                className="password-toggle"
                                aria-label="Show password"
                            >

                                <EyeIcon isVisible={isPasswordsVisible['repeatPassword']} />
                            </button>
                        </div>
                        {errorMessage('repeatPassword')}
                    </div>

                    <button type="submit" className="register-button">
                        Create Account
                    </button>
                </form>

                <p className="login-link">
                    Already have an account?{" "}
                    <Link to="/auth/login">Login</Link>
                </p>
            </div>
        </div>
    );


}


