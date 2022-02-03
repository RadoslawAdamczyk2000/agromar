import React from 'react';
import { content } from '../../../../types/types';
const ExtraContent = ({content}:{content:content}) => {
    return(
        <div>
            <p>
                {content}
            </p>
        </div>
    )
}
export default ExtraContent;