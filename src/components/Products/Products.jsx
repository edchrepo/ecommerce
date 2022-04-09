import React from 'react';
import {Grid} from '@mui/material';

import Product from './Product/Product';
import styles from './styles';
import useClasses from '../../hook';

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://media.istockphoto.com/photos/modern-sport-shoes-picture-id623270836?k=20&m=623270836&s=612x612&w=0&h=C0WdoMeoHYugJy8mVgrTl8p1U8DltiZ25AzzjGY05GA='},
    {id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000'}
];

const Products = () => {
    const classes = useClasses(styles);
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key ={product.id} xs = {12} sm = {6} md = {4} lg = {3}>
                        <Product product = {product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;