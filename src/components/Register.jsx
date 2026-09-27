import { Link } from 'react-router';
import './LoginRegister.css'


export default function Register() {

    return (
        <section className='background-register'>
            <div className="signup-box">
                <h2 className="signup-title">Register</h2>
                {/* Email Input */}
                <div>
                    <input
                        className="input-email"
                        id="email"
                        placeholder="Email"
                        required=""
                        type="email"
                    />
                    <div className="line" id="Eline" />
                </div>
                {/* Username Input */}
                <div>
                    <input
                        className="input-username"
                        id="username"
                        placeholder="Username"
                        required=""
                    />
                    <div className="line" id="Uline" />
                </div>
                {/* Password with Eye */}
                <div className="password-wrapper">
                    <input
                        className="input-password"
                        id="passwordInput"
                        placeholder="Password"
                        type="password"
                        minLength={8}
                        required=""
                    />
                    <span className="eyebox" id="toggleEye">
                        <i className="fas fa-eye" id="eyeIcon" />
                    </span>
                </div>
                <div className="line" id="Pline" />
                {/* Confirm Password with Eye */}
                <div className="password-wrapper">
                    <input
                        className="input-confpassword"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                        minLength={8}
                        required=""
                    />
                    <span className="eyebox" id="toggleEye2">
                        <i className="fas fa-eye" id="eyeIcon2" />
                    </span>
                </div>
                <div className="line" id="cPline" />                
                <div>
                    <button className="signup-btn">Register</button>
                </div>
                <div className="login-section">
                    <Link className="login-link" to="/login">
                        Have An Account? Login!{" "}
                    </Link>
                  
                </div>
            </div>


        </section>
    );
}