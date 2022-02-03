import React from 'react';
import { content } from '../../../../types/types';
import Button from './styles/Button';
import ContentWrapper from './styles/ContentWrapper';
const Content = ({behave,content}:{behave:Function,content:content}) => {
    return(
        <ContentWrapper>
            <p className='content'>
                {/* TODO:  content pierwsze 500 znaków */}
                {content}
            </p>
            <Button onClick={behave}>
                Zobacz więcej
            </Button>
        </ContentWrapper>
    )
}
export default Content;