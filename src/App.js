import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce';

import { Products, Navbar, Cart } from './components';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
// import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@mui/styles';
// import { ThemeProvider } from '@emotion/react';


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
      const { data } = await commerce.products.list();
      setProducts(data);
  }

  const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
      const item = await commerce.cart.add(productId,  quantity);
      setCart(item.cart);
  }

  useEffect(() => {
      fetchProducts();
      fetchCart();  
  }, []);

  return (
    <Router>
      <div>
          {/* <StylesProvider injectFirst>
              <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}> */}
                  <Navbar totalItems={cart.total_items} />
                  <Routes>
                      <Route path='/' element={<Products products = {products} onAddToCart = {handleAddToCart}/>} />
                      <Route path='/cart' element={<Cart cart={cart} />} />
                  </Routes>
                {/* </ThemeProvider>
              </MuiThemeProvider>
          </StylesProvider> */}
      </div>
    </Router>
  )
}

export default App;