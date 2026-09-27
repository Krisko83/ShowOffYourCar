import { useState } from "react";
import Pagination from "./Pagination.jsx";

export default function Gallery() {
const [page, setPage] = useState(1);
const [limit, setLimit] = useState(5);
 

const totalPages = Math.ceil(page / limit)
 

    return (
        <>
            <section className="container margin-bottom-50">
                <div className="row">
                    <div className="tm-gallery col-lg-12">
                        <div className="tm-item-container">
                            <img src="img/gallery/0.jpg" alt="Image" />
                            <div className="tm-item-price-container tm-gallery-item-info">
                                <span className="tm-item-price">A Class</span>
                                <a href="#" className="tm-item-link">
                                    <span className="tm-item-action">View More</span>
                                    <img src="img/plus.png" className="tm-item-add-icon" alt="Image" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Pagination page={page} setPage={setPage} limit={limit} setLimit={setLimit} totalPages={totalPages} />
            </section>
        </>
    );
}