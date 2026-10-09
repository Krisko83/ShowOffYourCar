import { use, useState } from 'react';
import request from '../../utils/request.js';
import './AddCar.css';
import { useNavigate } from 'react-router';
import { validation } from '../../utils/validation.js';
import UserContext from '../../contexts/UserContext.js';

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

export default function AddCar() {
    const [carData, setCarData] = useState(initialValues)
    const [isTouched, setIsTouched] = useState({})
    const [errors, setErrors] = useState({})
    const { user } = use(UserContext)
    const navigate = useNavigate();
    const owner_id = user.id;
 
    const actionHandler = async () => {

        const errors = validation.addEdit(carData);

        setErrors(errors)

        if (Object.keys(errors).length > 0) {
            setIsTouched(errors)
            return;
        };
 
        const car = {
            ...carData,
            owner_id
        }

        try {
            await request('/cars', 'POST', car);

            navigate('/');
        } catch (error) {
            console.log(error);
        }

    }

    const changeHandler = (e) => {
        setCarData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const validationHandler = (e) => {
        setIsTouched(state => ({
            ...state,
            [e.target.name]: true
        }))

        const errors = validation.addEdit(carData);

        setErrors(errors);
    };

    const errorMessage = (field) => errors[field] && isTouched[field] ? <p className="errorMessage">{errors[field]}</p> : '';
    const inputClass = (field) => errors[field] && isTouched[field] ? "form-group-error" : "form-group";


    return (
        <form className="car-form" action={actionHandler}>

            <h2>Add Car</h2>

            <div className="form-grid">

                <div className={inputClass("imageUrl")}>
                    <label htmlFor="imageUrl">Image URL</label>
                    <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="https://example.com/car.jpg"
                        onBlur={validationHandler}
                        value={carData.imageUrl}
                        onChange={changeHandler}
                    />
                    {errorMessage('imageUrl')}
                </div>

                <div className={inputClass("manufacturer")}>
                    <label htmlFor="manufacturer">Manufacturer</label>
                    <input
                        type="text"
                        id="manufacturer"
                        name="manufacturer"
                        placeholder="e.g. BMW"
                        onBlur={validationHandler}
                        value={carData.manufacturer}
                        onChange={changeHandler}
                    />
                    {errorMessage('manufacturer')}

                </div>

                <div className={inputClass("model")}>
                    <label htmlFor="model">Model</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        placeholder="e.g. 320d"
                        onBlur={validationHandler}
                        value={carData.model}
                        onChange={changeHandler}
                    />
                    {errorMessage('model')}

                </div>

                <div className={inputClass("year")}>
                    <label htmlFor="year">Year</label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        placeholder="e.g. 2020"
                        onBlur={validationHandler}
                        value={carData.year}
                        onChange={changeHandler}
                    />
                    {errorMessage('year')}

                </div>

                <div className={inputClass("category")}>
                    <label htmlFor="category">Category</label>
                    <select id="category" name="category" value={carData.category} onChange={changeHandler} onBlur={validationHandler} >
                        <option value="">Select category</option>
                        <option value="sedan">Sedan</option>
                        <option value="hatchback">Hatchback</option>
                        <option value="wagon">Wagon</option>
                        <option value="coupe">Coupe</option>
                        <option value="convertible">Convertible</option>
                        <option value="suv">SUV</option>
                        <option value="van">Van</option>
                        <option value="pickup">Pickup</option>
                    </select>
                    {errorMessage('category')}
                </div>

                <div className={inputClass("power")}>
                    <label htmlFor="power">Power (HP)</label>
                    <input
                        type="number"
                        id="power"
                        name="power"
                        placeholder="e.g. 190"
                        onBlur={validationHandler}
                        value={carData.power}
                        onChange={changeHandler}
                    />
                    {errorMessage('power')}
                </div>

                <div className={inputClass("gearbox")}>
                    <label htmlFor="gearbox">Gearbox</label>
                    <select id="gearbox" name="gearbox" value={carData.gearbox} onChange={changeHandler} onBlur={validationHandler} >
                        <option value="">Select gearbox</option>
                        <option value="manual">Manual</option>
                        <option value="automatic">Automatic</option>
                    </select>
                    {errorMessage('gearbox')}
                </div>

                <div className={inputClass("fuel")}>
                    <label htmlFor="fuel">Fuel</label>
                    <select id="fuel" name="fuel" value={carData.fuel} onChange={changeHandler} onBlur={validationHandler} >
                        <option value="">Select fuel</option>
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="electric">Electric</option>
                        <option value="lpg">LPG</option>
                    </select>
                    {errorMessage('fuel')}
                </div>

                <div className={inputClass("mileage")}>
                    <label htmlFor="mileage">Mileage (km)</label>
                    <input
                        type="number"
                        id="mileage"
                        name="mileage"
                        placeholder="e.g. 125000"
                        onBlur={validationHandler}
                        value={carData.mileage}
                        onChange={changeHandler}
                    />
                    {errorMessage('mileage')}
                </div>

                <div className={inputClass("cubic")}>
                    <label htmlFor="cubic">Engine (cm³)</label>
                    <input
                        type="number"
                        id="cubic"
                        name="cubic"
                        placeholder="500"
                        onBlur={validationHandler}
                        value={carData.cubic}
                        onChange={changeHandler}
                    />
                    {errorMessage('cubic')}
                </div>

                <div className={inputClass("driveType")}>
                    <label htmlFor="driveType">Drive Type</label>
                    <select id="driveType" name="driveType" value={carData.driveType} onChange={changeHandler} onBlur={validationHandler} >
                        <option value="">Select drive type</option>
                        <option value="fwd">Front-Wheel Drive</option>
                        <option value="rwd">Rear-Wheel Drive</option>
                        <option value="awd">All-Wheel Drive</option>
                        <option value="4wd">4-Wheel Drive</option>
                    </select>
                    {errorMessage('driveType')}
                </div>
            </div>

            <div className={errors['description'] && isTouched['description'] ? 'form-group-error description-group' : 'form-group description-group'}>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows="6"
                    placeholder="Describe the car..."
                    onBlur={validationHandler}
                    value={carData.description}
                    onChange={changeHandler}
                />
                {errorMessage('description')}
            </div>

            <button type="submit" className="submit-button">
                Add Car
            </button>

        </form>
    );

}
