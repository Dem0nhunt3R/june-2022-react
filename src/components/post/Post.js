import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {apiService} from "../../services";

export const Post = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        apiService.getPost(id).then(({data}) => setPost({...data}))
    }, [id]);

    return (
        <div>
            {post &&
                <div>
                    <h2>ID:{post.id}</h2>
                    <h3>User id:{post.userId}.</h3>
                    <h3>Title: {post.title}</h3>
                    <p>{post.body}</p>
                </div>
            }
        </div>
    );
};
