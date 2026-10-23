import { useState } from "react";
import Pagination from "./Pagination.jsx"; 
import CarItem from "../home/CarItem.jsx";
import styles from './Gallery.module.css';
import SearchItem from "../search/SearchItem.jsx";
import useGetAllRequest from "../../hooks/useGetAllRequest.js";
import useDecumentTitle from "../../hooks/useDocumentTitle.js";
 
export default function Gallery() {
    useDecumentTitle('Gallery');

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(9);
    const [filteredCars, setFilteredCars] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
 
    const [cars] = useGetAllRequest('/cars?order=created_at.desc', [])

 
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

