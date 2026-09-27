export default function About() {

    return (
        <section className="container margin-bottom-50">
            <div className="about-container">
                <div className="about-container-left">
                    <img src="img/about/2.jpg" alt="Image" className="img-responsive" />
                </div>
                <div className="about-container-right">
                    <h2 className="about-title">fringila ulputate</h2>
                    <p className="about-description">
                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                        quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                        id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                        Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
                        ornare odio.
                    </p>
                    <p className="about-description">
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                        ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
                        vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                    </p>
                    <a href="#" className="about-link">
                        Duised sitDamet
                    </a>
                </div>
            </div>
            <div className="about-container-2">
                <div className="about-container-inner">
                    <h3 className="about-title-2">aenean solcudin</h3>
                    <img
                        src="img/about/3.jpg"
                        alt="Image"
                        className="img-responsive margin-bottom-15"
                    />
                    <p className="about-description">
                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                        quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                        id elit.
                    </p>
                    <a href="#" className="about-link about-link-2">
                        Details
                    </a>
                </div>
                <div className="about-container-inner">
                    <h3 className="about-title-2">morbi accumsan</h3>
                    <img
                        src="img/about/4.jpg"
                        alt="Image"
                        className="img-responsive margin-bottom-15"
                    />
                    <p className="about-description">
                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                        quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                        id elit.
                    </p>
                    <a href="#" className="about-link about-link-2">
                        Details
                    </a>
                </div>
            </div>
        </section>

    );
}