import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <Link to={'/'}>Home</Link>
            <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/comments'}>Comments</Link>
        </div>
    );
};

export {Header};