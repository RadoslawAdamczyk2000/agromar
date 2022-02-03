import React from 'react';
import CardTitleWrapper from './styles/CardTitleWrapper';
import { title } from '../../../../types/types';
const CardTitle = ({title}:{title:title}) => {
    return(
        <CardTitleWrapper>
            <p>
                {title}
            </p>
        </CardTitleWrapper>
    )
}
export default CardTitle;