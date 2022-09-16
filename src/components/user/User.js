import classes from './User.module.css';

const User = ({user,showInfo}) => {
    const {id, name, email, phone} = user;

    return (
        <div className={classes.card}>
            <h2>{id}. {name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <div className={classes.buttonDiv}>
                <button onClick={() => showInfo(id)}>details</button>
            </div>
        </div>
    );
};

export default User;