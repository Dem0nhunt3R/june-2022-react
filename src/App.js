import {Route, Routes} from "react-router-dom";

import {CommentsPage, PostsPage} from "./pages";
import {MainLayout} from "./layouts";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'/posts'} element={<PostsPage/>}/>
                <Route path={'/comments'} element={<CommentsPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;