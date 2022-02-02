import React from 'react';
import theme from '../styles/theme';
import Global from '../styles/Global';
import {Helmet} from 'react-helmet';
import { ThemeProvider } from 'styled-components';
const Layout = ({children}:{children:any}) => {
    return(
        <ThemeProvider theme={theme}>
            <Helmet>    
                <title>
                    Warzywa obrane, ziemniaki, buraki, Pleszew, wielkopolska - Agromar
                </title>
            </Helmet>
            <Global/>
            <div>
                {children}
            </div>
        </ThemeProvider>
    )
}
export default Layout;