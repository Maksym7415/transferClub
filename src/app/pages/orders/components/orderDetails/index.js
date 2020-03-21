import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles';
import dive from '../../../../functions/dive';
import langData from './langData';
import Map from '../../../../components/map/map';
import MapMarker from '../../../../components/map/mapMarker';

const OrderDetails = (props) => {
  const classes = useStyles();
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);
  const [order] = useSelector((state) => dive`${state}promiseReducer.getOrders.payload.data`);
  const [nameSign, setNameSign] = useState('');
  const [flightTrainNumber, setFlightTrainNumber] = useState('');
  const [promocode, setPromocode] = useState('');

  const handleNameSign = (e) => setNameSign(e.target.value);
  const handleFlightTrainNumber = (e) => setFlightTrainNumber(e.target.value);
  const handlePromocode = (e) => setPromocode(e.target.value);

  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);

  return (
    <Container className={classes.orderDetailsContainer}>
      <Container className={classes.formsContainer}>
        <div className={classes.orderFormContainer}>
          <Paper className={classes.labelContainer}>
            <p className={classes.formLabel}>{langData.passengers[lang]}</p>
            <p className={classes.formLabel}>{langData.nameSign[lang]}</p>
            <p className={classes.formLabel}>{langData.flightTrainNumber[lang]}</p>
            <p className={classes.formLabel}>{langData.promocode[lang]}</p>
            <p className={classes.formLabel}>{langData.transportTypes[lang]}</p>
          </Paper>
          <Paper className={classes.valuesContainer}>
            <p className={classes.formValue}>{order && order.adults}</p>
            <Input disableUnderline={true} className={classes.formInput} value={nameSign} onChange={handleNameSign} />
            <Input disableUnderline={true} className={classes.formInput} value={flightTrainNumber} onChange={handleFlightTrainNumber} />
            <Input disableUnderline={true} className={classes.formInput} value={promocode} onChange={handlePromocode} />
            <p className={classes.formValue}>{order.vehicles || 'Standart'}</p>
          </Paper>
        </div>
        <Button>{langData.save[lang]}</Button>
        <Button>{langData.cancelRequest[lang]}</Button>
      </Container>
      <Container className={classes.mapContainer}>
        <Map width='100%' height='100%' marker={<MapMarker />} />
      </Container>
    </Container>
  );
};

export default withRouter(OrderDetails);
