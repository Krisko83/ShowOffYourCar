export default function AskedQuestionItem({
    subject,
    message
}) {

    return (
        <div className="faq-list">
            <details className="faq-item">
                <summary>{subject}</summary>
                <p>
                   {message}
                </p>
            </details>
        </div>
    );
}