import { Link } from "react-router";  
import useDecumentTitle from "../../hooks/useDocumentTitle.js";
import CarItem from "../car-item/CarItem.jsx";
import { useEffect, useState } from "react";
import { carApi } from "../../api/index.js";
import { toast } from "react-toastify";
import './Home.css';



export default function Home() {
    useDecumentTitle('Home');

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        carApi.getAllCars('/cars?order=created_at.desc&limit=3', { signal: abortController.signal })
            .then(setCars)
            .catch(err => {
                if (err.name !== 'AbortError') {
                    toast.error('Failed attempt to retrive all cars. Please try again later!')
                }
            })

        return () => {
            abortController.abort();
        }

    }, []);
   

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

