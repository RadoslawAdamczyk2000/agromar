import React from 'react';
import {content} from '../../../../types/types';
import CardContentWrapper from './styles/CardContentWrapper';
const CardContent = ({content}:{content:content}) => {
    return(
        <CardContentWrapper>
            <p>
                {content}
            </p>
        </CardContentWrapper>
    )
}
export default CardContent;