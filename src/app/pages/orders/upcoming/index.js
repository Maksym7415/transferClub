import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';
import actionGetOrders from '../../../redux/actions/getOrders';
import dive from '../../../functions/dive';
import OrderCard from '../components/orderCard';
import langData from './langData';
import NavButtons from '../components/navButtons';

const Orders = (props) => {
  const classes = useStyles();
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);
  const userId = useSelector((state) => dive`${state}syncReducer.token.payload.sub.id_user`);
  const orders = useSelector((state) => dive`${state}promiseReducer.getOrders.payload.data`);
  const dispatch = useDispatch();

  const handleGetBids = (id) => {
    props.history.push(`/${lang}/orders/${id}`);
  };

  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);

  useEffect(() => {
    dispatch(actionGetOrders({ user_id: userId, order_status: ['Accepted'] }));
  }, []);

  return (
    <Container className={classes.container}>
      <NavButtons />
      {orders ? orders.map((order) => <OrderCard
          key={order.id}
          orderId={order.id}
          startAdress={order.route_points[1].address}
          finishAdress={order.route_points[0].address}
          transferDate={order.timestamp}
          transferDistance={order.distance}
          textValue={!!order.bids.length}
          getBids={() => handleGetBids(order.id)}
        />)
        : ''}

    </Container>
  );
};

export default withRouter(Orders);
