const max_items = 9;
const max_left = (max_items - 1)/2;

const Pagination = ({limit, total, offset, setOffset}) => {

    const current = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const first = Math.max(current - max_left, 1);
    return (
        <ul className="pagination">
            {Array.from({ length: Math.min(max_items), pages}).map ((_, index) => index + first).map((page)=>(
                <li className="page-item" key={page}>
                    <button type="button" className={ page === current ? 'btn btn-warning m-3 ' : "btn btn-outline-warning m-3 current"} onClick={()=> setOffset((page - 1) * limit)}>{page}</button>
                </li>
            ))}
        </ul>
    )
}
export default Pagination