import { useState } from "react";
import { validation } from "../utils/validation.js"; 

const visibilityInitials = {
    password: false,
    repeatPassword: false
}


export default function useControlledForm(onSubmit, initialValues, validationType) {
    const [data, setData] = useState(initialValues);
    const [isPasswordsVisible, setIsPasswordsVisible] = useState(visibilityInitials)
    const [errors, setErrors] = useState({});
    const [isTouched, setIsTouched] = useState({})


    const actionHandler = async () => {

        const errors = validation[validationType](data)
        setErrors(errors)

        if (Object.keys(errors).length > 0) {
            setIsTouched(errors)
            return
        }

        onSubmit(data)
    };


    const changeHandler = (e) => {

        setData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };


    const showHidePassHandler = (field) => {

        setIsPasswordsVisible(state => ({
            ...state,
            [field]: isPasswordsVisible[field] ? false : true
        }))
    };

    const validationHandler = (e) => {

        setIsTouched(state => ({
            ...state,
            [e.target.name]: true
        }))

        const errors = validation[validationType](data);

        setErrors(errors);
    }

    return { data, setData, isPasswordsVisible, errors, isTouched, showHidePassHandler, changeHandler, validationHandler, actionHandler }
}