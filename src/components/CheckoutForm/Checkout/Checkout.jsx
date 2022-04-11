import React, { useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material'

import styles from './styles';
import useClasses from '../../../hook';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping address', 'Payment details']

const Checkout = () => {
  const classes = useClasses(styles);
  const [activeStep, setActiveStep] = useState(0);

  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

  const Confirmation = () => (
        <div>
            Confirmation
        </div>
  )

  return (
    <>
        <div className={classes.toolbar} />
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
                {activeStep === steps.length ? <Confirmation /> : <Form/>}
            </Paper>
        </main>
    </>
  )
}

export default Checkout