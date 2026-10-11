 
import useComments from "../../hooks/useCommens.js";
import CarItem from "../home/CarItem.jsx";

export default function CarCommentedList() {
    const { comments } = useComments();

    const carIds = comments.map(comment => comment.car_id)
    console.log(carIds);
    
    return (
        <section className="gallery-page">
            <h1>Commented cars</h1>

            <div className="car-gallery">

                {carIds.map(car => <CarItem key={car.id} car_id={car.id} />)}

            </div>
        </section>
    );
}