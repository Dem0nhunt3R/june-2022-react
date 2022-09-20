import {getPagesArray} from "../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    return (
        <div className='mt-20 mb-10 '>
            <ul className='flex justify-center'>
                <li>
                    <button disabled={page === 1}
                            onClick={() => changePage(page - 1)}
                            className={page === 1
                                ? 'inline-block px-2 py-2 border border-gray-200 text-gray-200 rounded-l-lg'
                                : 'inline-block px-2 py-2 border border-gray-500 hover:bg-gray-200 rounded-l-lg'
                            }>
                        Previous
                    </button>
                </li>
                {
                    getPagesArray(totalPages).map(num =>
                        <li key={num}>
                            <button className={page === num
                                ? 'inline-block px-2 py-2 border border-gray-700 border-2'
                                : 'inline-block px-2 py-2 border border-gray-500 hover:bg-gray-200'
                            }
                                    onClick={() => changePage(num)}
                            >{num}
                            </button>
                        </li>
                    )
                }
                <li>
                    <button disabled={page === totalPages}
                            onClick={() => changePage(page + 1)}
                            className={page === totalPages
                                ? 'inline-block px-2 py-2 border border-gray-200 text-gray-200 rounded-r-lg'
                                : 'inline-block px-2 py-2 border border-gray-500 hover:bg-gray-200 rounded-r-lg'
                            }>
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;