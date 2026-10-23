import { useState } from 'react'; 
import './Contacts.css';
import useDecumentTitle from '../../hooks/useDocumentTitle.js';
import AskQuestion from './ask-question/AskQuestion.jsx';
import AskedQuestions from './asked-questions/AskedQuestions.jsx';



export default function Contacts() {
    useDecumentTitle('Contact Us');
    
    const [successfulMessage, setSuccessfullMessage] = useState('');

    const showSuccessfullMessage = (value) => {
        setSuccessfullMessage(value)
    }


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

                <AskQuestion showMessage={showSuccessfullMessage} successfulMessage={successfulMessage} />

                <aside className="contact-info">

                    <h2>Get in touch</h2>

                    <div className="contact-item">
                        <span className="contact-icon">📧</span>

                        <div>
                            <strong>Email</strong>
                            <p>showoffcar@abv.bg</p>
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
            <AskedQuestions onCreate={successfulMessage} />
        </main>
    );
}

