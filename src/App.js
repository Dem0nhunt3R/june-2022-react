import {Link, Route, Routes} from "react-router-dom";

import {Albums, Comments, Home, Post, Todos} from "./components";

const App = () => {
    return (
        <div>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/albums'}>Albums</Link>
                <Link to={'/todos'}>Todos</Link>
                <Link to={'/comments'}>Comments</Link>
            </div>
            <div>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'/todos'} element={<Todos/>}/>
                    <Route path={'/comments'} element={<Comments/>}>
                        <Route path={'post/:id'} element={<Post/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
};

export default App;