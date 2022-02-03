import styled from 'styled-components';
const ContentWrapper = styled.div`
    align-items:center;
    display:flex;
    flex-direction:column;
    height:100%;
    justify-content:space-around;
    padding:2rem;
    width:100%;
    & > .content{
        font-size:${({theme}) => theme.fonts.sizes.content};
        text-align:start;
    }
`
export default ContentWrapper;