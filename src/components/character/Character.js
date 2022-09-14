import classes from './Character.module.css'

const Character = ({character}) => {
    let {id, name, status, species, gender, image} = character;

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