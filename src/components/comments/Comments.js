import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {apiService} from "../../services";
import {Comment} from "../comment/Comment";

export const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        apiService.getComments().then(({data}) => setComments([...data]));
    }, []);

    return (

        <div>
            <Outlet/>
            <hr/>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};