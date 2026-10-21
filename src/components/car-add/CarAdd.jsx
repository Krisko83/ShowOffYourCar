import CarAddEditItem from '../car-add-edit-item/CarAddEditItem.jsx'; 
import request from '../../utils/request.js';
import { useNavigate } from 'react-router';
import useControlledForm from '../../hooks/useControlledForm.js';
import './CarAdd.css';
 

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

    const {
        data: carData,
        changeHandler,
        errors,
        isTouched,
        validationHandler,
        actionHandler
    } = useControlledForm(submitHandler, initialValues, 'addEdit')

    const navigate = useNavigate();

    async function submitHandler(car) {

        try {
            await request.post('/cars', car);

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
