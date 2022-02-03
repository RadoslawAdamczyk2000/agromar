import React from 'react';
import { title } from '../../../../types/types';
const TitleSection = ({title}:{title:title}) => {
    return(
        <h3>
            {title}
        </h3>
    )
}
export default TitleSection;