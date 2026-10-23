import { Link } from "react-router"

export default function CarCommentedItem({
    car_id,
    title
}) { 
        
    return (
        <li>
             <Link to={`/cars/${car_id}/details`} className="commented-car-link" >
                <span className="car-placeholder" aria-hidden="true">🚘</span>
                <span className="commented-car-info">
                    <strong>{title}</strong>
                    <small>View your comments</small>
                </span>
                <span className="car-arrow" aria-hidden="true">›</span>
            </Link>
        </li>
    );
}