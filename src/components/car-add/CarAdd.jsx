import './CarAdd.css';
import CarAddEditItem from '../car-add-edit-item/CarAddEditItem.jsx';
import useControlledCarForm from '../../hooks/useControlledCarForm.js';

export default function CarAdd() {


    const { carData, changeHandler, errors, isTouched, actionHandler, validationHandler } = useControlledCarForm('POST')


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
