import { contactsApi } from "../../../api/index.js";
import useControlledForm from "../../../hooks/useControlledForm.js";
import SuccessfullMessage from "../SuccessfulMessage/SuccessfulMessage.jsx";
 

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

    const {
        data: contactMessage,
        changeHandler,
        actionHandler,
        validationHandler,
        errors,
        isTouched,
    } = useControlledForm(onSubmit, defaultValues, 'contact')


    async function onSubmit(data) {

        try {
            await contactsApi.createQuestion('/contacts', data)

            showMessage(<SuccessfullMessage />) 

        } catch (error) {
            alert(error)
        }
    }


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