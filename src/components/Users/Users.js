import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import style from './Users.module.css'
import {userActions} from "../../redux";
import {User} from "../User/User";
import {ChosenUser} from "../chosenUser/ChosenUser";
import {UserFromApi} from "../userFromApi/UserFromApi";

const Users = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    return (
        <div className={style.container}>
            <div className={style.w30}><ChosenUser/></div>
            <div className={`${style.w30} ${style.border}`}>{users && users.map(user => <User key={user.id} user={user}/>)}</div>
            <div className={style.w30}><UserFromApi/></div>
        </div>
    );
};

export {Users};