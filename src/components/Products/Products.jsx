import React from 'react';
import {Grid, Button, ThemeProvider, createTheme} from '@mui/material';

import Product from './Product/Product';
import styles from './styles';
import useClasses from '../../hook';
import block from '../../assets/block.png';

const Products = ({ products, onAddToCart }) => {
    const customTheme = createTheme({
        palette: {
          primary: {
            main: "#C0C0C0"
          }
        }
    });
    console.log(products);
    const classes = useClasses(styles);
    return (
        <>
        <img src={block} alt="block" className={classes.image}/>
        <main className={classes.content}>
                <div className={classes.toolbar}>
                    <Grid container justifyContent="center">
                        <ThemeProvider theme={customTheme}>
                            <Button variant="contained" sx={{mr: 2}}>All</Button>
                            <Button variant="contained" sx={{mr: 2}}>Peripherals</Button>
                            <Button variant="contained" sx={{mr: 2}}>Processors</Button>
                            <Button variant="contained" sx={{mr: 2}}>GPUs</Button>
                            <Button variant="contained" sx={{mr: 2}}>Motherboards</Button>
                            <Button variant="contained" sx={{mr: 2}}>Coolers</Button>
                        </ThemeProvider>
                    </Grid>
                </div>
                    <Grid container justifyContent="center" spacing={4}>
                        {products.map((product) => (
                            <Grid item key ={product.id} xs = {12} sm = {6} md = {4} lg = {3}>
                                <Product product = {product} onAddToCart = {onAddToCart} />
                            </Grid>
                        ))}
                    </Grid>
        </main>
        </>
    )
}

export default Products;