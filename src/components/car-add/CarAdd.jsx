import CarAddEditItem from '../car-add-edit-item/CarAddEditItem.jsx'; 
import request from '../../utils/request.js';
import { useNavigate } from 'react-router';
import useControlledForm from '../../hooks/useControlledForm.js';
import './CarAdd.css';
import useDecumentTitle from '../../hooks/useDocumentTitle.js';
import { toast } from 'react-toastify';
 

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
useDecumentTitle('Add Car');

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

            toast.success('Car is added successfuly!')
            navigate('/');

        } catch (error) {
            toast.error('Error adding car.');
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
