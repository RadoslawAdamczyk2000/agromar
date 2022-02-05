import styled from 'styled-components';
const TitleWrapper = styled.div`
    align-items:center;
    color:${({theme}) => theme.colors.black};
    display:flex;
    font-size:calc(${({theme}) => theme.fonts.sizes.section} * .85);
    font-weight:${({theme}) => theme.fonts.weights.black};
    justify-content:center;
    padding:1rem 2rem;
`
export default TitleWrapper;