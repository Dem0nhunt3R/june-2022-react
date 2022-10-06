import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";

import style from './UserDetails.module.css'
import {userService} from "../../services";
import {CLEAR_USER, userActions} from "../../reducers/userReducer";

const UserDetails = () => {
    const {id} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const {user} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        if (+id > 10 || +id <= 0 || !Number.isInteger(+id)) {
            navigate('/notFound', {state: location.pathname});
        }
        dispatch({type: CLEAR_USER});
        userService.getUser(id).then(({data}) => dispatch(userActions.getUser({...data})))
    }, [id]);

    return (
        <div>
            {
                user &&
                <div className={style.bl}>
                    <h2 className={style.pl}>{user.name}</h2>
                    <hr/>
                    <p className={style.pl}>Address:</p>
                    <p className={style.pl}>City: {user.address.city}</p>
                    <p className={style.pl}>Street: {user.address.street}</p>
                    <p className={style.pl}>Suite: {user.address.suite}</p>
                    <hr/>
                    <p className={style.pl}>Company:</p>
                    <p className={style.pl}>Name: {user.company.name}</p>
                    <p className={style.pl}>BS: {user.company.bs}</p>
                    <p className={style.pl}>Catch phrase: {user.company.catchPhrase}</p>
                </div>

            }
        </div>
    );
};

export {UserDetails};