import CarAddEditItem from '../car-add-edit-item/CarAddEditItem.jsx';
// import useControlledCarForm from '../../hooks/useControlledCarForms.js';
import request from '../../utils/request.js';
import { useNavigate } from 'react-router';
import './CarAdd.css';
import useControlledForm from '../../hooks/useControlledForm.js';
// import useControlledAuthForms from '../../hooks/useControlledAuthForms.js';
 

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
    // const {
    //     carData,
    //     changeHandler,
    //     errors,
    //     isTouched,
    //     validationHandler,
    //     actionHandler
    // } = useControlledCarForm(submitHandler)

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
