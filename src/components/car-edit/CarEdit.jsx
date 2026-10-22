import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import request from "../../utils/request.js";
 import CarAddEditItem from "../car-add-edit-item/CarAddEditItem.jsx";
import useControlledForm from "../../hooks/useControlledForm.js";
import useDecumentTitle from "../../hooks/useDocumentTitle.js";


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
    useDecumentTitle('Edit Car')
    const { car_id } = useParams();
    const navigate = useNavigate();

    const {
        data: carData,
        setData: setCarData,
        changeHandler,
        errors,
        isTouched,
        actionHandler,
        validationHandler
    } = useControlledForm(onSubmit, initialValues, 'addEdit');

    useEffect(() => {
        const abortController = new AbortController()

        request.getById(`/cars?id=eq.${car_id}`)
            .then(res => setCarData(res[0]))
            .catch((err) => console.log(err))

        return () => {
            abortController.abort();
        }

    }, [car_id, setCarData]);


    async function onSubmit(car) {
        try {
            await request.update(`/cars?id=eq.${car_id}`, car);

            navigate(`/cars/${car_id}/details`);
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
            edit
        />
    )

}