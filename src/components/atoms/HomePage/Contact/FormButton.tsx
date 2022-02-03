import React from 'react';
const FormButton = () => {
    return(
        <div>
            <button
                onClick={() => alert('Wyślij')}
                type='submit'
            >
                Wyślij
            </button>
        </div>
    )
}
export default FormButton;