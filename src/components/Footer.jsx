export default function Footer() {

    return (
        <>
            {/*Footer content*/}
            <footer className="tm-footer">
                <div className="container">
                    <div className="row margin-bottom-60">
                        <nav className="col-lg-3 col-md-3 tm-footer-nav tm-footer-div">
                            <h3 className="tm-footer-div-title">Main Menu</h3>
                            <ul>
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a href="about.html">About Us</a>
                                </li>
                                <li>
                                    <a href="gallery.html">Directory</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="services.html">Our Services</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="col-lg-5 col-md-5 tm-footer-div">
                            <h3 className="tm-footer-div-title">About Us</h3>
                            <p className="margin-top-15">
                                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                                Phasellus viverra nulla ut metus varius laoreet.
                            </p>
                            <p className="margin-top-15">
                                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
                                libero venenatis faucibus.
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-4 tm-footer-div">
                            <h3 className="tm-footer-div-title">Get Social</h3>
                            <p>
                                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                Aliquam lorem ante.
                            </p>
                            <div className="tm-social-icons-container">
                                <a href="#" className="tm-social-icon">
                                    <i className="fa fa-facebook" />
                                </a>
                                <a href="#" className="tm-social-icon">
                                    <i className="fa fa-twitter" />
                                </a>
                                <a href="#" className="tm-social-icon">
                                    <i className="fa fa-linkedin" />
                                </a>
                                <a href="#" className="tm-social-icon">
                                    <i className="fa fa-youtube" />
                                </a>
                                <a href="#" className="tm-social-icon">
                                    <i className="fa fa-behance" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row tm-copyright">
                        <p className="col-lg-12 small copyright-text text-center">
                            Copyright © 2084 Company Name
                        </p>
                    </div>
                </div>
            </footer>{" "}
            {/* Footer content*/}
        </>
    );
}