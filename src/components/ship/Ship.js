import classes from './Ship.module.css'

const Ship = ({ship}) => {
    const {mission_name, launch_year,links: {mission_patch_small}} = ship;

    return (
        <div className={classes.card}>
            <p>{mission_name}. Year: {launch_year}</p>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Ship;