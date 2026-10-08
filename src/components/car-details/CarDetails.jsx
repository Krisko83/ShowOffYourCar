
import { Link, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import request from '../../utils/request.js';
import NotFound from '../not-found/NotFound.jsx';
import './CarDetails.css';

const initialValues = {
    imageUrl: null,
    manufacturer: '',
    model: '',
    year: '',
    category: '',
    power: '',
    gearbox: '',
    fuel: '',
    mileage: '',
    cubic: '',
    driveType: '',
    description: '',
}

export default function CarDetails() {
    const { carId } = useParams();
    const [car, setCar] = useState(initialValues)

    useEffect(() => {
        request(`/cars?id=eq.${carId}`)
            .then(res => setCar(res[0]))
            .catch(() => {
                <NotFound />
            })

    }, [carId]);


    return (
        <main className="details-page">

            <section className="car-details">

                <div className="car-details-image">
                    <img
                        src={car.imageUrl}
                        alt={`${car.manufacturer} ${car.model}`}
                    />
                </div>

                <div className="car-details-info">

                    <div className="details-header">
                        <div>
                            <h1>{car.manufacturer} {car.model}</h1>
                            <p>{car.year}</p>
                        </div>

                    </div>

                    <div className="specifications">

                        <div className="specification">
                            <span>Manufacturer</span>
                            <strong>{car.manufacturer}</strong>
                        </div>

                        <div className="specification">
                            <span>Model</span>
                            <strong>{car.model}</strong>
                        </div>

                        <div className="specification">
                            <span>Year</span>
                            <strong>{car.year}</strong>
                        </div>

                        <div className="specification">
                            <span>Category</span>
                            <strong>{car.category}</strong>
                        </div>

                        <div className="specification">
                            <span>Power</span>
                            <strong>{car.power} HP</strong>
                        </div>

                        <div className="specification">
                            <span>Gearbox</span>
                            <strong>{car.gearbox}</strong>
                        </div>

                        <div className="specification">
                            <span>Fuel</span>
                            <strong>{car.fuel}</strong>
                        </div>

                        <div className="specification">
                            <span>Mileage</span>
                            <strong>{car.mileage} km</strong>
                        </div>

                        <div className="specification">
                            <span>Engine</span>
                            <strong>{car.cubic} cm³</strong>
                        </div>

                        <div className="specification">
                            <span>Drive Type</span>
                            <strong>{car.driveType}</strong>
                        </div>

                    </div>

                </div>

            </section>

            {/* DESCRIPTION */}

            <section className="description-section">

                <h2>Description</h2>

                <p>{car.description}</p>

            </section>

            {/* ACTIONS */}

            <section className="car-actions">

                <Link to={`/cars/${carId}/edit`}  className="action-button edit-button">
                    Edit
                </Link>

                <Link to={`/cars/${carId}/delete`} className="action-button delete-button">
                    Delete
                </Link>

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

