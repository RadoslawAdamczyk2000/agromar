import React from 'react';
import FormAreaWrapper from './styles/FormAreaWrapper';
const FormArea = ({inputName,label}:{inputName:string,label:string}) => {
    return(
        <FormAreaWrapper>
            <label htmlFor={inputName}>
                {label}
            </label>
            <textarea
                name={inputName}
                id={inputName}
                required
            />
        </FormAreaWrapper>
    )
}
export default FormArea;