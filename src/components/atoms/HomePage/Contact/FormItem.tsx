import React from 'react';
import FormItemWrapper from './styles/FormItemWrapper';
const FormItem = ({inputName,label,variant='text'}:{inputName:string,label:string,variant:string}) => {
    return(
        <FormItemWrapper>
            <label htmlFor='assdsa'>
                {label}
            </label>
            <input 
                type={variant}
                name={inputName}
                id={inputName}
                required
            />
        </FormItemWrapper>
    )
}
export default FormItem;