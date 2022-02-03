import styled from 'styled-components';
const CardContentWrapper = styled.div`
    margin:1rem 0;
    padding:.8rem;
    & > p{
        color:${({theme}) => theme.colors.gray};
        font-family:${({theme}) => theme.fonts.family.primary};
        font-size:${({theme}) => theme.fonts.sizes.content};
        font-weight:${({theme}) => theme.fonts.weights.regular};
        text-align:start;
    }
`
export default CardContentWrapper;