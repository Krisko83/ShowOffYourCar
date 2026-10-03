import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import request from '../../utils/request.js';
import "./Register.css";
// import showHidePassHandler from './utils.js';

const initialValues = {
    id: '',
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
    const navigate = useNavigate();

    const actionHandler = async () => {

        const { fullName, username, email, age, country, city, gender, password, repeatPassword } = userData;
        // console.log(username, email, country, city, password, repeatPassword);

        if (password !== repeatPassword) {
            return alert('Passwords must match!')
        }

        const userFormData = {
            fullName,
            username,
            email,
            age,
            country,
            city,
            gender,
            password
        }

        try {
           const response = await request('/users', 'POST', userFormData);
           console.log(response);
           
            setUserData(state => ({
                ...state,
                id: response[0].id
            }));

            console.log(userData);
            
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


    return (
        <div className="register-page">
            <div className="register-container">
                <h2>Create Account</h2>

                <p className="register-subtitle">
                    Please fill in the information below
                </p>

                <form className="register-form" action={actionHandler}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={userData.fullName}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Choose a username"
                            value={userData.username}
                            onChange={changeHandler}
                        />
                    </div>

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
                        <label htmlFor="age">Age</label>
                        <input
                            id="age"
                            type="text"
                            name="age"
                            placeholder="18"
                            value={userData.age}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <input
                                id="country"
                                type="text"
                                name="country"
                                placeholder="Country"
                                value={userData.country}
                                onChange={changeHandler}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input
                                id="city"
                                type="text"
                                name="city"
                                placeholder="City"
                                value={userData.city}
                                onChange={changeHandler}
                            />
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

                    <div className="form-group">
                        <label htmlFor="password">Password</label>

                        <div className="password-wrapper">
                            <input
                                id="password"
                                type={isPasswordsVisible['password'] ? 'text' : 'password'}
                                name="password"
                                placeholder="Create a password"
                                value={userData.password}
                                onChange={changeHandler}
                            />

                            <button
                                onClick={() => showHidePassHandler('password')}
                                type="button"
                                className="password-toggle"
                                aria-label="Show password"
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

                    <div className="form-group">
                        <label htmlFor="repeatPassword">
                            Repeat Password
                        </label>

                        <div className="password-wrapper">
                            <input
                                id="repeatPassword"
                                type={isPasswordsVisible['repeatPassword'] ? 'text' : 'password'}
                                name="repeatPassword"
                                placeholder="Repeat your password"
                                value={userData.repeatPassword}
                                onChange={changeHandler}
                            />

                            <button
                                onClick={() => showHidePassHandler('repeatPassword')}
                                type="button"
                                className="password-toggle"
                                aria-label="Show password"
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


// import "./Register.css";

// export default function Register() {

//     return (
//         <div className="register-page">
//             <div className="register-container">
//                 <h2>Create Account</h2>

//                 <p className="register-subtitle">
//                     Please fill in the information below
//                 </p>

//                 <form className="register-form">
//                     <div className="form-group">
//                         <label htmlFor="fullName">Full Name</label>
//                         <input
//                             id="fullName"
//                             type="text"
//                             name="fullName"
//                             placeholder="Enter your full name"
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="username">Username</label>
//                         <input
//                             id="username"
//                             type="text"
//                             name="username"
//                             placeholder="Choose a username"
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             id="email"
//                             type="email"
//                             name="email"
//                             placeholder="you@example.com"
//                         />
//                     </div>

//                     <div className="form-row">
//                         <div className="form-group">
//                             <label htmlFor="country">Country</label>
//                             <input
//                                 id="country"
//                                 type="text"
//                                 name="country"
//                                 placeholder="Country"
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="city">City</label>
//                             <input
//                                 id="city"
//                                 type="text"
//                                 name="city"
//                                 placeholder="City"
//                             />
//                         </div>
//                     </div>

//                     <fieldset className="gender-group">
//                         <legend>Gender</legend>

//                         <label className="gender-option">
//                             <input
//                                 type="radio"
//                                 name="gender"
//                                 value="male"
//                             />
//                             <span>Male</span>
//                         </label>

//                         <label className="gender-option">
//                             <input
//                                 type="radio"
//                                 name="gender"
//                                 value="female"
//                             />
//                             <span>Female</span>
//                         </label>

//                         <label className="gender-option">
//                             <input
//                                 type="radio"
//                                 name="gender"
//                                 value="other"
//                             />
//                             <span>Other</span>
//                         </label>
//                     </fieldset>

//                     <div className="form-group">
//                         <label htmlFor="password">Password</label>

//                         <div className="password-wrapper">
//                             <input
//                                 id="password"
//                                 type="password"
//                                 name="password"
//                                 placeholder="Create a password"
//                             />

//                             <button
//                                 type="button"
//                                 className="password-toggle"
//                                 aria-label="Show password"
//                             >
//                                 <svg
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                 >
//                                     <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
//                                     <circle cx="12" cy="12" r="3" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="repeatPassword">
//                             Repeat Password
//                         </label>

//                         <div className="password-wrapper">
//                             <input
//                                 id="repeatPassword"
//                                 type="password"
//                                 name="repeatPassword"
//                                 placeholder="Repeat your password"
//                             />

//                             <button
//                                 type="button"
//                                 className="password-toggle"
//                                 aria-label="Show password"
//                             >
//                                 <svg
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                 >
//                                     <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
//                                     <circle cx="12" cy="12" r="3" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>

//                     <button type="submit" className="register-button">
//                         Create Account
//                     </button>
//                 </form>

//                 <p className="login-link">
//                     Already have an account?{" "}
//                     <a href="/login">Login</a>
//                 </p>
//             </div>
//         </div>
//     );

// }



