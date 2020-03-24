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
import actionRejectOffer from '../../../../redux/actions/changeOfferStatus';

const OrderDetails = (props) => {
  const classes = useStyles();
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);
  const order = useSelector((state) => dive`${state}promiseReducer.getOrders.payload.data`).filter((item) => item.id === +props.orderId)[0];
  const [nameSign, setNameSign] = useState('');
  const [flightTrainNumber, setFlightTrainNumber] = useState('');
  const [promocode, setPromocode] = useState('');
  const dispatch = useDispatch();

  const handleNameSign = (e) => setNameSign(e.target.value);
  const handleFlightTrainNumber = (e) => setFlightTrainNumber(e.target.value);
  const handlePromocode = (e) => setPromocode(e.target.value);

  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);

  return (
    <Container className={classes.orderDetailsRoot}>
      <div className={classes.orderDetailsContainer}>
        <Container className={classes.formsContainer}>
          <Grid className={classes.gridContainer} container spacing={1}>
            <Grid className={classes.gridRow} container item xs={12} spacing={0}>
              <Grid style={{ minWidth: '200px' }} item xs={6}>
                <Paper elevation={0}>{langData.passengers[lang]}</Paper>
              </Grid>
              <Grid style={{ minWidth: '200px' }} item xs={6}>
                <Paper elevation={0}>{order && order.adults}</Paper>
              </Grid>
            </Grid>
            {!!order.nameSign && <Grid className={classes.gridRow} container item xs={12} spacing={0}>
              <Grid style={{ minWidth: '200px' }} item xs={6}>
                <Paper elevation={0}>{langData.nameSign[lang]}</Paper>
              </Grid>
              <Grid style={{ minWidth: '200px' }} item xs={6}>
                <Paper elevation={0}>{order && order.nameSign}</Paper>
              </Grid>
            </Grid>}
            {!!order.flight_train_number && <Grid className={classes.gridRow} container item xs={12} spacing={0}>
              <Grid style={{ minWidth: '200px' }} item xs={6}>
                <Paper elevation={0}>{langData.flightTrainNumber[lang]}</Paper>
              </Grid>
              <Grid style={{ minWidth: '200px' }} item xs={6}>
                <Paper elevation={0}>{order && order.flight_train_number}</Paper>
              </Grid>
            </Grid>}
            {!!order.price && <Grid className={classes.gridRow} container item xs={12} spacing={0}>
              <Grid style={{ minWidth: '200px' }} item xs={6}>
                <Paper elevation={0}>{langData.clientPrice[lang]}</Paper>
              </Grid>
              <Grid style={{ minWidth: '200px' }} item xs={6}>
                <Paper elevation={0}>{order && order.price}$</Paper>
              </Grid>
            </Grid>}
            <Grid className={classes.gridRow} container item xs={12} spacing={0}>
              <Grid style={{ minWidth: '200px' }} item xs={6}>
                <Paper elevation={0}>{langData.transportTypes[lang]}</Paper>
              </Grid>
              <Grid style={{ minWidth: '200px' }} item xs={6}>
                <Paper elevation={0}>
                  {order.vehicles || 'Standart'}
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.mapContainer}>
          <Map width='100%' height='100%' marker={<MapMarker />} />
        </Container>
      </div>
      <Button className={classes.buttonReject} variant="contained" color="primary">{langData.cancelRequest[lang]}</Button>
    </Container>
  );
};

export default withRouter(OrderDetails);
