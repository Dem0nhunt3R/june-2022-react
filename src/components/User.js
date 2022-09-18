import {getPosts} from "../services/user.service";

const User = ({user: {id, name}, setPosts}) => {
    return (
        <div>
            <p key={id}>{id}. {name}</p>
            <button onClick={() => getPosts(id).then(({data}) => setPosts([...data]))}>Posts</button>
        </div>
    );
};

export default User;