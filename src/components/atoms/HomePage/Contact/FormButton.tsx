import FormButtonWrapper from './styles/FormButtonWrapper';
import React from 'react';
const FormButton = ({label}:{label:string}) => {
    return(
        <FormButtonWrapper
            onClick={() => alert('Wyślij')}
            type='submit'
        >
            {label}
        </FormButtonWrapper>
    )
}
export default FormButton;