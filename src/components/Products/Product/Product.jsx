import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'

import styles from './styles';
import useClasses from '../../../hook';

const Product = ({ product, onAddToCart }) => {
    const classes = useClasses(styles);
    
    return (
        <Card className = {classes.root} style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
                <CardMedia className = {classes.media} image={product.image.url} title = {product.name} />
                <CardContent>
                    <div className = {classes.cardContent}>
                        <Typography sx={{fontFamily: 'Lato, sans-serif', fontWeight: 'bold',}} variant = "h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography sx={{fontFamily: 'Lato, sans-serif', fontWeight: 'bold',}} variant = "h5">
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography sx={{fontFamily: 'Lato, sans-serif'}} dangerouslySetInnerHTML={{ __html: product.description}} variant = "body2" color="textSecondary"/>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
        </Card>
    )
}

export default Product