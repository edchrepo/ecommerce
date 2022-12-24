import React, { useState } from 'react';
import {Grid, Button, ThemeProvider, createTheme, CircularProgress} from '@mui/material';
import { commerce } from '../../lib/commerce';

import Product from './Product/Product';
import styles from './styles';
import useClasses from '../../hook';
import block from '../../assets/block.png';


const Products = ({ products, onAddToCart }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [category, setCategory] = useState("");
    const customTheme = createTheme({
        palette: {
          primary: {
            main: "#C0C0C0"
          },
        },
        typography: {
            fontFamily: 'Lato, sans-serif',
        },
    });
    const listProducts = products.map((product) => (
        <Grid item key ={product.id} xs = {12} sm = {6} md = {4} lg = {3}>
            <Product product = {product} onAddToCart = {onAddToCart} />
        </Grid>
    ))
    const handleShowCategory = async (filter) => {
        if(filter === "") {
            setCategory(products);
        } 
        else {
            setIsLoading(true);
            const { data } = await commerce.products.list({category_slug: filter})
            setIsLoading(false);
            setCategory(data);
        }
    }
    const classes = useClasses(styles);

    return (
        <>
        <img src={block} alt="block" className={classes.image}/>
        <main className={classes.content}>
                <div className={classes.toolbar}>
                    <Grid container justifyContent="center">
                        <ThemeProvider theme={customTheme}>
                            <Button variant="contained" sx={{mr: 2}} onClick={() => handleShowCategory("")}>All</Button>
                            <Button variant="contained" sx={{mr: 2}} onClick={() => handleShowCategory("Peripherals")}>Peripherals</Button>
                            <Button variant="contained" sx={{mr: 2}} onClick={() => handleShowCategory("Processors")}>Processors</Button>
                            <Button variant="contained" sx={{mr: 2}} onClick={() => handleShowCategory("GPU")}>GPUs</Button>
                            <Button variant="contained" sx={{mr: 2}} onClick={() => handleShowCategory("Motherboards")}>Motherboards</Button>
                            <Button variant="contained" sx={{mr: 2}} onClick={() => handleShowCategory("Coolers")}>Coolers</Button>
                        </ThemeProvider>
                    </Grid>
                </div>
                <div className={classes.bottomblock}>
                    <Grid container justifyContent="center" spacing={4}>
                        {isLoading ? <CircularProgress sx={{color: 'gray'}}/> : (category === "" ? listProducts : category.map((product) => (
                            <Grid item key ={product.id} xs = {12} sm = {6} md = {4} lg = {3}>
                                <Product product = {product} onAddToCart = {onAddToCart} />
                            </Grid>
                        )))}
                    </Grid>
                </div>
        </main>
        </>
    )
}

export default Products;