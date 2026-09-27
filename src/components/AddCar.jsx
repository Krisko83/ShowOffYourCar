import './AddCar.css';

export default function AddCar() {

    return (
        <section className="new-ad">
            <h1>Show us your Car</h1>
            <div className="ad-parts">
                {/*<input type="file" name="filename" accept="image/gif, image/jpeg, image/png">*/}
                <div className="ad-part">
                    <label htmlFor="imageUrl">ImageUrl:</label>
                    <input type="text" id="imageUrl" />
                </div>
                <div className="ad-part">
                    <label htmlFor="manufacturer">Manufacturer:</label>
                    <input type="text" id="manufacturer" />
                </div>
                <div className="ad-part">
                    <label htmlFor="model">Model:</label>
                    <input type="text" id="model" />
                </div>
                <div className="ad-part">
                    <label htmlFor="year">Year of manufacturing:</label>
                    <input type="text" id="year" />
                </div>
                <div className="ad-part">
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" />
                </div>
                <div className="ad-part">
                    <label htmlFor="power">Horse power:</label>
                    <input type="text" id="power" />
                </div>
                <div className="ad-part">
                    <label htmlFor="gearbox">Gearbox:</label>
                    <input type="text" id="gearbox" />
                </div>
                <div className="ad-part">
                    <label htmlFor="fuel">Fuel:</label>
                    <select id="fuel">
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
                    <input type="text" id="mileage" />
                </div>
                <div className="ad-part">
                    <label htmlFor="cubic">Cubic Capacity:</label>
                    <input type="text" id="cubic" />
                </div>
                <div className="ad-part">
                    <label htmlFor="driveType">Drive Type:</label>
                    <select id="driveType">
                        <option value="front wheel">Front-Wheel Drive (FWD)</option>
                        <option value="rear wheel">Rear-Wheel Drive (RWD)</option>
                        <option value="all wheel">All-Wheel Drive (AWD)</option>
                        <option value="four wheel">Four-Wheel Drive (4WD)</option>
                    </select>
                </div>
            </div>
            <button className="submit-btn">Add Car</button>
        </section >


    );
}