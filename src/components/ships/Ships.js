import {useEffect, useState} from "react";

import {getShips} from "../../services/api.service";
import Ship from "../ship/Ship";
import classes from './Ships.module.css'

const Ships = () => {
    const [ships, setShips] = useState([]);

    useEffect( () => {
        getShips().then(({data}) => {
            const filter = data.filter(flight => flight.launch_year !== '2020');
            setShips([...filter]);
        });
    }, []);

    return (
        <div className={classes.container}>
            {
                ships.map(ship => <Ship key={ship.mission_name} ship={ship}/>)
            }
        </div>
    );
};

export default Ships;