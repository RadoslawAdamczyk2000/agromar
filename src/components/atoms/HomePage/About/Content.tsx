import React from 'react';
import { content } from '../../../../types/types';
const Content = ({content}:{content:content}) => {
    return(
        <div>
            <p>
                {/* TODO:  content pierwsze 500 znaków */}
                {content}
            </p>
            <button>
                Zobacz więcej
            </button>
        </div>
    )
}
export default Content;