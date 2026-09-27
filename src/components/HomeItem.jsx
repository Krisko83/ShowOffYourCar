import { Link } from "react-router";

export default function HomeItem({
    car
}) {

    return (

        <div className="services-container-inner">
            <h3 className="about-title-2">{car.model}</h3>
            <img
                src={car.imageUrl}
                alt="Image"
                className="img-responsive margin-bottom-15"
            />
            <p className="about-description">
                {car.description}
            </p>
            <Link to="" className="about-link about-link-2">
                Details
            </Link>
        </div>

    );
}