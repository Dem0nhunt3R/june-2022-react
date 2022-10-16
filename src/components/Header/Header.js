import {Link} from "react-router-dom";

import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.Header}>
            <Link className={style.link} to={'/'}>Home</Link>
            <Link className={style.link} to={'/users'}>Users</Link>
            <Link className={style.link} to={'/posts'}>Posts</Link>
        </div>
    );
};

export {Header};