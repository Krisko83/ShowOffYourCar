
export default function LikeBtn({
    likeCar,
    liked,
    unlikeCar
}   ) {

    return (
        <>
            {liked ?
                <button className="reaction-button like-btn" onClick={unlikeCar}>
                    <span className="default-content">
                        👍 Liked
                    </span>

                    <span className="hover-content">
                        👎 Unlike
                    </span>
                </button>
                :
                <button className="reaction-button like-button" onClick={likeCar}>
                    👍
                    <span>Like</span>
                </button>
            }

            {/* <button className="like-btn">
                <span className="default-content">
                    👍 Liked
                </span>

                <span className="hover-content">
                    👎 Unlike
                </span>
            </button> */}
        </>
    );
}



{/* {liked ?
                <button className="reaction-button dislike-button" onClick={unlikeCar}>
                    👎
                    <span>Liked</span>
                </button>
                :
                <button className="reaction-button like-button" onClick={likeCar}>
                    👍
                    <span>Like</span>
                </button>
            } */}

