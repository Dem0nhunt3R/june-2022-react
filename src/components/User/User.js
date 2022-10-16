import {useDispatch} from "react-redux";

import {userActions} from "../../redux";
import css from './User.module.css';

const User = ({user}) => {
    const dispatch = useDispatch();
    const {id, name, email} = user;

    return (
        <div className={css.card}>
            <h3 className={css.w100}>{id}. {name}</h3>
            <p className={css.w100}>{email}</p>
            <button className={css.w100} onClick={() => dispatch(userActions.chooseUser(user))}>Select</button>
            <button className={css.w100} onClick={() => dispatch(userActions.getById(id))}>API</button>
            <hr/>
        </div>
    );
};

export {User};