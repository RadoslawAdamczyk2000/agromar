import { createGlobalStyle } from 'styled-components';
const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Source+Serif+4:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    ::after,
    ::before{
        content:'';
        position:absolute;
    }
    a{
        color:inherit;
        outline:none;
        text-decoration:none;
    }
    button{
        cursor:pointer;
        font-family:${({theme}) => theme.fonts.family.primary};
    }
    body{
        background-color:${({theme}) => theme.colors.white};
        color:${({theme}) => theme.colors.black};
        font-family:${({theme}) => theme.fonts.family.secondary};
        font-size:1.6rem;
        font-weight:${({theme}) => theme.fonts.weights.regular};
    }
    html{
        font-size:62.5%;
    }
    button,
    input,
    textarea{
        background:none;
        border:none;
        outline:none;
    }
    input,
    textarea{
        font-family:${({theme}) => theme.fonts.family.secondary};
    }
    li,
    ol,
    ul{
        list-style:none;
    }
`
export default Global;