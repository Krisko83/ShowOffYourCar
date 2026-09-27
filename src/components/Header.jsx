import { NavLink } from 'react-router';
import './Header.css'

export default function Header() {

    return (
        <>
            <header className="section site-header">
                <div className="header-wrapper">
                    <nav className="site-nav">
                        <span><NavLink to="/" className="logo">Site Logo</NavLink></span>
                        <ul className="navigation">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/gallery">Gallery</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contacts">Contacts</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/register">Register</NavLink></li>
                            <li><NavLink to="/add-car">Add Car</NavLink></li>
                            <li><NavLink to="/profile">Profile</NavLink></li>
                            <li><NavLink to="/logout">Logout</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="wrapper">
                    <section className="site-header-text">
                        <h2>Welcome to Show off your car app!</h2>
                        {/* <h2>Here you can show your car, like and comment other cars!</h2>
                        <h2>Business Association</h2> */}
                        <p>Here you can show off you fancy car!</p>
                    </section>
                </div>
            </header>

        </>
    );
}