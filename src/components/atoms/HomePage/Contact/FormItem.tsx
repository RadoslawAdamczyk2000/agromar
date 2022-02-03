import React from 'react';
import FormItemWrapper from './styles/FormItemWrapper';
const FormItem = () => {
    return(
        <FormItemWrapper>
            <label htmlFor='assdsa'>
                Imię i nazwisko
            </label>
            <input 
                type='text'
            />
        </FormItemWrapper>
    )
}
export default FormItem;