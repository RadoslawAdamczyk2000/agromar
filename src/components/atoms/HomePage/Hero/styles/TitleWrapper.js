import styled from 'styled-components';
const TitleWrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(2,1fr);
    height:100%;
    position:absolute;
    top:0;
    width:100%;
    & > div{
        background:red;
        margin:auto;
        max-width:95%;
        width:55rem;
    }
`
export default TitleWrapper;