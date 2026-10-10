export default function PersonalInfoItem({
    fullName,
    username,
    email,
    age,
    country,
    city,
    onClickEdit,
    gender,
}) {

    return (
        <section className="personal-details-card">
            <div className="personal-details-header">
                <div>
                    <h2>Personal Information</h2>
                    <p>Your profile details</p>
                </div>

                <button
                    type="button"
                    className="change-info-btn"
                    onClick={onClickEdit}
                >
                    ✎ Change Personal Info
                </button>
            </div>

            <div className="personal-details-content">
                <div className="personal-detail">
                    <span>Full Name</span>
                    <p>{fullName}</p>
                </div>

                <div className="personal-detail">
                    <span>username</span>
                    <p>{username}</p>
                </div>

                <div className="personal-detail">
                    <span>Email</span>
                    <p>{email}</p>
                </div>

                <div className="personal-detail">
                    <span>Age</span>
                    <p>{age || 'Not provided'}</p>
                </div>

                <div className="personal-detail">
                    <span>Country</span>
                    <p>{country || 'Not provided'}</p>
                </div>

                <div className="personal-detail">
                    <span>City</span>
                    <p>{city || 'Not provided'}</p>
                </div>

                <div className="personal-detail">
                    <span>Gender</span>
                    <p>{gender || 'Not provided'}</p>
                </div>
            </div>
        </section>
    );
}