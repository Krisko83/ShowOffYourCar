export default function SuccessfullMessage() {

    return (

        <div className="success-notification" role="status">
            <div className="success-icon">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M5 12.5l4 4L19 6.5" />
                </svg>
            </div>

            <div className="success-content">
                <h3>Message sent successfully!</h3>
                <p>
                    Thank you for reaching out. We'll be in touch soon!
                </p>
            </div>

        </div>

    );
}