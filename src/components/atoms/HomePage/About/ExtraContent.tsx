import React from 'react';
import { content } from '../../../../types/types';
import ExtraContentWrapper from './styles/ExtraContentWrapper';
const ExtraContent = ({content,isOpen}:{content:content,isOpen:boolean}) => {
    return(
        <ExtraContentWrapper isOpen={isOpen}>
            <p dangerouslySetInnerHTML={{__html:content}}>
            </p>
        </ExtraContentWrapper>
    )
}
export default ExtraContent;