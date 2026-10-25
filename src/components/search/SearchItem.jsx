import { useState } from 'react';
import styles from './SearchItem.module.css'
import { carApi } from '../../api/index.js';
import { toast } from 'react-toastify';


const searchOptions = [ 
    { label: "Manufacturer", value: "manufacturer" },
    { label: "Model", value: "model" },
    { label: "Year", value: "year" },
    { label: "Category", value: "category" },
    { label: "Fuel", value: "fuel" },
    { label: "Gearbox", value: "gearbox" },
    { label: "Drive type", value: "driveType" },
];

export default function SearchItem({
    filterCars,
    setIsSearched
}) {

    const [searchParam, setSearchParam] = useState('manufacturer');
    const [searchValue, setSearchValue] = useState('');


    const setParameter = (e) => {
        setSearchParam(e.target.value)
    }

    const setSearch = (e) => {
        setSearchValue(e.target.value)
    }


    const submitHandler = async (e) => {
        e.preventDefault();


        if (searchValue === '') {
            return filterCars([]);
        };

        try { 
            const cars = await carApi.getAllCars(`/cars?${searchParam}=ilike.*${searchValue}*`);
 
            filterCars(cars)

        } catch {
            toast.error('Failed attempt to retrive cars info! Please try again later!')
        }
    };

    const clickClearHandler = () => {
        setSearchValue('');
        setSearchParam('manufacturer');
        filterCars([]);
        setIsSearched(false)
    }


    return (

        <form
            className={styles["search-container"]}
            onSubmit={submitHandler}
        >
            <select
                className={styles["search-select"]}
                value={searchParam}
                name="param"
                onChange={setParameter}
                aria-label="Search parameter"
            >
                {searchOptions.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>

            <svg
                className={styles["search-icon"]}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
            >
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" />
            </svg>

            <input
                type="search"
                placeholder="Search cars..."
                name='search'
                aria-label="Search cars"
                value={searchValue}
                onChange={setSearch}
            />

            {searchValue && (
                <button
                    type="button"
                    className={styles["clear-button"]}
                    onClick={clickClearHandler}
                    aria-label="Clear search"
                >
                    &times;
                </button>
            )}


            <button
                type="submit"
                className={styles["search-button"]}
            >
                Search
            </button>
        </form>

    );
}








