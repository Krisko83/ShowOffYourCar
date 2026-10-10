import './Pagination.css'

export default function Pagination({
    page,
    setPage,
    limit,
    setPageLimit,
    totalPages,
}) {


    return (

        <div className="pagination">
            <div className="pagination-limit">
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

            <div className="pagination-center">
                <span className="pagination-label">Page</span>
                <span className="current-page">{page}</span>
                <span className="pagination-separator">of</span>
                <span className="total-pages">{totalPages}</span>
            </div>

            <div className="pagination-actions">
                <button
                    className="pagination-btn"
                    title="First Page"
                    aria-label="First page"
                    onClick={() => setPage(1)}
                    disabled={page === 1}
                >
                    «
                </button>

                <button
                    className="pagination-btn"
                    title="Previous Page"
                    aria-label="Previous page"
                    onClick={() => setPage(state => state - 1)}
                    disabled={page === 1}
                >
                    ‹
                </button>

                <button
                    className="pagination-btn"
                    title="Next Page"
                    aria-label="Next page"
                    onClick={() => setPage(state => state + 1)}
                    disabled={page === totalPages}
                >
                    ›
                </button>

                <button
                    className="pagination-btn"
                    title="Last Page"
                    aria-label="Last page"
                    onClick={() => setPage(totalPages)}
                    disabled={page === totalPages}
                >
                    »
                </button>
            </div>
        </div>


    )

}