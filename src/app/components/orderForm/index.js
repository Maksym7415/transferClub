import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import SimpleForm from './simpleForm';
import CarsTypes from './intermediateForm/carsTypes';
import ExtendedForm from './extendedForm';
import PriceOffer from './intermediateForm/priceOffer';


const OrderForm = (props) => {
  const classes = useStyles()();

  return (
      <Container className={classes.searchFormContainer} maxWidth="lg" >
            <SimpleForm />
            <PriceOffer />
            <CarsTypes />
            <ExtendedForm />
          <Button className={classes.getOffers} variant="contained" color="secondary">
              Get offers
            </Button>
      </Container>
  );
};

export default OrderForm;
