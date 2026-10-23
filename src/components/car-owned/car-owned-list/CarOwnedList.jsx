 
import useOwnedCars from "../../../hooks/useOwnedCars.js";
import CarItem from "../../car-item/CarItem.jsx";
import styles from './CarOwnedList.module.css'

export default function CarOwnedList() {
    const { ownedCars } = useOwnedCars()
 
    return (

        <section className={styles["gallery-page"]}>
            <h1>Car Owned Gallery</h1>

            <div className={styles["car-gallery"]}>

                {ownedCars.map(car => <CarItem key={car.id} {...car} />)}

            </div>
        </section>

    );
}