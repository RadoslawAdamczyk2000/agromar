import React from 'react';
import CardContent from '../../../atoms/HomePage/Offer/CardContent';
import CardPoster from '../../../atoms/HomePage/Offer/CardPoster';
import CardTitle from '../../../atoms/HomePage/Offer/CardTitle';
import CardWrapper from './styles/CardWrapper';
const Card = ({content,poster,title}) => {
    return(
        <CardWrapper>
            <CardPoster 
                poster={poster} 
                title={title}
            />
            <div className='content'>
                <CardTitle 
                    title={title}
                />
                <CardContent 
                    content={content}
                />
            </div>
        </CardWrapper>
    )
}
export default Card;