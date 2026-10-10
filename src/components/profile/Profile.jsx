import './Profile.css';

export default function Profile() {
    return (
        <main className="profile-page">
            <header className="profile-heading">
                <div className="profile-heading-icon" aria-hidden="true">👤</div>
                <div>
                    <h1>My Profile</h1>
                    <p>Manage your personal information and keep your profile up to date.</p>
                </div>
            </header>


            <section className="personal-details-card">
                <div className="personal-details-header">
                    <div>
                        <h2>Personal Information</h2>
                        <p>Your profile details</p>
                    </div>
{/* 
                    <button
                        type="button"
                        className="change-info-btn"
                        // onClick={onEdit}
                    >
                        ✎ Change Personal Info
                    </button> */}
                </div>

                <div className="personal-details-content">
                    <div className="personal-detail">
                        <span>Full Name</span>
                        {/* <p>{user.fullName}</p> */}
                    </div>

                    <div className="personal-detail">
                        <span>Username</span>
                        {/* <p>{user.username}</p> */}
                    </div>

                    <div className="personal-detail">
                        <span>Email</span>
                        {/* <p>{user.email}</p> */}
                    </div>

                    <div className="personal-detail">
                        <span>Age</span>
                        {/* <p>{user.age || 'Not provided'}</p> */}
                    </div>

                    <div className="personal-detail">
                        <span>Country</span>
                        {/* <p>{user.country || 'Not provided'}</p> */}
                    </div>

                    <div className="personal-detail">
                        <span>City</span>
                        {/* <p>{user.city || 'Not provided'}</p> */}
                    </div>

                    <div className="personal-detail">
                        <span>Gender</span>
                        {/* <p>{user.gender || 'Not provided'}</p> */}
                    </div>
                </div>
            </section>



            <form className="profile-card">
                <aside className="profile-picture-panel">
                    <div className="profile-avatar" aria-hidden="true">👤</div>
                    <label className="upload-picture">
                        <span className="upload-icon" aria-hidden="true">↑</span>
                        <span>Upload a profile picture</span>
                        <small>JPG, PNG or GIF (max 5 MB)</small>
                        <input type="file" accept="image/png,image/jpeg,image/gif" />
                    </label>
                </aside>

                <section className="profile-fields" aria-label="Profile details">
                    <div className="profile-field">
                        <label htmlFor="fullName">Full Name</label>
                        <input id="fullName" name="fullName" type="text" placeholder="Enter your full name" />
                    </div>

                    <div className="profile-field">
                        <label htmlFor="username">Username</label>
                        <input id="username" name="username" type="text" placeholder="Enter your username" />
                    </div>

                    <div className="profile-field">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" placeholder="Enter your email" />
                    </div>

                    <div className="profile-field">
                        <label htmlFor="age">Age</label>
                        <input id="age" name="age" type="number" min="1" placeholder="Enter your age" />
                    </div>

                    <div className="profile-field">
                        <label htmlFor="country">Country</label>
                        <input id="country" name="country" type="text" placeholder="Enter your country" />
                    </div>

                    <div className="profile-field">
                        <label htmlFor="city">City</label>
                        <input id="city" name="city" type="text" placeholder="Enter your city" />
                    </div>

                    <div className="profile-field profile-field-wide">
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" name="gender" defaultValue="">
                            <option value="" disabled>Select your gender</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
                            <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                    </div>

                    <div className="profile-field profile-field-wide">
                        <label htmlFor="password">New Password</label>
                        <input id="password" name="password" type="password" placeholder="Enter a new password" autoComplete="new-password" />
                    </div>

                    <div className="profile-field profile-field-wide">
                        <label htmlFor="repeatPassword">Repeat New Password</label>
                        <input id="repeatPassword" name="repeatPassword" type="password" placeholder="Repeat your new password" autoComplete="new-password" />
                    </div>

                    <button className="profile-save-button" type="submit">Save Changes</button>
                </section>
            </form>

            <section className="profile-bottom">
                <div className="commented-cars-panel">
                    <div className="section-title">
                        <span className="section-icon" aria-hidden="true">💬</span>
                        <div>
                            <h2>Your Commented Cars</h2>
                            <p>Quick links to cars you've commented on.</p>
                        </div>
                    </div>

                    <ul className="commented-cars-list">
                        <li>
                            <a href="/cars/car-id-1" className="commented-car-link">
                                <span className="car-placeholder" aria-hidden="true">🚘</span>
                                <span className="commented-car-info">
                                    <strong>Car title</strong>
                                    <small>View your comments</small>
                                </span>
                                <span className="car-arrow" aria-hidden="true">›</span>
                            </a>
                        </li>
                        <li>
                            <a href="/cars/car-id-2" className="commented-car-link">
                                <span className="car-placeholder" aria-hidden="true">🚗</span>
                                <span className="commented-car-info">
                                    <strong>Car title</strong>
                                    <small>View your comments</small>
                                </span>
                                <span className="car-arrow" aria-hidden="true">›</span>
                            </a>
                        </li>
                        <li>
                            <a href="/cars/car-id-3" className="commented-car-link">
                                <span className="car-placeholder" aria-hidden="true">🏎️</span>
                                <span className="commented-car-info">
                                    <strong>Car title</strong>
                                    <small>View your comments</small>
                                </span>
                                <span className="car-arrow" aria-hidden="true">›</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="personal-info-panel">
                    <div className="section-title">
                        <span className="section-icon" aria-hidden="true">⚙️</span>
                        <div>
                            <h2>Personal Information</h2>
                            <p>Keep your account details up to date.</p>
                        </div>
                    </div>
                    <p className="personal-info-description">
                        You can edit your name, contact details, location, and password using the form above.
                    </p>
                    <a className="edit-profile-link" href="#fullName">✎ &nbsp; Change Personal Info</a>
                </div>
            </section>
        </main>
    );
}
