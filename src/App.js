import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce';

import { Products, Navbar } from './components';
// import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@mui/styles';
// import { ThemeProvider } from '@emotion/react';


const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
      const { data } = await commerce.products.list();

      setProducts(data);
  }

  useEffect(() => {
      fetchProducts();  
  }, []);

  console.log(products);
  return (
    <div>
        {/* <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
               <ThemeProvider theme={theme}> */}
                 <Navbar />
                 <Products products={products} />
               {/* </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider> */}
    </div>
  )
}

export default App;