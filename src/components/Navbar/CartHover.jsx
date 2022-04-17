import React from 'react'
import { List, Typography, ListItem, ListItemText, IconButton, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styles from './styles';
import useClasses from '../../hook';

const CartHover = ({ totalItems, cart, show, handleMouseEnter, handleMouseLeave }) => {
  const classes = useClasses(styles);
  return (
    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
        <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart onClick={handleMouseLeave} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        </Badge>
        {show ? 
            totalItems ? 
            <div className={classes.cart}>
                <List disablePadding>
                    {cart.line_items.map((product) => (
                    <ListItem style={{padding: '5px 0'}} key={product.name}>
                        <img src = {product.image.url} alt = {product.id} className={classes.cartImg}/>
                        <ListItemText style={{marginLeft: '10px'}} primary={product.name} secondary={`Quantity: ${product.quantity}`}/>
                        <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                    ))}
                    <ListItem style={{padding: '5px 0'}}>
                        <ListItemText primary="Total"/>
                        <Typography variant="subtitle1" style={{ fontWeight: 700}}>
                            {cart.subtotal.formatted_with_symbol}
                        </Typography>
                    </ListItem>
                </List>
            </div>
            :
            <div className={classes.cart}>
                You have no items in cart
            </div>
            : 
        <></>}
    </IconButton>
  )
}

export default CartHover