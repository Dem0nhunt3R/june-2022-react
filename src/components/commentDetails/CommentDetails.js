import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {commentService} from "../../services";
import {CLEAR_COMMENT, commentActions} from "../../reducers/commentReducer";

const CommentDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const {comment} = useSelector(state => state.commentReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (+id > 500 || +id <= 0 || !Number.isInteger(+id)) {
            navigate('/notFound', {state: location.pathname});
        }
        dispatch({type:CLEAR_COMMENT})
        commentService.getComment(id).then(({data}) => dispatch(commentActions.getComment({...data})));
    }, [id]);

    return (
        <>
            {comment &&
                <div>
                    <h2 style={{marginTop: "0"}}>Comment {comment.id} of post {comment.postId}</h2>
                    <h3>Name: {comment.name}</h3>
                    <h3>Email: {comment.email}</h3>
                    <p>{comment.body}</p>
                </div>

            }
        </>
    );
};

export {CommentDetails};