import {useEffect, useState} from "react";

import {apiService} from "../../services";
import {Album} from "../album/Album";

export const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        apiService.getAlbums().then(({data}) => setAlbums([...data]))
    }, []);

    return (
        <div>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};