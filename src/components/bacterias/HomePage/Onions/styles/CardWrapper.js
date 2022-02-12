import styled from 'styled-components';
const CardWrapper = styled.div`
    margin:auto;
    overflow:hidden;
    max-width:90vw;
    width:50rem;
    &:hover  > div {
        background-color:${({theme}) => theme.colors.celeste};
        color:${({theme}) => theme.colors.black};
    }
    &:hover  > figure > * {
        filter:brightness(115%);
        transform:scale(1.2);
    }

`
export default CardWrapper;