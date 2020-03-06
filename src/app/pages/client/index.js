import React, { useState } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './styles';
import MakeOrder from '../makeOrder';
import Header from '../header';
import OrderForm from '../../components/orderForm';

const ClientPage = (props) => {
  const classes = useStyles()();

  return (
    <div className={classes.client}>
      <CssBaseline />
      {/* <Header /> */}
      <main className={classes.content}>
        <OrderForm />
        {/* <Map /> */}
      </main>
    </div>
  );
};

export default ClientPage;
