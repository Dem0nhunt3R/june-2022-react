import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Outlet} from "react-router-dom";

import {userService} from "../../services";
import {userActions} from "../../reducers/userReducer";
import {User} from "../../components";
import style from "./UsersPage.module.css";

const UsersPage = () => {
    const {users} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        userService.getUsers().then(({data}) => dispatch(userActions.loadUsers([...data])))
    }, []);

    return (
        <div className={style.container}>
            <div className={`${style.usersBox} ${style.w70}`}>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};