import { useState } from "react";
import { validation } from "../utils/validation.js";
import getUserData from "../utils/userUtils.js";

const visibilityInitials = {
    password: false,
    repeatPassword: false
}


export default function useControlledAuthForms(onSubmit, initialValues, validationType) {
    const [userData, setUserData] = useState(initialValues);
    const [isPasswordsVisible, setIsPasswordsVisible] = useState(visibilityInitials)
    const [errors, setErrors] = useState({});
    const [isTouched, setIsTouched] = useState({})


    const actionHandler = async () => {

        const errors = validation[validationType](userData)
        setErrors(errors)

        if (Object.keys(errors).length > 0) {
            setIsTouched(errors)
            return
        }

        const userFormData = {
            password: userData.password,
            ...getUserData(userData)
        }

        onSubmit(userFormData)
    };


    const changeHandler = (e) => {

        setUserData(state => ({
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

        const errors = validation.register(userData);

        setErrors(errors);
    }

    return { userData, isPasswordsVisible, errors, isTouched, showHidePassHandler, changeHandler, validationHandler, actionHandler }
}