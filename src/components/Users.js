import {useEffect, useState} from "react";

import {getUsers} from "../services/user.service";
import User from "./User";

const Users = ({setPosts}) => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));
    }, []);

    return (
        <div>
            {
                users.map(user=><User key={user.id} user={user} setPosts={setPosts}/>)
            }
        </div>
    );
};

export default Users;