import { useEffect, useState } from "react";
import Pagination from "./Pagination.jsx";
import GalleryItem from "./GalleryItem.jsx";
import request from "../../utils/request.js";

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


 
import './Gallery.css';

export default function Gallery() {
    return (
        <main className="gallery-page">

            <h1>Car Gallery</h1>

            <div className="car-gallery">

                <article className="gallery-card">
                    <img src="/images/car1.jpg" alt="BMW 3 Series" />
                    <div className="gallery-card-content">
                        <h3>BMW 320d</h3>
                        <p>2021 · Diesel · Automatic</p>
                        <strong>€28,500</strong>
                    </div>
                </article>

                <article className="gallery-card">
                    <img src="/images/car2.jpg" alt="Mercedes C-Class" />
                    <div className="gallery-card-content">
                        <h3>Mercedes C-Class</h3>
                        <p>2022 · Petrol · Automatic</p>
                        <strong>€35,900</strong>
                    </div>
                </article>

                <article className="gallery-card">
                    <img src="/images/car3.jpg" alt="Audi A4" />
                    <div className="gallery-card-content">
                        <h3>Audi A4</h3>
                        <p>2020 · Diesel · Automatic</p>
                        <strong>€25,900</strong>
                    </div>
                </article>

                <article className="gallery-card">
                    <img src="/images/car4.jpg" alt="BMW X5" />
                    <div className="gallery-card-content">
                        <h3>BMW X5</h3>
                        <p>2021 · Diesel · Automatic</p>
                        <strong>€45,000</strong>
                    </div>
                </article>

                <article className="gallery-card">
                    <img src="/images/car5.jpg" alt="Audi Q7" />
                    <div className="gallery-card-content">
                        <h3>Audi Q7</h3>
                        <p>2022 · Diesel · Automatic</p>
                        <strong>€52,000</strong>
                    </div>
                </article>

                <article className="gallery-card">
                    <img src="/images/car6.jpg" alt="Mercedes GLE" />
                    <div className="gallery-card-content">
                        <h3>Mercedes GLE</h3>
                        <p>2023 · Hybrid · Automatic</p>
                        <strong>€61,500</strong>
                    </div>
                </article>

                <article className="gallery-card">
                    <img src="/images/car7.jpg" alt="Toyota Camry" />
                    <div className="gallery-card-content">
                        <h3>Toyota Camry</h3>
                        <p>2020 · Hybrid · Automatic</p>
                        <strong>€23,500</strong>
                    </div>
                </article>

                <article className="gallery-card">
                    <img src="/images/car8.jpg" alt="Volkswagen Golf" />
                    <div className="gallery-card-content">
                        <h3>Volkswagen Golf</h3>
                        <p>2021 · Petrol · Manual</p>
                        <strong>€19,900</strong>
                    </div>
                </article>

                <article className="gallery-card">
                    <img src="/images/car9.jpg" alt="Ford Mustang" />
                    <div className="gallery-card-content">
                        <h3>Ford Mustang</h3>
                        <p>2022 · Petrol · Automatic</p>
                        <strong>€42,000</strong>
                    </div>
                </article>

            </div>

        </main>
    );
}
 
