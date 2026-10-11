import { Link } from "react-router";
import styles from './CarItem.module.css';

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
                    <span>{driveType}</span>
                </div>
                <div className={styles["car-footer"]} > 
                    <Link to={`/cars/${car_id}/details`}>
                        Details
                    </Link>
                </div>
            </div>
        </article>

    );
}