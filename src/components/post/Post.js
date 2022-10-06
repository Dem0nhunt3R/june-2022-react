import {useNavigate} from "react-router-dom";

import {MyButton} from "../myButton/MyButton";

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();

    return (
        <div style={{width: "40%"}}>
            <p>{id}: {title}.</p>
            <MyButton cb={() => navigate(id.toString())}>Post</MyButton>
            <hr/>
        </div>
    );
};

export {Post};