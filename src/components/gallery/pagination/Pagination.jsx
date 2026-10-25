// import styles from './Pagination.module.css'

// export default function Pagination({
//     page,
//     setPage,
//     limit,
//     setPageLimit,
//     totalPages,
// }) {


//     return (

//         <div className={styles["pagination"]}>
//             <div className={styles["pagination-limit"]}>
//                 <label htmlFor="page-limit">Show</label>

//                 <select
//                     id="page-limit"
//                     name="limit"
//                     value={limit}
//                     onChange={setPageLimit}
//                 >
//                     <option value={9}>9</option>
//                     <option value={18}>18</option>
//                     <option value={27}>27</option>
//                     <option value={36}>36</option>
//                 </select>

//                 <span>per page</span>
//             </div>

//             <div className={styles["pagination-center"]}>
//                 <span className={styles["pagination-label"]}>Page</span>
//                 <span className={styles["current-page"]}>{page}</span>
//                 <span className={styles["pagination-separator"]}>of</span>
//                 <span className={styles["total-pages"]}>{totalPages}</span>
//             </div>

//             <div className={styles["pagination-actions"]}>
//                 <button
//                     className={styles["pagination-btn"]}
//                     title="First Page"
//                     aria-label="First page"
//                     onClick={() => setPage(1)}
//                     disabled={page === 1}
//                 >
//                     «
//                 </button>

//                 <button
//                     className={styles["pagination-btn"]}
//                     title="Previous Page"
//                     aria-label="Previous page"
//                     onClick={() => setPage(state => state - 1)}
//                     disabled={page === 1}
//                 >
//                     ‹
//                 </button>

//                 <button
//                     className={styles["pagination-btn"]}
//                     title="Next Page"
//                     aria-label="Next page"
//                     onClick={() => setPage(state => state + 1)}
//                     disabled={page === totalPages}
//                 >
//                     ›
//                 </button>

//                 <button
//                     className={styles["pagination-btn"]}
//                     title="Last Page"
//                     aria-label="Last page"
//                     onClick={() => setPage(totalPages)}
//                     disabled={page === totalPages}
//                 >
//                     »
//                 </button>
//             </div>
//         </div>


//     )

// }

import { useSearchParams } from 'react-router'
import styles from './Pagination.module.css'
import { useEffect } from 'react';

export default function Pagination({
    setPage,
    limit,
    setPageLimit,
    totalPages,
}) {

    const [searchParams, setSearchParams] = useSearchParams();

    const page = Number(searchParams.get('page') || 1);

    useEffect(() => {
        if (!searchParams.has('page')) {
            setSearchParams({ page: 1 }, { replace: true })
        }
        setPage(page)

    }, [setPage, page, searchParams, setSearchParams])


    const changePage = (newPage) => {
        setSearchParams({ page: newPage })
    }

    return (
        <div className={styles["pagination"]}>
            <div className={styles["pagination-limit"]}>
                <label htmlFor="page-limit">Show</label>

                <select
                    id="page-limit"
                    name="limit"
                    value={limit}
                    onChange={setPageLimit}
                >
                    <option value={9}>9</option>
                    <option value={18}>18</option>
                    <option value={27}>27</option>
                    <option value={36}>36</option>
                </select>

                <span>per page</span>
            </div>

            <div className={styles["pagination-center"]}>
                <span className={styles["pagination-label"]}>Page</span>
                <span className={styles["current-page"]}>{page}</span>
                <span className={styles["pagination-separator"]}>of</span>
                <span className={styles["total-pages"]}>{totalPages}</span>
            </div>

            <div className={styles["pagination-actions"]}>
                <button
                    className={styles["pagination-btn"]}
                    title="First Page"
                    aria-label="First page"
                    onClick={() => changePage(1)}
                    disabled={page === 1}
                >
                    «
                </button>

                <button
                    className={styles["pagination-btn"]}
                    title="Previous Page"
                    aria-label="Previous page"
                    onClick={() => changePage(page - 1)}
                    disabled={page === 1}
                >
                    ‹
                </button>

                <button
                    className={styles["pagination-btn"]}
                    title="Next Page"
                    aria-label="Next page"
                    onClick={() => changePage(page + 1)}
                    disabled={page === totalPages}
                >
                    ›
                </button>

                <button
                    className={styles["pagination-btn"]}
                    title="Last Page"
                    aria-label="Last page"
                    onClick={() => changePage(totalPages)}
                    disabled={page === totalPages}
                >
                    »
                </button>
            </div>
        </div>


    )

}