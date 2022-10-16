import {Users} from "../components";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const UsersPage = () => {
    const {error,loading} = useSelector(state => state.userReducer);

    return (
        <div>
            {loading && <h1>Loading.........................</h1>}
            {error && <h1>ERROR</h1>}
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};