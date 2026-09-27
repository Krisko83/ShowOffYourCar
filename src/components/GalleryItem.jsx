import { Link } from "react-router";

export default function GalleryItem({
    car
}) {

    return (
        <div className="tm-item-container">
            <img src={car.imageUrl} alt="Image" />
            <div className="tm-item-price-container tm-gallery-item-info">
                <span className="tm-item-price">{car.model}</span>
                <Link to="/details" className="tm-item-link">
                    <span className="tm-item-action">View More</span>
                    <img src="img/plus.png" className="tm-item-add-icon" alt="Image" />
                </Link>
            </div>
        </div>
    );
}