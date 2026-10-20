// import { useState } from "react";
// import { validation } from "../../utils/validation.js";
// import { useNavigate } from "react-router";
import request from "../../utils/request.js";
import SuccessfullMessage from "./successfulMessage.jsx";
import useControlledAuthForms from "../../hooks/useControlledAuthForms.js";


const defaultValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

export default function AskQuestion({
    showMessage,
    successfulMessage
}) {
    // const [contactMessage, setContactMessage] = useState(defaultValues);
    // const [errors, setErrors] = useState({});
    // const [isTouched, setIsTouched] = useState(false);

    const {
        changeHandler,
        actionHandler,
        validationHandler,
        errors,
        isTouched,
        userData: contactMessage
    } = useControlledAuthForms(onSubmit, defaultValues, 'contact')


    async function onSubmit(data) {
        console.log(data);
        
        try {
            await request.post('/contacts', data)

            showMessage(<SuccessfullMessage />)

            setTimeout(() => {
                showMessage('')
            }, 5000)

        } catch (error) {
            alert(error)
        }
    }
    // const changeHandler = (e) => {
    //     setContactMessage(state => ({
    //         ...state,
    //         [e.target.name]: e.target.value
    //     }));


    // }

    // const actionHandler = async () => {
    //     const errors = validation.contact(contactMessage);

    //     setErrors(errors);

    //     if (Object.keys(errors).length > 0) {
    //         return setIsTouched(errors)
    //     }

    //     try {
    //         await request.post('/contacts', contactMessage)

    //         showMessage(<SuccessfullMessage />)

    //         setTimeout(() => {
    //             showMessage('')
    //         }, 5000)
    //         setContactMessage(defaultValues)
    //     } catch (error) {
    //         alert(error)
    //     }
    // }

    // const validationHandler = (e) => {
    //     setIsTouched(state => ({
    //         ...state,
    //         [e.target.name]: true
    //     }))

    //     const errors = validation.contact(contactMessage);
    //     setErrors(errors)
    // };



    const errorMessage = (field) => errors[field] && isTouched[field] ? <p className="errorMessage">{errors[field]}</p> : '';
    const inputClass = (field) => errors[field] && isTouched[field] ? "form-group-error" : "form-group";


    return (
        <>
            {
                successfulMessage
                    ?
                    successfulMessage
                    :
                    <form className="contact-form" action={actionHandler}>

                        <h2>Send us a message</h2>

                        <div className={inputClass('name')}>
                            <label htmlFor="name">
                                Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                                onBlur={validationHandler}
                                value={contactMessage.name}
                                onChange={changeHandler}
                            />
                            {errorMessage('name')}
                        </div>

                        <div className={inputClass('email')}>
                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Your email"
                                onBlur={validationHandler}
                                value={contactMessage.email}
                                onChange={changeHandler}
                            />
                            {errorMessage('email')}
                        </div>

                        <div className={inputClass('subject')}>
                            <label htmlFor="subject">
                                Subject
                            </label>

                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="What is your message about?"
                                onBlur={validationHandler}
                                value={contactMessage.subject}
                                onChange={changeHandler}
                            />
                            {errorMessage('subject')}
                        </div>

                        <div className={inputClass('message')}>
                            <label htmlFor="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Write your message..."
                                onBlur={validationHandler}
                                value={contactMessage.message}
                                onChange={changeHandler}
                            />
                            {errorMessage('message')}
                        </div>

                        <button type="submit">
                            Send Message
                        </button>

                    </form>
            }
        </>
    );
}