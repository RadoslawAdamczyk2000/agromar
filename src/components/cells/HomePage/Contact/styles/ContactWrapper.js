import styled from 'styled-components';
const ContactWrapper = styled.div`
    & > .content{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        @media only screen and (max-width:1250px){
            align-items:center;
            display:flex;
            flex-direction:column-reverse;
            justify-content:center;
            & > * {
                margin:2rem auto;
                max-width:95vw;
            }
        }
    }
`
export default ContactWrapper;