import { Link, useNavigate } from 'react-router';
import { use } from 'react'; 
import EyeIcon from '../eye-icon-item/EyeIcon.jsx';
import UserContext from '../../contexts/UserContext.js'; 
import useControlledForm from '../../hooks/useControlledForm.js'; 
import styles from "./Register.module.css";
import { authApi, userApi } from '../../api/index.js';
import useDecumentTitle from '../../hooks/useDocumentTitle.js';

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
};


export default function Register() {
        useDecumentTitle('Register');
    
    const { onRegister } = use(UserContext)
    const navigate = useNavigate();

    const {
        data: userData,
        isPasswordsVisible,
        errors,
        isTouched,
        showHidePassHandler,
        changeHandler,
        validationHandler,
        actionHandler } = useControlledForm(onSubmit, initialValues, 'register')


    async function onSubmit(userData) {
        const { email, password, username, fullName, age, country, city, gender } = userData; 
        const userInfo = { username, email, country, city, fullName, gender, age }
 
        try {
            const responseData = await authApi.register({ email, password });

            onRegister(responseData);

            await userApi.createUserInfo('/users', userInfo)

            navigate('/');
        } catch (error) {
            console.log(error);

            alert(error.message)
            return;
        }
    }

    const errorMessage = (field) => errors[field] && isTouched[field] ? <p className={styles["errorMessage"]}>{errors[field]}</p> : '';
    const inputClass = (field) => errors[field] && isTouched[field] ? "form-group-error" : "form-group";


    return (
        <div className={styles["register-page"]}>
            <div className={styles["register-container"]}>
                <h2>Create Account</h2>

                <p className={styles["register-subtitle"]}>
                    Please fill in the information below
                </p>

                <form className={styles["register-form"]} action={actionHandler}>
                    <div className={inputClass('fullName')}>
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            className={styles['red-border']}
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
                            type="text"
                            name="username"
                            placeholder="Choose a username"
                            autoComplete="username"
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
                            autoComplete="email"
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

                    <fieldset className={styles["gender-group"]}>
                        <legend>Gender</legend>

                        <label className={styles["gender-option"]}>
                            <input
                                type="radio"
                                name="gender"
                                value='male'
                                onChange={changeHandler}
                                checked={userData.gender === 'male'}
                            />
                            <span>Male</span>
                        </label>

                        <label className={styles["gender-option"]}>
                            <input
                                type="radio"
                                name="gender"
                                value='female'
                                onChange={changeHandler}
                                checked={userData.gender === 'female'}
                            />
                            <span>Female</span>
                        </label>

                        <label className={styles["gender-option"]}>
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

                        <div className={styles["password-wrapper"]}>
                            <input
                                id="password"
                                type={isPasswordsVisible['password'] ? 'text' : 'password'}
                                name="password"
                                placeholder="Create a password"
                                autoComplete="new-password"
                                onBlur={validationHandler}
                                value={userData.password}
                                onChange={changeHandler}
                            />

                            <button
                                onClick={() => showHidePassHandler('password')}
                                type="button"
                                className={styles["password-toggle"]}
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

                        <div className={styles["password-wrapper"]}>
                            <input
                                id="repeatPassword"
                                type={isPasswordsVisible['repeatPassword'] ? 'text' : 'password'}
                                name="repeatPassword"
                                placeholder="Repeat your password"
                                autoComplete="new-password"
                                onBlur={validationHandler}
                                value={userData.repeatPassword}
                                onChange={changeHandler}
                            />

                            <button
                                onClick={() => showHidePassHandler('repeatPassword')}
                                type="button"
                                className={styles["password-toggle"]}
                                aria-label="Show password"
                            >

                                <EyeIcon isVisible={isPasswordsVisible['repeatPassword']} />
                            </button>
                        </div>
                        {errorMessage('repeatPassword')}
                    </div>

                    <button type="submit" className={styles["register-button"]}>
                        Create Account
                    </button>
                </form>

                <p className={styles["login-link"]}>
                    Already have an account?{" "}
                    <Link to="/user/login">Login</Link>
                </p>
            </div>
        </div>
    );


}


