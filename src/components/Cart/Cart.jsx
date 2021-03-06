import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import styles from './styles';
import useClasses from '../../hook';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  const classes = useClasses(styles);
  
  const EmptyCart = () => (
    <Typography sx={{fontFamily: 'Lato, sans-serif'}} variant = "subtitle1"> You have no items in your shopping cart 
        <Link to ="/" className={classes.link}> start adding some!</Link>
    </Typography>
  )

  const FilledCart = () => (
    <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography sx={{fontFamily: 'Lato, sans-serif', fontWeight: 'bold',}} variant="h4">
                Subtotal: { cart.subtotal.formatted_with_symbol }
            </Typography>
            <div>
                <Button sx={{fontFamily: 'Lato, sans-serif'}} 
                        className={classes.emptyButton} size="large" type="button" variant="contained" 
                        color="secondary" onClick={handleEmptyCart}>
                    Empty Cart
                </Button>
                <Button sx={{fontFamily: 'Lato, sans-serif'}}
                        component={Link} to="/checkout" className={classes.checkoutButton} 
                        size="large" type="button" variant="contained" color="primary">
                    Checkout
                </Button>
            </div>
        </div>
    </>
  );

  if(!cart.line_items)
    return 'Loading ...';

  return (
    <main className={classes.content}>
        <Container className={classes.container}>
            <div className={classes.toolbar}/>
            <br />
            <Typography sx={{fontFamily: 'Lato, sans-serif', fontWeight: 'bold',}} className={classes.title} variant="h3" gutterBottom>
                Your Shopping Cart
            </Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    </main>
  )
}

export default Cart