import React from 'react';
import { path } from '../../../../types/types';
const Poster = ({poster}:{poster:path}) => {
    return(
        <figure>
            <img src={poster}/>
        </figure>
    )
}
export default Poster;