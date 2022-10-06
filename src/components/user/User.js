import {useNavigate} from "react-router-dom";

import style from './User.module.css'
import {MyButton} from "../myButton/MyButton";

const User = ({user}) => {
    const {id, name, email, phone} = user;
    const navigate = useNavigate();

    return (
        <div className={style.card}>
            <h3>{id} {name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <MyButton cb={() => navigate(id.toString())}>User</MyButton>
        </div>
    );
};

export {User};