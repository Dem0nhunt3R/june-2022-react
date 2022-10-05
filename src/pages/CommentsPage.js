import {useEffect, useState} from "react";

import {commentService} from "../services";
import {Comment} from "../components";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getComments().then(({data}) => setComments([...data]));
    }, []);

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {CommentsPage};