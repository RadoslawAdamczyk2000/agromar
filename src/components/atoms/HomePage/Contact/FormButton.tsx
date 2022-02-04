import FormButtonWrapper from './styles/FormButtonWrapper';
import React from 'react';
const FormButton = () => {
    return(
        <FormButtonWrapper
            onClick={() => alert('Wyślij')}
            type='submit'
        >
            Wyślij
        </FormButtonWrapper>
    )
}
export default FormButton;