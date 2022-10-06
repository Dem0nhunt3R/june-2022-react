import {useNavigate} from "react-router-dom";

import {MyButton} from "../myButton/MyButton";

const Comment = ({comment}) => {
    const {id, name} = comment;
    const navigate = useNavigate();

    return (
        <div style={{width: "40%"}}>
            <p>{id}: {name}</p>
            <MyButton cb={() => navigate(id.toString())}>Comment</MyButton>
            <hr/>
        </div>
    );
};

export {Comment};