import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import actionGetOrders from '../../redux/actions/getOrders';
import dive from '../../functions/dive';
import OrderCard from './components/orderCard';
import langData from './langData'

const Orders = (props) => {
  const classes = useStyles();
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);
  const userPersonalData = useSelector((state) => dive`${state}syncReducer.token.payload.sub`);
  const orders = useSelector((state) => dive`${state}promiseReducer.getOrders.payload.data`);
  const dispatch = useDispatch();

  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);

  useEffect(() => {
    dispatch(actionGetOrders({ user_id: userPersonalData.id_user, order_status: ['Accepted'] }));
  }, []);

  return (
    <Container className={classes.container}>
      {console.log(lang)}
      <Paper
        elevation={0}
        className={classes.buttonContainer}
      >
        <Button
          className={classes.button}
          variant="contained"
        >
          {langData.upcoming[lang]}
        </Button>
        <Button
          className={classes.button}
          variant="contained"
        >
          {langData.past[lang]}
        </Button>
        <Button
          className={classes.button}
          variant="contained"
        >
          {langData.new[lang]}
        </Button>
      </Paper>
      {orders ? orders.map((order) => <OrderCard key={order.id} orderId={order.id} startAdress={order.route_points[0].address} finishAdress={order.route_points[1].address} transferDate={order.timestamp} transferDistance={450} />) : ''}
    
    </Container>
  );
};

export default withRouter(Orders);
