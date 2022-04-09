import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'

import styles from './styles';
import useClasses from '../../../hook';

const Product = ({ product }) => {
    const classes = useClasses(styles);
        return (
            <Card className = {classes.root}>
                <CardMedia className = {classes.media} image={product.image} title = {product.name} />
                <CardContent>
                    <div className = {classes.cardContent}>
                        <Typography variant = "h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant = "h5" >
                            {product.price}
                        </Typography>
                    </div>
                    <Typography variant = "body2" color="textSecondary">
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart">
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        )
}

export default Product