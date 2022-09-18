import {useState} from "react";

import cl from './App.module.css'
import Users from "./components/Users";

const App = () => {
    const [posts, setPosts] = useState([]);

    return (
        <div className={cl.container}>
            <div className={cl.w}>
                <Users setPosts={setPosts}/>
            </div>

            <div className={cl.w}>
                {
                    posts && posts.map(post => <p key={post.id}>{post.id}. {post.title}</p>)
                }
            </div>


        </div>
    );
};

export default App;