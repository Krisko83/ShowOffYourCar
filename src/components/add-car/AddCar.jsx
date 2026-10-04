import request from '../../utils/request.js';
import './AddCar.css';
import { useNavigate } from 'react-router';


export default function AddCar() {
    const navigate = useNavigate();

    // const clickSubmitHandler = async (e) => {
    //     e.preventDefault();
    //     const owner_id = '454545'
    //     const formData = new FormData(e.target);

    //     const car = {
    //         imageUrl,
    //         manufacturer,
    //         model,
    //         year,
    //         category,
    //         power,
    //         gearbox,
    //         fuel,
    //         mileage,
    //         cubic,
    //         driveType,
    //         description,
    //         owner_id
    //     }

    // try {
    //     await request('/cars', 'POST', car);

    //     navigate('/');
    // } catch (error) {   
    //     console.log(error);
    // }

    // }

    return (
        <form className="car-form">

            <h2>Add Car</h2>

            <div className="form-grid">

                <div className="form-group">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="https://example.com/car.jpg"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="manufacturer">Manufacturer</label>
                    <input
                        type="text"
                        id="manufacturer"
                        name="manufacturer"
                        placeholder="e.g. BMW"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="model">Model</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        placeholder="e.g. 320d"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        placeholder="e.g. 2020"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select id="category" name="category">
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
                </div>

                <div className="form-group">
                    <label htmlFor="power">Power (HP)</label>
                    <input
                        type="number"
                        id="power"
                        name="power"
                        placeholder="e.g. 190"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="gearbox">Gearbox</label>
                    <select id="gearbox" name="gearbox">
                        <option value="">Select gearbox</option>
                        <option value="manual">Manual</option>
                        <option value="automatic">Automatic</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="fuel">Fuel</label>
                    <select id="fuel" name="fuel">
                        <option value="">Select fuel</option>
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="electric">Electric</option>
                        <option value="lpg">LPG</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="mileage">Mileage (km)</label>
                    <input
                        type="number"
                        id="mileage"
                        name="mileage"
                        placeholder="e.g. 125000"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cubic">Engine (cm³)</label>
                    <input
                        type="number"
                        id="cubic"
                        name="cubic"
                        placeholder="e.g. 1995"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="driveType">Drive Type</label>
                    <select id="driveType" name="driveType">
                        <option value="">Select drive type</option>
                        <option value="fwd">Front-Wheel Drive</option>
                        <option value="rwd">Rear-Wheel Drive</option>
                        <option value="awd">All-Wheel Drive</option>
                        <option value="4wd">4-Wheel Drive</option>
                    </select>
                </div>

            </div>

            <div className="form-group description-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows="6"
                    placeholder="Describe the car..."
                />
            </div>

            <button type="submit" className="submit-button">
                Add Car
            </button>

        </form>
    );

}
