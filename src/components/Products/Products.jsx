import React from 'react';
import {Grid} from '@mui/material';

import Product from './Product/Product';
import styles from './styles';
import useClasses from '../../hook';
import block from '../../assets/block.png';

const Products = ({ products, onAddToCart }) => {
    const classes = useClasses(styles);
    return (
        <>
        <img src={block} alt="block" className={classes.image}/>
        <main className={classes.content}>
                <div className={classes.toolbar} />
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