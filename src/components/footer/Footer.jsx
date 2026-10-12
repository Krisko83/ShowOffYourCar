import { Link } from 'react-router';
import { use } from 'react';
import UserContext from '../../contexts/UserContext.js';
import styles from './Footer.module.css'

export default function Footer() {
    const { user } = use(UserContext);

    return (
        <footer className={styles["footer"]} >

            <div className={styles["footer-content"]} >


                <div className={styles["footer-section footer-about"]} >
                    <h2>Show off<span>Your Car</span></h2>

                    <p>
                        A place for car enthusiasts to share their cars,
                        discover new ones and connect with the community.
                    </p>
                </div>


                <div className={styles["footer-section"]} >
                    <h3>Explore</h3>

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/cars/gallery">Gallery</Link>
                        </li>

                        <li>
                            <Link to="/about">About Us</Link>
                        </li>

                        <li>
                            <Link to="/contacts">Contact Us</Link>
                        </li>
                    </ul>
                </div>


                <div className={styles["footer-section"]} >
                    <h3>Community</h3>

                    <ul>
                        <li>
                            <Link to="/cars/add-car">Post Your Car</Link>
                        </li>

                        {!user &&
                            <>
                                <li>
                                    <Link to="/user/login">Login</Link>
                                </li>

                                <li>
                                    <Link to="/user/register">Create Account</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>


                <div className={styles["footer-section"]}>
                    <h3>Get in Touch</h3>

                    <p className={styles["footer-contact"]}>
                        📧 	showoffcar@abv.bg
                    </p>

                    <p className={styles["footer-contact"]}>
                        🚗 Share. Discover. Connect.
                    </p>

                    <div className={styles["social-links"]}>
                        <Link to="https://www.facebook.com/profile.php?id=61594912485411" target='_blank' rel="noopener noreferrer" aria-label="Facebook">
                            f
                        </Link>

                        <Link to="https://www.instagram.com/showoffcar2026/"  target='_blank' rel="noopener noreferrer" aria-label="Instagram">
                            ◎
                        </Link>

                        <Link to="https://x.com/ShowOffYourCar" target='_blank' rel="noopener noreferrer" aria-label="Twitter">
                            𝕏
                        </Link>
                    </div>
                </div >

            </div >


        <div className={styles["footer-bottom"]} >

            <p>
                © 2026 Show off you Car. All rights reserved.
            </p>

            </ div>

        </footer>
    );
}

