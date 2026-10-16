import { useEffect, useState } from "react";
import request from "../../utils/request.js";
import CarItem from "./CarItem.jsx";
import { Link } from "react-router";
import './Home.css';
 

export default function Home() {

    const [cars, setCars] = useState([]);
 

    useEffect(() => {
        const abortController = new AbortController();

        request.getAll('/cars?order=created_at.desc&limit=3', null, { signal: abortController.signal })
            .then(setCars)
            .catch(err => alert(err));

        return () => {
            abortController.abort('Unmounted element');
        }
    }, [])
 
    return (
        <main className="home">

            <section className="hero">
                <h1>See all Cars</h1>
                <p>
                    Explore our collection of quality cars.
                </p>

                <Link to='/cars/gallery' className="hero-button">
                    Explore Cars
                </Link>
            </section>

            <section className="featured">
                <h2>Featured Cars</h2>

                <div className="car-cards">

                    {cars.map(car => <CarItem key={car.id} {...car} />)}

                </div>
            </section>

        </main>
    );
}

