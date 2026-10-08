import { Link } from "react-router";

export default function CarItem({
    id: carId,
    imageUrl,
    model,
    manufacturer,
    year,
    power,
    fuel,
    driveType
}) {
 
    return (

        <article className="car-card">
            <img
                src={imageUrl}
                alt={model}
            />
            <div className="car-card-content">
                <h3>{manufacturer} {model}</h3>
                <p className="car-year">{year}</p>
                <div className="car-info">
                    <span>{power} HP</span>
                    <span>{fuel}</span>
                    <span>{driveType}</span>
                </div>
                <div className="car-footer"> 
                    <Link to={`/cars/${carId}/details`}>
                        Details
                    </Link>
                </div>
            </div>
        </article>

    );
}