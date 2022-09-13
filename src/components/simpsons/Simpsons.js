import Simpson from "../simpson/Simpson";
import {simpsons} from '../../data/data';
import classes from './Simpsons.module.css'

const Simpsons = () => {

    return (
        <div className={classes.container}>
            {
                simpsons.map((simpson, i) => <Simpson key={i} simpson={simpson}/>)
            }
        </div>
    );
};

export default Simpsons;