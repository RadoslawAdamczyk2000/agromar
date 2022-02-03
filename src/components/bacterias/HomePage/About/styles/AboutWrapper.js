import styled from 'styled-components';
const AboutWrapper = styled.div`
    margin:10rem auto;
    width:75vw;
    & > .content{
        display:grid;
        grid-template-columns:repeat(2,1fr);
    }
`
export default AboutWrapper;