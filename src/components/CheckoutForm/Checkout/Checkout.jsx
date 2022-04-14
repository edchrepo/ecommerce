import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material'

import { commerce } from '../../../lib/commerce'

import styles from './styles';
import useClasses from '../../../hook';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping address', 'Payment details']

const Checkout = ({ cart }) => {
  const classes = useClasses(styles);
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  useEffect(() => {
        //create async funct (useeffect cannot be async)
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
                setCheckoutToken(token);
            } catch (error) {

            }
        }
        generateToken();
  }, [])
  
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

  //data param includes all data, not just from the form
  const next = (data) => {
        setShippingData(data);
        nextStep();
  }

  const Form = () => (activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next}/> 
                                       : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} />)

  const Confirmation = () => (
        <div>
            Confirmation
        </div>
  )

  return (
    <>
        <div className={classes.toolbar}/>
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form/>}
            </Paper>
        </main>
    </>
  )
}

export default Checkout