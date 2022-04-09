import React from 'react'

import { Products, Navbar } from './components';
// import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@mui/styles';
// import { ThemeProvider } from '@emotion/react';


const App = () => {
  return (
    <div>
        {/* <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
               <ThemeProvider theme={theme}> */}
                 <Navbar />
                 <Products />
               {/* </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider> */}
    </div>
  )
}

export default App;