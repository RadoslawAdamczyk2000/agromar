import React from 'react';
import { content } from '../../../../types/types';
import ExtraContentWrapper from './styles/ExtraContentWrapper';
const ExtraContent = ({content,isOpen}:{content:content}) => {
    return(
        <ExtraContentWrapper isOpen={isOpen}>
            <p>
                {content}
            </p>
        </ExtraContentWrapper>
    )
}
export default ExtraContent;