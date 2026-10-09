import { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import request from "../../utils/request.js";
import NotFound from "../not-found/NotFound.jsx";
import { validation } from "../../utils/validation.js";
import UserContext from "../../contexts/UserContext.js";
import CarAddEditItem from "../car-add-edit-item/CarAddEditItem.jsx";

const initialValues = {
    imageUrl: '',
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

export default function CarEdit() {
    const [carData, setCarData] = useState(initialValues);
    const [isTouched, setIsTouched] = useState({})
    const [errors, setErrors] = useState({})
    const { car_id } = useParams();

    const { user } = use(UserContext)
    const owner_id = user.id;

    const navigate = useNavigate();

    useEffect(() => {
        request(`/cars?id=eq.${car_id}`)
            .then(res => setCarData(res[0]))
            .catch(() => {
                <NotFound />
            })

    }, [car_id]);

    const changeHandler = (e) => {
        setCarData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const validationHandler = (e) => {
        setIsTouched(state => ({
            ...state,
            [e.target.name]: true
        }))

        const errors = validation.addEdit(carData);

        setErrors(errors);
    };

    const actionHandler = async () => {

        const errors = validation.addEdit(carData);

        setErrors(errors)

        if (Object.keys(errors).length > 0) {
            setIsTouched(errors)
            return;
        };

        const car = {
            ...carData,
            owner_id
        }

        try {
            await request(`/cars?id=eq.${car_id}`, 'PUT', car);

            navigate(`/cars/${car_id}/details`);
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <CarAddEditItem validationHandler={validationHandler} changeHandler={changeHandler} errors={errors} carData={carData} isTouched={isTouched} actionHandler={actionHandler} edit />
    )
    
}