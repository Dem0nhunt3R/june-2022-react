import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Outlet} from "react-router-dom";

import {commentService} from "../../services";
import {commentActions} from "../../reducers/commentReducer";
import {Comment} from "../../components";
import style from './CommentsPage.module.css'

const CommentsPage = () => {
    const {comments} = useSelector(state => state.commentReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        commentService.getComments().then(({data}) => dispatch(commentActions.loadComments([...data])));
    }, []);

    return (
        <div>
            <div className={style.outlet}>
                <Outlet/>
            </div>
            <div className={style.commentsBox}>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export {CommentsPage};