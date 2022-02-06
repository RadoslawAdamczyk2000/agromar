import React from 'react';
import theme from '../styles/theme';
import Global from '../styles/Global';
import { ThemeProvider } from 'styled-components';
const Layout = ({children}:{children:any}) => {
    return(
        <ThemeProvider theme={theme}>
            <Global/>
            <div>
                {children}
            </div>
        </ThemeProvider>
    )
}
export default Layout;