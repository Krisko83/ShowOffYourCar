import { useEffect, useState } from "react";
import Pagination from "./Pagination.jsx";
import request from "../../utils/request.js";
import CarItem from "../home/CarItem.jsx";
import styles from './Gallery.module.css';
import SearchItem from "../search/SearchItem.jsx";

export default function Gallery() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(9);
    const [cars, setCars] = useState([])
    const [filteredCars, setFilteredCars] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        request.getAll('/cars?order=created_at.desc', null, { signal: abortController.signal })
            .then(setCars)
            .catch(error => console.log(error))

        return () => {
            abortController.abort('Unmounted element');
        }
    }, []);


    let totalPages = Math.ceil(cars.length / limit);

    if (filteredCars.length) {
        totalPages = Math.ceil(filteredCars.length / limit);
    }

    const startIndex = (page - 1) * limit;


    const paginatedCars = filteredCars.length
        ? filteredCars.slice(startIndex, startIndex + limit)
        : cars.slice(startIndex, startIndex + limit);


    const setPageLimit = (e) => {
        setLimit(Number(e.target.value));
        setPage(1);
    }

    const filterCars = (filterCars) => {
        setFilteredCars(filterCars)
        setPage(1)
        setIsSearched(true)
    }


    return (
        <main className={styles["gallery-page"]}>
            <SearchItem filterCars={filterCars} setIsSearched={setIsSearched} />

            <h1>{isSearched ? 'Search results' : 'Car Gallery'}</h1>

            {isSearched && filteredCars.length === 0
                ?

                <h3>There is no records that matches you search!</h3>

                :

                <>
                    <div className={styles["car-gallery"]}>
                        {paginatedCars.map(car => <CarItem key={car.id} {...car} />)}
                    </div>

                    <Pagination page={page} setPage={setPage} limit={limit} setPageLimit={setPageLimit} totalPages={totalPages} />
                </>
            }

        </main>
    );
}

