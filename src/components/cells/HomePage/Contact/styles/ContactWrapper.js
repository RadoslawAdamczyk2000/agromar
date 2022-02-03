import styled from 'styled-components';
const ContactWrapper = styled.div`
    & > .content{
        display:grid;
        grid-template-columns:repeat(2,1fr);
    }
`
export default ContactWrapper;