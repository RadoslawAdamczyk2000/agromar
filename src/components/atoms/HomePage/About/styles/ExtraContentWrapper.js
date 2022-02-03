import styled from 'styled-components';
const ExtraContentWrapper = styled.div`
    color:${({theme}) => theme.colors.gray};
    height:${({isOpen}) => isOpen ? 'auto' : 0};
    opacity:${({isOpen}) => isOpen ? 1 : 0};
    overflow:hidden;
    padding:${({isOpen}) => isOpen ? '1.5rem' : 0};
    transition:.12s .12s linear height,.12s linear opacity,.12s .12s linear padding;
    & > p{
        font-size:${({theme}) => theme.fonts.sizes.button};
        text-align:justify;
        text-indent:5rem;
    }
`
export default ExtraContentWrapper;