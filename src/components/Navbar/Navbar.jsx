import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import CartHover from './CartHover';

import logo from '../../assets/commerce.png';
import styles from './styles';
import useClasses from '../../hook';

const Navbar = ({ totalItems, cart, show, handleMouseEnter, handleMouseLeave }) => {
    const classes = useClasses(styles);
    const location = useLocation();

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Tech E-Commerce
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <CartHover totalItems={totalItems} 
                                   cart={cart} 
                                   show={show} 
                                   handleMouseEnter={handleMouseEnter} 
                                   handleMouseLeave={handleMouseLeave} 
                        />
                    </div>)}
                </Toolbar>               
            </AppBar>        
        </div>
    )
}

export default Navbar