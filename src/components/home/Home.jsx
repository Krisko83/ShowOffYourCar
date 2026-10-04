import { useEffect, useState } from "react";
import HomeItem from "./HomeItem.jsx";
import request from "../../utils/request.js";

// export default function Home() {
//     const [cars, setCars] = useState([]);

//     useEffect(() => {
//         const abortController = new AbortController();

//         request('/cars?order=createdAt.desc&limit=3', 'GET', null, { signal: abortController.signal })
//             .then(setCars)
//             .catch(err => console.log(err));             

//         return () => {
//             abortController.abort('Unmounted element');
//         }
//     }, [])

//     const lastThreeCars = cars.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 3);

//     return (

//         <section className="container margin-bottom-50">
//             <div className="about-container-2">
//                 {lastThreeCars.map(car => <HomeItem key={car.id} car={car} />)}
//             </div>
//         </section >

//     );
// }

 
import './Home.css';

export default function Home() {
    return (
        <main className="home">

            <section className="hero">
                <h1>Find Your Perfect Car</h1>
                <p>
                    Explore our collection of quality cars and find
                    the one that fits you.
                </p>

                <button className="hero-button">
                    Explore Cars
                </button>
            </section>

            <section className="featured">
                <h2>Featured Cars</h2>

                <div className="car-cards">

                    <article className="car-card">
                        <img
                            src="https://images.unsplash.com/photo-1555215695-3004980ad54e"
                            alt="BMW 3 Series"
                        />

                        <div className="car-card-content">
                            <h3>BMW 320d</h3>

                            <p className="car-year">2021</p>

                            <div className="car-info">
                                <span>190 HP</span>
                                <span>Diesel</span>
                                <span>Automatic</span>
                            </div>

                            <div className="car-footer">
                                <strong>€28,500</strong>

                                <button>
                                    Details
                                </button>
                            </div>
                        </div>
                    </article>

                    <article className="car-card">
                        <img
                            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2"
                            alt="Mercedes C-Class"
                        />

                        <div className="car-card-content">
                            <h3>Mercedes C-Class</h3>

                            <p className="car-year">2022</p>

                            <div className="car-info">
                                <span>204 HP</span>
                                <span>Petrol</span>
                                <span>Automatic</span>
                            </div>

                            <div className="car-footer">
                                <strong>€35,900</strong>

                                <button>
                                    Details
                                </button>
                            </div>
                        </div>
                    </article>

                    <article className="car-card">
                        <img
                            src="https://images.unsplash.com/photo-1553440569-bcc63803a83d"
                            alt="Audi A4"
                        />

                        <div className="car-card-content">
                            <h3>Audi A4</h3>

                            <p className="car-year">2020</p>

                            <div className="car-info">
                                <span>190 HP</span>
                                <span>Diesel</span>
                                <span>Automatic</span>
                            </div>

                            <div className="car-footer">
                                <strong>€25,900</strong>

                                <button>
                                    Details
                                </button>
                            </div>
                        </div>
                    </article>

                </div>
            </section>

        </main>
    );
}
 
