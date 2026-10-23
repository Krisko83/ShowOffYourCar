import { Link } from "react-router";
import styles from './CarItem.module.css';
import extractCorrectOpions from "../../utils/carSpecsUtils.js";

export default function CarItem({
    id: car_id,
    imageUrl,
    model,
    manufacturer,
    year,
    power,
    fuel,
    driveType
}) {

    return (
        <Link to={`/cars/${car_id}/details`} className={styles["car-link"]} >
            <article className={styles["car-card"]}>
                <img
                    src={imageUrl}
                    alt={model}
                />
                <div className={styles["car-card-content"]}>
                    <h3>{manufacturer} {model}</h3>
                    <p className={styles["car-year"]} >{year}</p>
                    <div className={styles["car-info"]} >
                        <span>{power} HP</span>
                        <span>{fuel}</span>
                        <span>{extractCorrectOpions(driveType)}</span>
                    </div>
                </div>
            </article>
        </Link >

    );
}