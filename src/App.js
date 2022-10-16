import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";

import {Home, Post, User} from "./components";
import {MainLayout} from "./layouts";
import {setupStore} from "./redux";
import {PostsPage, UsersPage} from "./pages";

const App = () => {
    const store = setupStore();

    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}>
                        <Route index element={<Navigate to={'home'}/>}/>
                        <Route path={'home'} element={<Home/>}/>
                        <Route path={'users'} element={<UsersPage/>}>
                            <Route path={':id'} element={<User/>}/>
                        </Route>
                        <Route path={'posts'} element={<PostsPage/>}>
                            <Route path={':id'} element={<Post/>}/>
                        </Route>
                    </Route>
                </Routes>
            </Provider>
        </BrowserRouter>
    );
};

export default App;