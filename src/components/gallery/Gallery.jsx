import { useEffect, useState } from "react";
import styles from './Gallery.module.css';
import SearchItem from "../search/SearchItem.jsx";
import useDecumentTitle from "../../hooks/useDocumentTitle.js";
import Pagination from "./pagination/Pagination.jsx";
import CarItem from "../car-item/CarItem.jsx";
import { carApi } from "../../api/index.js";
import { useSearchParams } from "react-router";
import { toast } from "react-toastify";

export default function Gallery() {
    useDecumentTitle('Gallery');

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(9);
    const [filteredCars, setFilteredCars] = useState([]);
    const [cars, setCars] = useState([])
    const [isSearched, setIsSearched] = useState(false);
    const [totalCars, setTotalCars] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        const offset = (page - 1) * 9;

        fetch(`https://ggordfryvhhohlcicpdu.supabase.co/rest/v1/cars?order=created_at.desc&limit=${limit}`, {
            method: 'HEAD',
            headers: {
                apikey: import.meta.env.VITE_API_KEY,
                Prefer: 'count=exact'
            }
        })
            .then(async res => {
                const contentRange = res.headers.get('content-range');
                const count = Number(contentRange.split('/')[1])

                setTotalCars(count)

                return carApi.getAllCars(`/cars?order=created_at.desc&limit=${limit}&offset=${offset}`)
                    .then(data => {
                        setCars(data)
                    })
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    toast.error('Failed attempt to retrive cars. Please try again later!')
                }

            })

    }, [limit, page])


    let totalPages = Math.ceil(totalCars / limit);


    if (filteredCars.length) {
        totalPages = Math.ceil(filteredCars.length / limit);
    }

    const startIndex = (page - 1) * limit;

    const paginatedCars = filteredCars.length
        ? filteredCars.slice(startIndex, startIndex + limit)
        : cars;


    const setPageLimit = (e) => {
        setLimit(Number(e.target.value));
        setPage(1);
    }

    const filterCars = (filterCars, searchPar) => {
        setFilteredCars(filterCars)
        setPage(1)
        setIsSearched(true)
        setSearchParams({ search: searchPar, page: 1 })
    }

    const changePage = (newPage) => {
        setSearchParams({ page: newPage });
    }



    return (
        <main className={styles["gallery-page"]}>
            <SearchItem
                filterCars={filterCars}
                setIsSearched={setIsSearched}
                changePage={changePage}
                setSearchParams={setSearchParams}
            />

            <h1>{isSearched ? 'Search results' : 'Car Gallery'}</h1>

            {isSearched && filteredCars.length === 0
                ?

                <h3>There is no records that matches you search!</h3>

                :

                paginatedCars.length ?
                    <>
                        <div className={styles["car-gallery"]}>
                            {paginatedCars.map(car => <CarItem key={car.id} {...car} />)}
                        </div>

                        <Pagination
                            page={page}
                            setPage={setPage}
                            limit={limit}
                            setPageLimit={setPageLimit}
                            totalPages={totalPages}
                            searchParams={searchParams}
                            setSearchParams={setSearchParams}
                            changePage={changePage} />
                    </>
                    : <h3>There is no records to show!</h3>
            }

        </main>
    );

}



