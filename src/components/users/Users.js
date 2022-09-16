import {useEffect, useState} from "react";

import User from "../user/User";
import {getUserById, getUsers} from "../../services/user.service";
import classes from './Users.module.css'
import UserDetails from "../userDetateils/UserDetails";
import {explorer} from "../../utils/objRecursion";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]))
    }, []);

    const showInfo = (id) => {
        getUserById(id).then(({data}) => setUser([...explorer(data)]));
    }

    return (
        <div>
            <div>
                {
                    user && <UserDetails key={user[0].id} userInfo={user}/>
                }
            </div>
            <div className={classes.container}>
                {
                    users.map(user => <User key={user.id} user={user} showInfo={showInfo}/>)
                }
            </div>
        </div>
    );
};

export default Users;