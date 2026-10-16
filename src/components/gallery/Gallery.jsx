import { useEffect, useState } from "react";
import Pagination from "./Pagination.jsx";
import request from "../../utils/request.js";
import CarItem from "../home/CarItem.jsx";
import styles from './Gallery.module.css';

export default function Gallery() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(9);
    const [cars, setCars] = useState([])

    useEffect(() => {
        const abortController = new AbortController();

        request.getAll('/cars?order=created_at.desc', null, { signal: abortController.signal })
            .then(setCars)
            .catch(error => console.log(error))

        return () => {
            abortController.abort('Unmounted element');
        }
    }, []);

    

    const totalPages = Math.ceil(cars.length / limit)
    const startIndex = (page - 1) * limit;

    const paginatedCars = cars.slice(startIndex, startIndex + limit);

       const setPageLimit = (e) => {
        setLimit(Number(e.target.value));
        setPage(1);
    }


    return (
        <main className={styles["gallery-page"]}>

            <h1>Car Gallery</h1>

            <div className={styles["car-gallery"]}>

                {paginatedCars.map(car => <CarItem key={car.id} {...car} />)}

            </div>
            <Pagination page={page} setPage={setPage} limit={limit} setPageLimit={setPageLimit} totalPages={totalPages} />
        </main>
    );
}

 