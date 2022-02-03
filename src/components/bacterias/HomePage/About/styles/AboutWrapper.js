import styled from 'styled-components';
const AboutWrapper = styled.div`
    margin:10rem auto;
    width:75vw;
    & > .content{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        @media only screen and (max-width:1050px){
            grid-template-columns:repeat(1,1fr);
        }
    }
`
export default AboutWrapper;