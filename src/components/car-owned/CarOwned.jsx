import CarItem from "../home/CarItem.jsx";
import { Link } from "react-router";
import useOwnedCars from "../../hooks/useOwnedCars.js";
import styles from "./CarOwned.module.css"
 
export default function CarOwned() {

    const { ownedCars } = useOwnedCars()


    return (
        <section className={styles["featured"]}>
            <h2>Owned Cars</h2>

            <div className={styles["car-cards"]}>
                {ownedCars.length > 0
                    ?
                    ownedCars.slice(0, 3).map(car => <CarItem key={car.id} {...car} />)
                    :
                    <div>                   
                            <p>You don not have any cars!</p>
                            <Link to='/cars/add-car' className={styles["change-info-btn"]} >Add your Car!</Link>                         
                    </div>
                }


            </div>
            {ownedCars.length > 3
                &&
                <Link to='/user/owned-cars' className={styles["change-info-btn"]} >See all...</Link>
            }
        </section>
    );
}