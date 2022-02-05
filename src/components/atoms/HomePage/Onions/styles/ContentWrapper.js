import styled from 'styled-components';
const ContentWrapper = styled.div`
    padding:1.5rem;
    & > p{
        color:${({theme}) => theme.colors.gray};
        font-size:1.95rem;
        font-weight:${({theme}) => theme.fonts.weight};
        text-align:start;
        text-indent:5rem;
    }
`
export default ContentWrapper;