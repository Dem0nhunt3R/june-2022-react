import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";

import style from './PostsPage.module.css'
import {postService} from "../../services";
import {postActions} from "../../reducers/postReducer";
import {Post} from "../../components";

const PostsPage = () => {
    const {posts} = useSelector(state => state.postReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        postService.getPosts().then(({data}) => dispatch(postActions.loadPosts([...data])))
    }, []);

    return (
        <div>
            <div className={style.outlet}>
                <Outlet/>
            </div>
            <hr/>
            <div className={style.postsBox}>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        </div>
    );
};

export {PostsPage};