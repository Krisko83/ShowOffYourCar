import { useEffect, useState } from "react";
import HomeItem from "./HomeItem.jsx";
import request from "../../utils/request.js";

export default function Home() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        request('/cars?order=createdAt.desc&limit=3', 'GET', null, { signal: abortController.signal })
            .then(setCars)
            .catch(err => console.log(err));             

        return () => {
            abortController.abort('Unmounted element');
        }
    }, [])

    const lastThreeCars = cars.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 3);

    return (

        <section className="container margin-bottom-50">
            <div className="about-container-2">
                {lastThreeCars.map(car => <HomeItem key={car.id} car={car} />)}
            </div>
        </section >

    );
}