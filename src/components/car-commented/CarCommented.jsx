import { Link } from "react-router";
 
 
import CarCommentedItem from "./carCommentedItem.jsx";
import useComments from "../../hooks/useCommens.js";
 

export default function CarCommented() {
    const { comments } = useComments();
 

    return (

        <div className="commented-cars-panel">
            <div className="section-title">
                <span className="section-icon" aria-hidden="true">💬</span>
                <div>
                    <h2>Your Commented Cars</h2>
                    <p>Quick links to cars you've commented on.</p>
                </div>
            </div>

            {comments.length > 0 ?
                <>
                    <ul className="commented-cars-list">
                        {comments.slice(0, 3).map(comment => <CarCommentedItem car_id={comment.car_id} key={comment.id} />)}
                    </ul>
                    {comments.length > 3 &&
                        <Link to='/user/commented-cars' className="change-info-btn" >See all...</Link>
                    }
                </>
                :
                <p>You are not commented any car yet!</p>
            }
        </div >
    );
}