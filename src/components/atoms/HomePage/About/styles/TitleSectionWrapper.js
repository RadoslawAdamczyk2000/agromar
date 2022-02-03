import styled from 'styled-components';
const TitleSectionWrapper = styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
    margin:1rem 0;
    & > h3{
        font-size:${({theme}) => theme.fonts.sizes.section};
        text-transform:uppercase;
    }
`
export default TitleSectionWrapper;