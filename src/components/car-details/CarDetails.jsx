 
import './CarDetails.css';

export default function CarDetails() {
    return (
        <main className="details-page">

            <section className="car-details">

                <div className="car-details-image">
                    <img
                        src="https://images.unsplash.com/photo-1555215695-3004980ad54e"
                        alt="BMW 320d"
                    />
                </div>

                <div className="car-details-info">

                    <div className="details-header">
                        <div>
                            <h1>BMW 320d</h1>
                            <p>2021 · BMW</p>
                        </div>

                        <strong className="car-price">
                            €28,500
                        </strong>
                    </div>

                    <div className="specifications">

                        <div className="specification">
                            <span>Manufacturer</span>
                            <strong>BMW</strong>
                        </div>

                        <div className="specification">
                            <span>Model</span>
                            <strong>320d</strong>
                        </div>

                        <div className="specification">
                            <span>Year</span>
                            <strong>2021</strong>
                        </div>

                        <div className="specification">
                            <span>Category</span>
                            <strong>Sedan</strong>
                        </div>

                        <div className="specification">
                            <span>Power</span>
                            <strong>190 HP</strong>
                        </div>

                        <div className="specification">
                            <span>Gearbox</span>
                            <strong>Automatic</strong>
                        </div>

                        <div className="specification">
                            <span>Fuel</span>
                            <strong>Diesel</strong>
                        </div>

                        <div className="specification">
                            <span>Mileage</span>
                            <strong>125,000 km</strong>
                        </div>

                        <div className="specification">
                            <span>Engine</span>
                            <strong>1995 cm³</strong>
                        </div>

                        <div className="specification">
                            <span>Drive Type</span>
                            <strong>Rear-Wheel Drive</strong>
                        </div>

                    </div>

                </div>

            </section>

            {/* DESCRIPTION */}

            <section className="description-section">

                <h2>Description</h2>

                <p>
                    Beautiful and well-maintained BMW 320d with excellent
                    performance and fuel economy. The car is in very good
                    condition and has been regularly serviced.
                </p>

            </section>

            {/* ACTIONS */}

            <section className="car-actions">

                <button className="action-button edit-button">
                    Edit
                </button>

                <button className="action-button delete-button">
                    Delete
                </button>

                <div className="reaction-buttons">

                    <button className="reaction-button like-button">
                        👍
                        <span>Like</span>
                    </button>

                    <button className="reaction-button dislike-button">
                        👎
                        <span>Dislike</span>
                    </button>

                </div>

            </section>

            {/* COMMENTS */}

            <section className="comments-section">

                <h2>Comments</h2>

                {/* ADD COMMENT */}

                <form className="comment-form">

                    <textarea
                        placeholder="Write a comment..."
                        rows="4"
                    />

                    <button type="submit">
                        Add Comment
                    </button>

                </form>

                {/* COMMENT */}

                <div className="comments-list">

                    <article className="comment">

                        <div className="comment-header">
                            <strong>John Smith</strong>
                            <span>2 hours ago</span>
                        </div>

                        <p>
                            Very nice car! Is it still available?
                        </p>

                    </article>

                    <article className="comment">

                        <div className="comment-header">
                            <strong>Michael</strong>
                            <span>Yesterday</span>
                        </div>

                        <p>
                            The car looks great. How is the fuel consumption?
                        </p>

                    </article>

                </div>

            </section>

        </main>
    );
}
 
