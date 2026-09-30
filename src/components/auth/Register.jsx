import { Link, useNavigate } from 'react-router';
import './LoginRegister.css'
import { useState } from 'react';
import { showHidePassHandler } from '../../utils/utils.js';


export default function Register() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const clickSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { username, email, country, city, password, confirmPassword } = Object.fromEntries(formData);

        if(password !== confirmPassword) {
            return alert('Passwords must match!')
        }

        const userFormData = {
            username: username,
            email: email,
            country: country,
            city: city,
            password: password
        }

        try {
            const response = await fetch('https://ggordfryvhhohlcicpdu.supabase.co/rest/v1/users', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    apikey: 'sb_publishable_25uCGYdn_bFi0wGD_6vPQA_g8loF2HB',
                    Prefer: 'return=representation'
                },
                body: JSON.stringify(userFormData)
            })
            const userData = await response.json();
            
            setUser(userData);
            navigate('/');

        } catch (error) {
            console.log(error);            
        }
        
    };
         

    return (
        <section className='background-register'>
            <form onSubmit={clickSubmitHandler}>

                <div className="signup-box">
                    <h2 className="signup-title">Register</h2>

                    <div>
                        <input
                            className="input-email"
                            id="email"
                            placeholder="Email"
                            required={true}
                            type="email"
                            name='email'
                        />
                        <div className="line" id="Eline" />
                    </div>

                    <div>
                        <input
                            className="input-username"
                            id="username"
                            placeholder="Username"
                            required={true}
                            name='username'
                        />
                        <div className="line" id="Uline" />
                    </div>

                    <div>
                        <input
                            className="input-country"
                            id="country"
                            placeholder="Country"
                            required={true}
                            name='country'
                        />
                        <div className="line" id="Uline" />
                    </div>

                    <div>
                        <input
                            className="input-city"
                            id="city"
                            placeholder="City"
                            required={true}
                            name='city'
                        />
                        <div className="line" id="Uline" />
                    </div>

                    <div className="password-wrapper">
                        <input
                            className="input-password"
                            id="passwordInput"
                            placeholder="Password"
                            type="password"
                            minLength={8}
                            required={true}
                            name='password'
                        />
                        <span className="eyebox" id="toggleEye" onClick={showHidePassHandler}>
                            <i className="fas fa-eye" id="eyeIcon" />
                        </span>
                    </div>
                    <div className="line" id="Pline" />

                    <div className="password-wrapper">
                        <input
                            className="input-confpassword"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            type="password"
                            minLength={8}
                            required={true}
                            name='confirmPassword'
                        />
                        <span className="eyebox" id="toggleEye2" onClick={showHidePassHandler}>
                            <i className="fas fa-eye" id="eyeIcon2" />
                        </span>
                    </div>
                    <div className="line" id="cPline" />
                    <div>
                        <button className="signup-btn" type='submit'>Register</button>
                    </div>
                    <div className="login-section">
                        <Link className="login-link" to="/login">
                            Have An Account? Login!{" "}
                        </Link>

                    </div>
                </div>
            </form>


        </section>
    );
}