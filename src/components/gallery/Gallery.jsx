import { useEffect, useState } from "react";
import Pagination from "./Pagination.jsx";
import request from "../../utils/request.js";


import './Gallery.css';
import CarItem from "../home/CarItem.jsx";

export default function Gallery() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [cars, setCars] = useState([])

    useEffect(() => {
        const abortController = new AbortController();

        request('/cars?order=created_at.desc', 'GET', null, { signal: abortController.signal })
            .then(setCars)
            .catch(error => console.log(error))

        return () => {
            abortController.abort('Unmounted element');
        }
    }, []);

    const totalPages = Math.ceil(cars.length / limit)
    const startIndex = (page - 1) * limit;

    const paginatedCars = cars.slice(startIndex, startIndex + limit);


    return (
        <main className="gallery-page">

            <h1>Car Gallery</h1>

            <div className="car-gallery">

                {paginatedCars.map(car => <CarItem key={car.id} {...car} />)}

            </div>
            <Pagination page={page} setPage={setPage} limit={limit} setLimit={setLimit} totalPages={totalPages} />
        </main>
    );
}





// import { useEffect, useState } from "react";
// import Pagination from "./Pagination.jsx";
// import GalleryItem from "./GalleryItem.jsx";
// import request from "../../utils/request.js";

// export default function Gallery() {
//     const [page, setPage] = useState(1);
//     const [limit, setLimit] = useState(5);
//     const [cars, setCars] = useState([])

//     useEffect(() => {
//         const abortController = new AbortController();

//         request('/cars','GET', null, { signal: abortController.signal })
//             .then(setCars)
//             .catch(error => console.log(error))

//         return () => {
//             abortController.abort('Unmounted element');
//         }
//     }, []);

//     const totalPages = Math.ceil(cars.length / limit)
//     const startIndex = (page - 1) * limit;

//     const paginatedCars = cars.slice(startIndex, startIndex + limit);



//     return (
//         <section className="container margin-bottom-50">
//             <div className="row">

//                 <div className="tm-gallery col-lg-12">
//                     {paginatedCars.map(car => <GalleryItem key={car.id} car={car} />)}
//                 </div>

//             </div>

//             <Pagination page={page} setPage={setPage} limit={limit} setLimit={setLimit} totalPages={totalPages} />
//         </section>
//     );
// }



