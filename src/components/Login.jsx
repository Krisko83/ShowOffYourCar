import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import './LoginRegister.css'


export default function Login() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const clickSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);
 
        
        try {
            const res = await fetch(`https://ggordfryvhhohlcicpdu.supabase.co/rest/v1/users?email=eq.${email}`, {
                headers: {
                    apikey: 'sb_publishable_25uCGYdn_bFi0wGD_6vPQA_g8loF2HB'
                }
            })

            const userData = await res.json();
           
            
            if(userData[0].password !== password) {
               return alert('Email or password are not valid!')
            }

            setUser(userData)
            navigate('/');

        } catch (error) {
            console.log(error);            
        }
    }
    
    console.log(user);
    

    return (
        <section className='background-login'>
            <div className="login-box">
                <h2 className="login-title">Login</h2>
                <form id="loginForm" onSubmit={clickSubmitHandler}>

                    <div>
                        <input
                            type="email"
                            id="email"
                            className="input-email"
                            placeholder="Email"
                            name='email'
                            required={true}
                        />
                        <div className="line" id="Uline" />
                    </div>

                    <div className="password-wrapper">
                        <input
                            type="password"
                            id="password"
                            className="input-password"
                            placeholder="Password"
                            minLength={8}
                            name='password'
                            required={true}
                        />
                        <span className="eyebox" id="toggleEye">
                            <i className="fas fa-eye" id="eyeIcon" />
                        </span>
                    </div>
                    <div className="line" id="Pline" />



                    <div>
                        <button type="submit" className="login-btn">
                            Log In
                        </button>
                    </div>
                </form>
                <div className="register-section">
                    <Link className="register-link" to="/register">
                        Don't Have Account? Register!
                    </Link>
                </div>
            </div>

        </section>
    );
}