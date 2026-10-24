import { Link } from 'react-router';
import { use } from 'react';
import UserContext from '../../contexts/UserContext.js';
import './Header.css'


export default function Header() {
    const { userData, userImage } = use(UserContext); 

    const avatar = userImage;
 

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
                            {userData
                                ?
                                <>
                                    <li><Link to="/cars/add-car">Add Car</Link></li>
                                    <li><Link to="/user/profile">
                                        {avatar ?
                                            <img src={avatar} className="heading-icon-avatar" alt="User image" />
                                            :
                                            <span className="heading-icon" aria-hidden="true">👤</span>
                                        }

                                        My Profile
                                    </Link></li>
                                    <li><Link to='/user/logout'>Logout</Link></li>
                                </>
                                :
                                <>
                                    <li><Link to="/user/login">Login</Link></li>
                                    <li><Link to="/user/register">Register</Link></li>
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

