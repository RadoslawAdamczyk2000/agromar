import styled from 'styled-components';
const CardTitleWrapper = styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
    margin:.75rem 0;
    max-width:85vw;
    padding:.5rem .8rem;
    width:100%;
    
    & > p{
        color:${({theme}) => theme.colors.black};
        font-family:${({theme}) => theme.fonts.family.primary};
        font-size:${({theme}) => theme.fonts.sizes.cardTitle};
        font-weight:${({theme}) => theme.fonts.weights.bold};
    }
`
export default CardTitleWrapper;