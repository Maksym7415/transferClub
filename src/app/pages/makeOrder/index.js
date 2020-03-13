import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Directions from '../../components/map/directions';
import useStyles from './styles';
import Map from '../../components/map/map';
import MapMarker from '../../components/map/mapMarker';
import OrderForm from '../../components/orderForm';

const MakeOrder = (props) => {
  const classes = useStyles()();

  return (
    <div className={classes.container}>
      <CssBaseline />
      <OrderForm/>
      <Map marker={<MapMarker />} />
      <Directions />
    </div>
  );
};
export default MakeOrder;
