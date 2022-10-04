import {useNavigate} from "react-router-dom";

export const Comment = ({comment: {postId, id, name, body, email}}) => {
    const navigate = useNavigate();

    return (
        <div>
            Comment {id} to post {postId}. Email: {email}.
            <p>{name}.</p>
            <p>{body}</p>
            <button onClick={() => navigate('post/' + postId)}>Details
            </button>
            <hr/>
        </div>
    );
};
