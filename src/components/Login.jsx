import { Link } from 'react-router';
import './LoginRegister.css'


export default function Login() {

    return (
        <section className='background-login'>
            <div className="login-box">
                <h2 className="login-title">Login</h2>
                <form id="loginForm">
                  
                    <div>
                        <input
                            type="email"
                            id="email"
                            className="input-email"
                            placeholder="Email"
                            required=""
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
                            required=""
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