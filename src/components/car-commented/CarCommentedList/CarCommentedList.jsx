import useComments from "../../../hooks/useComments.js";
import CarItem from "../../car-item/CarItem.jsx";
 

export default function CarCommentedList() {
    const { commentedCars } = useComments(); 
 
 
    return (
        <section className="gallery-page">
            <h1>Commented cars</h1>

            <div className="car-gallery">

                {commentedCars.map(car => <CarItem key={car.id} car_id={car.id} {...car} />)}

            </div>
        </section>
    );
}