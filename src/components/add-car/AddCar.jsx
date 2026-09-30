import './AddCar.css';
import { useNavigate } from 'react-router';


export default function AddCar() {
    const navigate = useNavigate();

    const clickSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        console.log(formData);

        const car = {
            imageUrl: formData.get('imageUrl'),
            manufacturer: formData.get('manufacturer'),
            model: formData.get('model'),
            year: formData.get('year'),
            category: formData.get('category'),
            power: formData.get('power'),
            gearbox: formData.get('gearbox'),
            fuel: formData.get('fuel'),
            mileage: formData.get('mileage'),
            cubic: formData.get('cubic'),
            driveType: formData.get('driveType'),
            description: formData.get('description')
        }

        console.log(car);

        try {
            await fetch('https://ggordfryvhhohlcicpdu.supabase.co/rest/v1/cars', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    apikey: 'sb_publishable_25uCGYdn_bFi0wGD_6vPQA_g8loF2HB'
                },
                body: JSON.stringify(car)
            })

        } catch (error) {
            console.log(error);

        } finally {

            navigate('/')
        }
    }

    return (
        <section className="new-ad">
            <h1>Show us your Car</h1>
            <form onSubmit={clickSubmitHandler}>

                <div className="ad-parts">
                    {/*<input type="file" name="filename" accept="image/gif, image/jpeg, image/png">*/}
                    <div className="ad-part">
                        <label htmlFor="imageUrl" >ImageUrl:</label>
                        <input type="text" id="imageUrl" name="imageUrl" />
                    </div>
                    <div className="ad-part">
                        <label htmlFor="manufacturer">Manufacturer:</label>
                        <input type="text" id="manufacturer" name="manufacturer" />
                    </div>
                    <div className="ad-part">
                        <label htmlFor="model">Model:</label>
                        <input type="text" id="model" name="model" />
                    </div>
                    <div className="ad-part">
                        <label htmlFor="year">Year of manufacturing:</label>
                        <input type="text" id="year" name="year" />
                    </div>
                    <div className="ad-part">
                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" />
                    </div>
                    <div className="ad-part">
                        <label htmlFor="power">Horse power:</label>
                        <input type="text" id="power" name="power" />
                    </div>
                    <div className="ad-part">
                        <label htmlFor="gearbox">Gearbox:</label>
                        <input type="text" id="gearbox" name="gearbox" />
                    </div>
                    <div className="ad-part">
                        <label htmlFor="fuel">Fuel:</label>
                        <select id="fuel" name="fuel" >
                            <option value="disel">Disel</option>
                            <option value="benzin">Benzin</option>
                            <option value="tng">Benzin + Gas (TNG)</option>
                            <option value="cng">Benzin + Metan (CNG)</option>
                            <option value="electric">Electric</option>
                            <option value="Hibrid">Hibrid</option>
                        </select>
                    </div>
                    <div className="ad-part">
                        <label htmlFor="mileage">Mileage:</label>
                        <input type="text" id="mileage" name="mileage" />
                    </div>
                    <div className="ad-part">
                        <label htmlFor="cubic">Cubic Capacity:</label>
                        <input type="text" id="cubic" name="cubic" />
                    </div>
                    <div className="ad-part">
                        <label htmlFor="driveType">Drive Type:</label>
                        <select id="driveType" name="driveType" >
                            <option value="front wheel">Front-Wheel Drive (FWD)</option>
                            <option value="rear wheel">Rear-Wheel Drive (RWD)</option>
                            <option value="all wheel">All-Wheel Drive (AWD)</option>
                            <option value="four wheel">Four-Wheel Drive (4WD)</option>
                        </select>
                    </div>
                    <div className="ad-part">
                        <label htmlFor="description">Description:</label>
                        <input type="textarea" id="description" name="description" />
                    </div>
                </div>
                <button className="submit-btn" formMethod='submit'>Add Car</button>
            </form>
        </section >


    );
}