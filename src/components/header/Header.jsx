import { Link } from 'react-router';
import { use } from 'react';
import UserContext from '../../contexts/UserContext.js';
import './Header.css'


export default function Header() {
    const { user, onLogout } = use(UserContext)

    return (
        <>
            <header className='section site-header'>
                <div className="header-wrapper">
                    <nav className="site-nav">
                        <span><Link to="/" className="logo">Site Logo</Link></span>
                        <ul className="navigation">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/cars/gallery">Gallery</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contacts">Contact Us</Link></li>
                            {user
                                ?
                                <>
                                    <li><Link to="/cars/add-car">Add Car</Link></li>
                                    <li><Link to="/profile">Profile</Link></li>
                                    <li><button onClick={onLogout} className='navBtn'>Logout</button></li>
                                </>
                                :
                                <>
                                    <li><Link to="/auth/login">Login</Link></li>
                                    <li><Link to="/auth/register">Register</Link></li>
                                </>
                            }

                        </ul>
                    </nav>
                </div>
                <div className="wrapper">
                    <section className="site-header-text">
                        <h2>Welcome to the Show off your car app!</h2>
                
                        <p>Show off your ride, discover amazing cars, and connect with fellow car enthusiasts.  </p>
                    </section>
                </div>
            </header>

        </>
    );
}

