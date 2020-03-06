import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Directions from '../../components/map/directions';
import useStyles from '../client/styles';
import Map from '../../components/map/map';
import MapMarker from '../../components/map/mapMarker';
import OrderForm from '../../components/orderForm';


const MakeOrder = (props) => {
  const classes = useStyles()();
  /* let [autoComplete, setAutocomplete] = useState(null);

  const handleOnLoad = (e) => setAutocomplete(autoComplete = e);
  const handlePlaceChanged = () => {
    if (autoComplete !== null) {
      console.log(autoComplete.getPlace());
    }
  };

  const classes = useStyles()();
  const [from, setFrom] = useState('');
  const [select, setSelect] = useState('Duration');
  const [to, setTo] = useState('');
  const [tabs, setTabs] = useState(0);

  const handleChangeTabs = (event, newValue) => setTabs(newValue);

  const handleChangeIndex = (index) => setTabs(index);

  const handleChangeSelect = (e) => setSelect(e.target.value);

  const handleFrom = (e) => setFrom(e.target.value);

  const handleTo = (e) => setTo(e.target.value);
  */

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
