import { useEffect, useState } from "react";
import HomeItem from "./HomeItem.jsx";

export default function Home() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        fetch('https://ggordfryvhhohlcicpdu.supabase.co/rest/v1/cars', {
            signal: abortController.signal,
            headers: {
                apikey: 'sb_publishable_25uCGYdn_bFi0wGD_6vPQA_g8loF2HB'
            }
        }).then(res => res.json())
            .then(data => setCars(data))
            .catch(error => console.log(error))

        return () => {
            abortController.abort();
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