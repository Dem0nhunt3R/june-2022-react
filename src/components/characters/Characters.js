import {useEffect, useState} from "react";

import Character from "../character/Character";
import {charactersUrl} from "../../urls/urls";
import classes from './Characters.module.css'

const Characters = () => {
    let [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(charactersUrl)
            .then(value => value.json())
            .then(value => setCharacters([...value]))
    }, [])

    return (
        <div className={classes.container}>
            {
                characters.map((character) => <Character key={character.id} char={character}/>)
            }
        </div>
    );
};

export default Characters;