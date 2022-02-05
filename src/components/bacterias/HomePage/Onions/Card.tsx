import React from 'react';
import CardImage from '../../../atoms/HomePage/Onions/CardImage';
import CardTitle from '../../../atoms/HomePage/Onions/CardTitle';
import CardWrapper from './styles/CardWrapper';
const Card = ({imagePath,title}:{imagePath:any,title:string}) => {
    return(
        <CardWrapper>
            <CardImage imagePath={imagePath} title={title}/>
            <CardTitle title={title} />
        </CardWrapper>
    )
}
export default Card;