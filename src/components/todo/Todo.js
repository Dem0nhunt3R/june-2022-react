export const Todo = ({todo: {userId, id, title, completed}}) => {
    return (
        <div>
            Task {id} - User {userId}.
            <p>{title}</p>
            {completed ? 'Completed' : 'Not completed'}.
            <hr/>
        </div>
    );
};
