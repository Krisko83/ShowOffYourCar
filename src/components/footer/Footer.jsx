// import { Link } from "react-router";

// export default function Footer() {

//     return (

//         <footer className="tm-footer">
//             <div className="container">
//                 <div className="row margin-bottom-60">
//                     <nav className="col-lg-3 col-md-3 tm-footer-nav tm-footer-div">
//                         <h3 className="tm-footer-div-title">Main Menu</h3>
//                         <ul>
//                             <li>
//                                 <Link to="/">Home</Link>
//                             </li>
//                             <li>
//                                 <Link to="/about">About Us</Link>
//                             </li>
//                             <li>
//                                 <Link to="/">Gallery</Link>
//                             </li>
//                             <li>
//                                 <Link to="/contacts">Contacts</Link>
//                             </li>
//                         </ul>
//                     </nav>
//                     <div className="col-lg-5 col-md-5 tm-footer-div">
//                         <h3 className="tm-footer-div-title">About Us</h3>
//                         <p className="margin-top-15">
//                             Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
//                             Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
//                             Phasellus viverra nulla ut metus varius laoreet.
//                         </p>
//                         <p className="margin-top-15">
//                             Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
//                             Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
//                             libero venenatis faucibus.
//                         </p>
//                     </div>
//                     <div className="col-lg-4 col-md-4 tm-footer-div">
//                         <h3 className="tm-footer-div-title">Get Social</h3>
//                         <p>
//                             Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
//                             Aliquam lorem ante.
//                         </p>
//                         <div className="tm-social-icons-container">
//                             <a to="#" className="tm-social-icon">
//                                 <i className="fa fa-facebook" />
//                             </a>
//                             <a to="#" className="tm-social-icon">
//                                 <i className="fa fa-twitter" />
//                             </a>
//                             <a to="#" className="tm-social-icon">
//                                 <i className="fa fa-linkedin" />
//                             </a>
//                             <a to="#" className="tm-social-icon">
//                                 <i className="fa fa-youtube" />
//                             </a>
//                             <a to="#" className="tm-social-icon">
//                                 <i className="fa fa-behance" />
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row tm-copyright">
//                     <p className="col-lg-12 small copyright-text text-center">
//                         Copyright © 2084 Company Name
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// }


import { Link } from 'react-router';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">

                {/* ABOUT */}

                <div className="footer-section footer-about">
                    <h2>Show off<span>Your Car</span></h2>

                    <p>
                        A place for car enthusiasts to share their cars,
                        discover new ones and connect with the community.
                    </p>
                </div>


                <div className="footer-section">
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


                <div className="footer-section">
                    <h3>Community</h3>

                    <ul>
                        <li>
                            <Link to="/cars/add-car">Post Your Car</Link>
                        </li>

                        <li>
                            <Link to="/auth/login">Login</Link>
                        </li>

                        <li>
                            <Link to="/auth/register">Create Account</Link>
                        </li>
                    </ul>
                </div>


                <div className="footer-section">
                    <h3>Get in Touch</h3>

                    <p className="footer-contact">
                        📧 contact@carcommunity.com
                    </p>

                    <p className="footer-contact">
                        🚗 Share. Discover. Connect.
                    </p>

                    <div className="social-links">
                        <Link to="/" aria-label="Facebook">
                            f
                        </Link>

                        <Link to="/" aria-label="Instagram">
                            ◎
                        </Link>

                        <Link to="/" aria-label="Twitter">
                            𝕏
                        </Link>
                    </div>
                </div>

            </div>


            <div className="footer-bottom">

                <p>
                    © 2026 Show off you Car. All rights reserved.
                </p>

            </div>

        </footer>
    );
}

