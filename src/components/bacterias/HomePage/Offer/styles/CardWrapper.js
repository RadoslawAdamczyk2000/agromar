import styled from 'styled-components';
const CardWrapper = styled.div`
    background-color:${({theme}) => theme.colors.white};
    margin:2rem auto;
    max-width:95vw;
    width:50rem;
    & > .content{
        align-items:center;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
    }
`
export default CardWrapper;