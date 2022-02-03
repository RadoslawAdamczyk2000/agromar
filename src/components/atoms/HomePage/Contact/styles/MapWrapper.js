import styled from 'styled-components';
const MapWrapper = styled.div`
    align-items:center;
    display:flex;
    height:20rem;
    justify-content:center;
    margin:5rem auto;
    max-width:95%;
    width:75rem;
    & > iframe{
        background:none;
        border:none;
        height:100%;
        object-fit:cover;
        object-position:center;
        width:100%;
    }
`
export default MapWrapper;