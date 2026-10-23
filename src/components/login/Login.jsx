import { Link, useNavigate } from 'react-router';
import { use } from 'react';
import { toast } from 'react-toastify'; 
import EyeIcon from '../eye-icon-item/EyeIcon.jsx';
import UserContext from '../../contexts/UserContext.js';
import styles from './Login.module.css'
import useControlledForm from '../../hooks/useControlledForm.js';
import { authApi } from '../../api/index.js';
import useDecumentTitle from '../../hooks/useDocumentTitle.js';

const initialValues = {
    email: '',
    password: '',
}

export default function Login() {
    useDecumentTitle('Login');

    const { onLogin } = use(UserContext)
    const navigate = useNavigate();

    const {
        data: userData,
        isPasswordsVisible,
        errors,
        isTouched,
        showHidePassHandler,
        changeHandler,
        validationHandler,
        actionHandler } = useControlledForm(onSubmit, initialValues, 'login')


    async function onSubmit(user) {
        const { email, password } = user;

        try {
            const responseData = await authApi.login({ email, password });

            onLogin(responseData);

            navigate('/');

        } catch (error) {
            toast.error('Email or password are incorrect!');
        }
    }


    const errorMessage = (field) => errors[field] && isTouched[field] ? <p className={styles["errorMessage"]}>{errors[field]}</p> : '';
    const inputClass = (field) => errors[field] && isTouched[field] ? "form-group-error" : "form-group";

    return (
        <div className={styles["login-page"]}>
            <div className={styles["login-container"]}>
                <h2>Welcome Back</h2>

                <p className={styles["login-subtitle"]}>
                    Sign in to your account
                </p>

                <form className={styles["login-form"]} action={actionHandler}>
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

                    <div className={inputClass('password')}>
                        <label htmlFor="password">Password</label>

                        <div className={styles["password-wrapper"]}>
                            <input
                                id="password"
                                type={isPasswordsVisible['password'] ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                onBlur={validationHandler}
                                value={userData.password}
                                onChange={changeHandler}
                            />

                            <button
                                type="button"
                                className={styles["password-toggle"]}
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
                        className={styles["login-button"]}
                    >
                        Login
                    </button>
                </form>

                <p className={styles["register-link"]}>
                    Don't have an account?{" "}
                    <Link to="/user/register">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );

}