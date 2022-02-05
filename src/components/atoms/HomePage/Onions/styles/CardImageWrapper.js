import styled from 'styled-components';
const CardImageWrapper = styled.figure`
    align:center;
    display:flex;
    height:35rem;
    justify-content:center;
    overflow:hidden;
    max-width:95vw;
    width:50rem;
    & > *{
        height:100%;
        object-fit:cover;
        object-position:center;
        transition:.12s linear filter, .12s linear transform;
        width:100%;
    }
`
export default CardImageWrapper;