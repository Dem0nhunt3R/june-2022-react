import classes from './User.module.css';

const User = ({user,showInfo}) => {
    const {id, name, email, phone} = user;

    return (
        <div className={classes.card}>
            <h2 className={classes.text}>{id}. {name}</h2>
            <p className={classes.text}>{email}</p>
            <p className={classes.text}>{phone}</p>
            <div className={classes.buttonDiv}>
                <button onClick={() => showInfo(id)}>details</button>
            </div>
        </div>
    );
};

export default User;