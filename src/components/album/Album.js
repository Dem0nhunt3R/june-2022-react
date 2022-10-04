export const Album = ({album:{userId,id,title}}) => {
    return (
        <div>
            {id}. User {userId}
            <p>{title}</p>
            <hr/>
        </div>
    );
};