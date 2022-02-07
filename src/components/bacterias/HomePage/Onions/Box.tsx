import BoxWrapper from './styles/BoxWrapper';
import Content from '../../../atoms/HomePage/Onions/Content';
import React from 'react';
import Title from '../../../atoms/HomePage/Onions/Title';
const Box = ({content,title}:{content:any,title:any}) => {
    return(
        <BoxWrapper>
            <Title 
                title={title}
            />
            <Content 
                content={content}
            />
        </BoxWrapper>
    )
}
export default Box;