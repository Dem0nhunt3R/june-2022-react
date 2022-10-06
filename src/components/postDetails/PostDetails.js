import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postService} from "../../services";
import {CLEAR_POST, postActions} from "../../reducers/postReducer";

const PostDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const {post} = useSelector(state => state.postReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (+id > 100 || +id <= 0 || !Number.isInteger(+id)) {
            navigate('/notFound', {state: location.pathname});
        }
        dispatch({type: CLEAR_POST})
        postService.getPost(id).then(({data}) => dispatch(postActions.getPost({...data})));
    }, [id]);

    return (
        <div>
            {
                post &&
                <div>
                    <h2 style={{marginTop: "0"}}>Post {post.id}: {post.title}</h2>
                    <p>{post.body}.</p>
                </div>

            }
        </div>
    );
};

export {PostDetails};