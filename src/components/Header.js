import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
           <Link to={'/posts'}>Posts</Link>
           <Link to={'/comments'}>Comments</Link>
        </div>
    );
};

export {Header};