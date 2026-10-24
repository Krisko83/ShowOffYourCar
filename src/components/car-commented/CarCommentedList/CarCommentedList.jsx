import useComments from "../../../hooks/useComments.js";
import useDecumentTitle from "../../../hooks/useDocumentTitle.js";
import CarItem from "../../car-item/CarItem.jsx";


export default function CarCommentedList() {
    useDecumentTitle('Commented Cars');
    const { commentedCars } = useComments();


    return (
        <section className="gallery-page">
            <h1>Commented Cars Gallery</h1>

            <div className="car-gallery">

                {commentedCars.map(car => <CarItem key={car.id} car_id={car.id} {...car} />)}

            </div>
        </section>
    );
}