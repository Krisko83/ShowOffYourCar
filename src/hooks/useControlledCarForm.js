import { use, useState } from "react";
import { validation } from "../utils/validation.js";
import { useNavigate } from "react-router";
import request from "../utils/request.js";
import UserContext from "../contexts/UserContext.js";

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


export default function useControlledCarForm(method, car_id) {
    const [carData, setCarData] = useState(initialValues);
    const [isTouched, setIsTouched] = useState(false);
    const [errors, setErrors] = useState({});

    const { user } = use(UserContext)
    const owner_id = user.id;
    const navigate = useNavigate();

    let path = '/cars';
    let navigateTo = '/'

    if (method === 'PATCH') {
        path = `/cars?id=eq.${car_id}`;
        navigateTo = `/cars/${car_id}/details`;
    }


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
            await request(path, method, car);

            navigate(navigateTo);
        } catch (error) {
            console.log(error);
        }

    }

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


    return { carData, setCarData, changeHandler, validationHandler, errors, isTouched, actionHandler }
}