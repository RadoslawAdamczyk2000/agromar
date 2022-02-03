import styled from 'styled-components';
const FormItemWrapper = styled.div`
    background:lime;
    margin:1rem auto;
    max-width:85%;
    /* width:${({isContact}) => isContact ? '25rem' : '50rem'}; */
    width:50rem;
`
export default FormItemWrapper;