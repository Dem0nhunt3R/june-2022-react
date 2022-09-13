import Character from "../character/Character";
import {useEffect, useState} from "react";
import {charsUrl} from "../../urls/urls";
import classes from './Characters.module.css'

const Characters = () => {
    let [chars, setChars] = useState([]);

    useEffect(() => {
        fetch(charsUrl)
            .then(value => value.json())
            .then(value => setChars([...value]))
    }, [])

    return (
        <div className={classes.container}>
            {
                chars.map((char) => <Character key={char.id} char={char}/>)
            }
        </div>
    );
};

export default Characters;