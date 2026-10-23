import { Link, useNavigate, useParams } from 'react-router';
import { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import request from '../../utils/request.js'; 
import AddComment from '../comments/AddComment.jsx';
import Comments from '../comments/Comments.jsx';
import UserContext from '../../contexts/UserContext.js';
import LikeCar from '../likes/LikeCar.jsx';
import extractCorrectOpions from '../../utils/carSpecsUtils.js';
import useDecumentTitle from '../../hooks/useDocumentTitle.js';
import './CarDetails.css';
import { carApi, likesApi } from '../../api/index.js';

const initialValues = {
    id: '',
    imageUrl: null,
    manufacturer: '',
    model: '',
    year: '',
    category: '',
    power: '',
    gearbox: '',
    fuel: '',
    mileage: '',
    cubic: '',
    driveType: '',
    description: '',
}

export default function CarDetails() {
    useDecumentTitle('Car Details');
    
    const { userData } = use(UserContext);
    const [car, setCar] = useState(initialValues);
    const [likes, setLikes] = useState([]);
    const [commentsData, setCommentsData] = useState('');
    const [liked, setLiked] = useState(false);

    const { car_id } = useParams();
    const navigate = useNavigate();
    const user_id = userData?.user.id;
    const carOwner_id = car?.user_id;
 
    
    useEffect(() => {
        const abortController = new AbortController()


        carApi.getCarById(`/cars?id=eq.${car_id}`, { signal: abortController.signal })
            .then(res => setCar(res[0]))
            .catch((err) => console.log(err))

        likesApi.getAllLikes(`/likes?car_id=eq.${car_id}`, { signal: abortController.signal })
            .then(result => setLikes(result))
            .catch((err) => console.log(err))


        return () => {
            abortController.abort();
        }

    }, [car_id, liked]);


    const deleteHandler = async () => {
        const confirmed = confirm('Are you sure you want to delete this car?')

        if (!confirmed) {
            return
        }

        try {
            await carApi.removeCar(`/cars?id=eq.${car_id}`);

            toast.success('Car is removed successfully!')

            navigate('/');
        } catch (error) {
            toast.error('Error removing this car!')
        }

    }


    const setComments = (input) => {
        let value = input;

        if (typeof input === 'function') {
            value = input(commentsData)
        }
        setCommentsData(value);
    }

    const likeUnlikeCar = (inputValue) => {
        setLiked(inputValue)
    }


    return (
        <main className="details-page">

            <section className="car-details">

                <div className="car-details-image">
                    <img
                        src={car.imageUrl}
                        alt={`${car.manufacturer} ${car.model}`}
                    />
                </div>

                <div className="car-details-info">

                    <div className="details-header">
                        <div>
                            <h1>{car.manufacturer} {car.model}</h1>
                            <p>{car.year}</p>
                        </div>

                    </div>

                    <div className="specifications">

                        <div className="specification">
                            <span>Manufacturer</span>
                            <strong>{car.manufacturer}</strong>
                        </div>

                        <div className="specification">
                            <span>Model</span>
                            <strong>{car.model}</strong>
                        </div>

                        <div className="specification">
                            <span>Year</span>
                            <strong>{car.year}</strong>
                        </div>

                        <div className="specification">
                            <span>Category</span>
                            <strong>{extractCorrectOpions(car.category)}</strong>
                        </div>

                        <div className="specification">
                            <span>Power</span>
                            <strong>{car.power} HP</strong>
                        </div>

                        <div className="specification">
                            <span>Gearbox</span>
                            <strong>{extractCorrectOpions(car.gearbox)}</strong>
                        </div>

                        <div className="specification">
                            <span>Fuel</span>
                            <strong>{extractCorrectOpions(car.fuel)}</strong>
                        </div>

                        <div className="specification">
                            <span>Mileage</span>
                            <strong>{car.mileage} km</strong>
                        </div>

                        <div className="specification">
                            <span>Engine</span>
                            <strong>{car.cubic} cm³</strong>
                        </div>

                        <div className="specification">
                            <span>Drive Type</span>
                            <strong>{extractCorrectOpions(car.driveType)}</strong>
                        </div>

                    </div>

                </div>
            </section>

            <section className="description-section likes" >
                <div className="reaction-buttons">
                    <p className="reaction-button">Likes: {likes.length}</p>
                </div>
            </section>

            <section className="description-section">

                <h2>Description</h2>

                <p>{car.description}</p>

            </section>


            <section className="car-actions">
                {
                    userData && user_id === car.user_id
                        ?
                        <>
                            <Link to={`/cars/${car_id}/edit`} className="action-button edit-button">
                                Edit
                            </Link>

                            <button onClick={deleteHandler} className="action-button delete-button">
                                Delete
                            </button>
                        </>
                        :
                        userData &&
                        <LikeCar user_id={user_id} car_id={car_id} onLikeUnlike={likeUnlikeCar} liked={liked} />
                }

            </section>


            <section className="comments-section">

                <h2>Comments</h2>

                {userData && <AddComment car_id={car_id} user_id={user_id} onCreate={setComments} title={`${car.manufacturer}${car.model}`} commentData={commentsData} />}

                <Comments car_id={car_id} carOwner_id={carOwner_id} onCreate={commentsData} />

            </section>

        </main>
    );
}

