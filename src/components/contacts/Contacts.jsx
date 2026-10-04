// export default function Contacts() {

//     return (
//         <section className="container tm-contact-main">
//             {/* <div className="row">
//                 <div id="google-map" />
//             </div> */}
//             <div className="row">
//                 <div className="contact-form-container">
//                     <h2 className="contact-title">Contact Us</h2>
//                     <p>
//                         Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
//                         quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
//                         id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
//                         Drbi accumsan ipsum velit.
//                     </p>
//                     <form action="#" method="post" className="tm-contact-form">
//                         <div className="col-lg-5 col-md-5 contact-form-left">
//                             <div className="form-group">
//                                 <input
//                                     type="text"
//                                     id="contact_name"
//                                     className="form-control"
//                                     placeholder="NAME"
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <input
//                                     type="email"
//                                     id="contact_email"
//                                     className="form-control"
//                                     placeholder="EMAIL"
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <input
//                                     type="text"
//                                     id="contact_subject"
//                                     className="form-control"
//                                     placeholder="SUBJECT"
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-7 col-md-7 contact-form-right">
//                             <div className="form-group margin-bottom-0">
//                                 <textarea
//                                     id="contact_message"
//                                     className="form-control"
//                                     rows={6}
//                                     placeholder="MESSAGE"
//                                     defaultValue={""}
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg-12 col-md-12 submit-btn-container">
//                             <button
//                                 type="submit"
//                                 name="submit"
//                                 className="btn text-uppercase templatemo-submit-btn"
//                             >
//                                 Send Message
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// }


 
import './Contacts.css';

export default function Contacts() {
    return (
        <main className="contact-page">

            <section className="contact-header">
                <h1>Contact Us</h1>

                <p>
                    Have a question, suggestion or something you'd
                    like to tell us? We'd love to hear from you.
                </p>
            </section>

            <section className="contact-content">

                <form className="contact-form">

                    <h2>Send us a message</h2>

                    <div className="form-group">
                        <label htmlFor="name">
                            Name
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">
                            Subject
                        </label>

                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="What is your message about?"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            placeholder="Write your message..."
                        />
                    </div>

                    <button type="submit">
                        Send Message
                    </button>

                </form>

                <aside className="contact-info">

                    <h2>Get in touch</h2>

                    <div className="contact-item">
                        <span className="contact-icon">📧</span>

                        <div>
                            <strong>Email</strong>
                            <p>contact@carcommunity.com</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon">💬</span>

                        <div>
                            <strong>Community</strong>
                            <p>
                                Have a question about the community?
                                Send us a message and we'll help.
                            </p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon">🚗</span>

                        <div>
                            <strong>Car Community</strong>
                            <p>
                                Share. Discover. Connect.
                            </p>
                        </div>
                    </div>

                </aside>

            </section>

        </main>
    );
}
 
