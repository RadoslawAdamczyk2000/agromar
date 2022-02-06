import React from 'react';
import {content} from '../../../../types/types';
import CardContentWrapper from './styles/CardContentWrapper';
const CardContent = ({content}:{content:content}) => {
    return(
        <CardContentWrapper>
            <p dangerouslySetInnerHTML={{__html:content}}/>
        </CardContentWrapper>
    )
}
export default CardContent;