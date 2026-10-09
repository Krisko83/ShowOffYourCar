import { useEffect } from "react";
import { useParams } from "react-router";
import request from "../../utils/request.js";
import NotFound from "../not-found/NotFound.jsx";
import CarAddEditItem from "../car-add-edit-item/CarAddEditItem.jsx";
import useControlledCarForm from "../../hooks/useControlledCarForm.js";


export default function CarEdit() {

    const { car_id } = useParams();

    const { carData, setCarData, changeHandler, errors, isTouched, actionHandler, validationHandler } = useControlledCarForm('PATCH', car_id)


    useEffect(() => {
        request(`/cars?id=eq.${car_id}`)
            .then(res => setCarData(res[0]))
            .catch(() => {
                <NotFound />
            })

    }, [car_id, setCarData]);


    return (
        <CarAddEditItem
            validationHandler={validationHandler}
            changeHandler={changeHandler}
            errors={errors}
            carData={carData}
            isTouched={isTouched}
            actionHandler={actionHandler} edit
        />
    )

}