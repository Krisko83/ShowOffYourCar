import './NotFound.css'

export default function NotFound() {

    return (
        <section className="error-page">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            <a href="/">Back to Home</a>
        </section>
    );
}