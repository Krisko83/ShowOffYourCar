import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
// import request from "../../utils/request.js";
import CarAddEditItem from "../car-add-edit-item/CarAddEditItem.jsx";
import useControlledForm from "../../hooks/useControlledForm.js";
import useDecumentTitle from "../../hooks/useDocumentTitle.js";
import { carApi } from "../../api/index.js";
import { toast } from "react-toastify";


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

        carApi.getCarById(`/cars?id=eq.${car_id}`)
            .then(res => setCarData(res[0]))
            .catch((err) => {
                if (err.name !== 'AbortError') {
                    toast.error('Failed to retrive this car info! Please try again later')
                }
            })

        return () => {
            abortController.abort();
        }

    }, [car_id, setCarData]);


    async function onSubmit(car) {
        try {
            await carApi.updateCar(`/cars?id=eq.${car_id}`, car);

            toast.success('Car is edited successfully!')

            navigate(`/cars/${car_id}/details`);
        } catch {
            toast.error('Failed to edit this car. Please try again later!');
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