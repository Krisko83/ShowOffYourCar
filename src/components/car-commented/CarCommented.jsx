import { Link } from "react-router";
 
import useComments from "../../hooks/useComments.js";
import CarCommentedItem from "./CarCommentedItem/CarCommentedItem.jsx";
import useDecumentTitle from "../../hooks/useDocumentTitle.js";


export default function CarCommented() {
    useDecumentTitle('Commented Cars');

    const { commentedCars } = useComments();
 
    return (
        <div className="commented-cars-panel">
            <div className="section-title">
                <span className="section-icon" aria-hidden="true">💬</span>
                <div>
                    <h2>Your Commented Cars</h2>
                    <p>Quick links to cars you've commented on.</p>
                </div>
            </div>

            {commentedCars.length > 0 ?
                <>
                    <ul className="commented-cars-list">
                        {commentedCars.slice(0, 3).map(car => <CarCommentedItem car_id={car.id} key={car.id} title={`${car.manufacturer}${car.model}`} />)}
                    </ul>
                    {commentedCars.length > 3 &&
                        <div>

                            <Link to='/user/commented-cars' className="change-info-btn" >See all ...</Link>
                        </div>
                    }
                </>
                :
                <p>You are not commented any car yet!</p>
            }
        </div >
    );
}