import {useLocation} from "react-router-dom";

const NotFoundPage = () => {
    const {state} = useLocation();
    const {pathname} = useLocation();

    return (
        <div>
            <h1 style={{color: "red", textAlign: "center"}}>Url 'https:mysite{state ? state : pathname}' doesn't
                exist.</h1>
        </div>
    );
};

export {NotFoundPage};