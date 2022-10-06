import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "../layouts";
import {CommentDetails, HomePage, PostDetails, UserDetails} from "../components";
import {CommentsPage, NotFoundPage, PostsPage, UsersPage} from "../pages";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetails/>}/>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetails/>}/>
                    </Route>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':id'} element={<CommentDetails/>}/>
                    </Route>
                    <Route path={'notFound'} element={<NotFoundPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
};

export {AppRouter};