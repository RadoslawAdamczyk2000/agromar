import styled from 'styled-components';
const TitleSectionWrapper = styled.div`
    align-items:center;
    background-color:${({theme}) => theme.colors.emerald};
    display:flex;
    justify-content:center;
    height:8rem;
    margin:1rem 0 0 0;
    & > h3{
        color:${({theme}) => theme.colors.white};
        font-size:calc(${({theme}) => theme.fonts.sizes.section} * 1.5);
        text-transform:uppercase;
        text-shadow:0 0 1rem hsla(0,100%,0%,.25);
    }
`
export default TitleSectionWrapper;