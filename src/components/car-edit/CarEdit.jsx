import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import request from "../../utils/request.js";
import NotFound from "../not-found/NotFound.jsx";
import CarAddEditItem from "../car-add-edit-item/CarAddEditItem.jsx";
import useControlledCarForm from "../../hooks/useControlledCarForms.js";


export default function CarEdit() {
    const { car_id } = useParams();
    const navigate = useNavigate();
    const {
        carData,
        setCarData,
        changeHandler,
        errors,
        isTouched,
        actionHandler,
        validationHandler
    } = useControlledCarForm(onSubmit);


    useEffect(() => {
        request.getById(`/cars?id=eq.${car_id}`)
            .then(res => setCarData(res[0]))
            .catch(() => {
                <NotFound />
            })

    }, [car_id, setCarData]);


    async function onSubmit(car) {
        try {
            request.update(`/cars?id=eq.${car_id}`, car);

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
            actionHandler={actionHandler} edit
        />
    )

}