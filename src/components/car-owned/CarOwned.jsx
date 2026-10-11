import CarItem from "../home/CarItem.jsx";
import { Link } from "react-router";
import useOwnedCars from "../../hooks/useOwnedCars.js";

export default function CarOwned() {

    const  {ownedCars} = useOwnedCars()
 
    
    return (
        <section className="featured">
            <h2>Owned Cars</h2>

            <div className="car-cards">
                {ownedCars.length > 0
                    ?
                    ownedCars.slice(0, 3).map(car => <CarItem key={car.id} {...car} />)
                    :
                    <>
                        <p>You don not have any cars!</p>
                        <>
                            <p>You don not have any cars!</p>
                            <Link to='/cars/add-cars' className="change-info-btn" >Add you Car!</Link>
                        </>
                    </>
                }

                {ownedCars.length > 3
                    &&
                    <Link to='/user/owned-cars' className="change-info-btn" >See all...</Link>
                }

            </div>
        </section>
    );
}