import { use, useState } from 'react';
import request from '../../utils/request.js';
import { useNavigate } from 'react-router';
import { validation } from '../../utils/validation.js';
import UserContext from '../../contexts/UserContext.js';
import './CarAdd.css';
import CarAddEditItem from '../car-add-edit-item/CarAddEditItem.jsx';

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

export default function CarAdd() {
    const [carData, setCarData] = useState(initialValues)
    const [isTouched, setIsTouched] = useState({})
    const [errors, setErrors] = useState({})
    const { user } = use(UserContext)
    const navigate = useNavigate();
    const owner_id = user.id;

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
            await request('/cars', 'POST', car);

            navigate('/');
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


    return (
        <CarAddEditItem validationHandler={validationHandler} changeHandler={changeHandler} errors={errors} carData={carData} isTouched={isTouched} actionHandler={actionHandler} />
    )

}
