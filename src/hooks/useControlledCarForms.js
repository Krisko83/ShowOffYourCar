import { useState } from "react";
import { validation } from "../utils/validation.js";


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


export default function useControlledCarForm(onSubmit) {
    const [carData, setCarData] = useState(initialValues);
    const [isTouched, setIsTouched] = useState(false);
    const [errors, setErrors] = useState({});


    const actionHandler = () => {
        const validationErrors = validation.addEdit(carData);

        setErrors(validationErrors)

        if (Object.keys(errors).length > 0) {
            setIsTouched(errors)
            return;
        };


        onSubmit(carData);
    };

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


    return { carData, setCarData, changeHandler, validationHandler, errors, isTouched, actionHandler, initialValues }
}