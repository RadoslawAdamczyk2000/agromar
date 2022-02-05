import styled from 'styled-components';
const CardTitleWrapper = styled.div`
    align-items:center;
    background-color:${({theme}) => theme.colors.black};
    color:${({theme}) => theme.colors.white};
    display:flex;
    font-family:${({theme}) => theme.fonts.family.secondary};
    font-size:2rem;
    font-weight:${({theme}) => theme.fonts.weights.bolder};
    justify-content:center;
    max-width:95vw;
    min-height:8rem;
    padding:.5rem 1.75rem;
    transition:.12s linear background-color, .12s linear color;
`
export default CardTitleWrapper;