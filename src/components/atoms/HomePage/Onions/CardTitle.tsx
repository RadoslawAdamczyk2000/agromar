import React from 'react';
import CardTitleWrapper from './styles/CardTitleWrapper';
const CardTitle = ({title}:{title:string}) => {
    return(
        <CardTitleWrapper>
            <p>
                {title}
            </p>
        </CardTitleWrapper>
    )
}
export default CardTitle;