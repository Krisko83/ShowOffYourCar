import { useNavigate } from 'react-router';
import useControlledForm from '../../hooks/useControlledForm.js';
import CarAddEditItem from '../car-add-edit-item/CarAddEditItem.jsx';  
import useDecumentTitle from '../../hooks/useDocumentTitle.js';
import { toast } from 'react-toastify';
import { carApi } from '../../api/index.js';
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
            await carApi.createCar('/cars', car);

            toast.success('Car is added successfuly!')
            navigate('/');

        } catch {
            toast.error('Error adding car. Please try again later.');
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
