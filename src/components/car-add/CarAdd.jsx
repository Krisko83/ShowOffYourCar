import CarAddEditItem from '../car-add-edit-item/CarAddEditItem.jsx';
import useControlledCarForm from '../../hooks/useControlledCarForms.js';
import request from '../../utils/request.js';
import { useNavigate } from 'react-router';
import './CarAdd.css';

export default function CarAdd() {
    const { carData, changeHandler, errors, isTouched, validationHandler, actionHandler } = useControlledCarForm(submitHandler)
    const navigate = useNavigate();

    async function submitHandler(car) {

        try {
            const res = await request.post('/cars', car);
            console.log(res);

            navigate('/');

        } catch (error) {
            alert(error);
        }

    }

    return (
        <CarAddEditItem
            validationHandler={validationHandler}
            changeHandler={changeHandler}
            errors={errors}
            carData={carData}
            isTouched={isTouched}
            actionHandler={actionHandler}
        />
    )

}
