import React from 'react';
import { content } from '../../../../types/types';
import Button from './styles/Button';
import ContentWrapper from './styles/ContentWrapper';
const Content = ({behave,buttonValue,content}:{behave:Function,buttonValue:string,content:content}) => {
    return(
        <ContentWrapper>
            <div 
                className='content' 
                id='contentAbout' 
                dangerouslySetInnerHTML={{__html:content}}
            />
            <Button onClick={behave}>
                {buttonValue}
            </Button>
        </ContentWrapper>
    )
}
export default Content;