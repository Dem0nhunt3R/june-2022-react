import {useEffect, useState} from "react";
import {getLaunches} from "../services/spacex.service";
import Launch from "./Launch";
import Pagination from "./Pagination";
import {getPageCount} from "../utils/pages";

const Launches = () => {
    const [launches, setLaunches] = useState([]);
    const [limit, setLimit] = useState(9);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        getLaunches(limit, (page - 1) * 10).then(({data, headers}) => {
            const totalItems = headers['spacex-api-count'];
            setTotalPages(getPageCount(totalItems, limit));
            setLaunches([...data]);
        });
    }, [page]);

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <div>
            <div className='flex flex-wrap'>
                {launches.map((launch) => <Launch key={launch.mission_name} launch={launch}/>)}
            </div>
            <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
        </div>
    );
};

export default Launches;