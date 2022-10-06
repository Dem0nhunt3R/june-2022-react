import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import {AppRouter} from "./routers";
import {MainLayout} from "./layouts";
import {store} from "./reducers";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter>
                    <MainLayout/>
                </AppRouter>
            </BrowserRouter>
        </Provider>
    );
};

export default App;