import classes from './Character.module.css'

const Character = ({char}) => {
    let {id, name, status, species, gender, image} = char;
    return (
        <div className={classes.card}>
            <h2>{id} - {name}</h2>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Character;