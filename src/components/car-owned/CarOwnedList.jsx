import CarItem from "../home/CarItem.jsx";
import useOwnedCars from "../../hooks/useOwnedCars.js";

export default function CarOwnedList() {
    const { ownedCars } = useOwnedCars()
 
    return (

        <section className="gallery-page">
            <h1>Car Owned Gallery</h1>

            <div className="car-gallery">

                {ownedCars.map(car => <CarItem key={car.id} {...car} />)}

            </div>
        </section>

    );
}