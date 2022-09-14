import classes from './Simpson.module.css'

const Simpson = ({simpson}) => {
    let {name,info,img} = simpson;

    return (
        <div className={classes.card}>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{info}</p>
        </div>
    );
};

export default Simpson;