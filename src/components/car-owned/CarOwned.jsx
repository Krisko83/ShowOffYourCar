import CarItem from "../home/CarItem.jsx";
import { Link } from "react-router";
import useOwnedCars from "../../hooks/useOwnedCars.js";
import styles from "./CarOwned.module.css"

export default function CarOwned() {

    const { ownedCars } = useOwnedCars()


    return (
        <section className={styles["featured"]}>
            <div className="section-title">
                <span className="car-placeholder" aria-hidden="true">🚘</span>
                <div className="commented-cars-panel">
                    <h2>Your Owned Cars</h2>
                </div>
            </div>

            <div className={styles[ownedCars.length > 0 ? "car-cards" : 'car-cards-no-content']}>
                {ownedCars.length > 0
                    ?
                    ownedCars.slice(0, 3).map(car => <CarItem key={car.id} {...car} />)
                    :
                    <>

                        <p>You don't have any cars!</p>

                        <div className={styles["change-info-btn-cont"]}>
                            <Link to='/cars/add-car' className={styles["change-info-btn"]} >Add your Car!</Link>
                        </div>
                    </>
                }

                <div className={styles["change-info-btn-cont"]}>
                    {ownedCars.length > 3
                        &&
                        <Link to='/user/owned-cars' className={styles["change-info-btn"]} >See all ...</Link>
                    }
                </div>
            </div>
        </section>
    );
}