import classes from './Simpson.module.css'

const Simpson = ({simpson}) => {
    return (
        <div className={classes.card}>
            <h2>{simpson.name}</h2>
            <img src={simpson.img} alt=""/>
            <p>{simpson.info}</p>
        </div>
    );
};

export default Simpson;