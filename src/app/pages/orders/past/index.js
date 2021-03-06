import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './styles';
import dive from '../../../functions/dive';
import NavButtons from '../components/navButtons';
import OrderCard from '../components/orderCard';
import actionGetOrders from '../../../redux/actions/getOrders';

const PastOrders = (props) => {
  const classes = useStyles();
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);
  const userId = useSelector((state) => dive`${state}syncReducer.token.payload.sub.id_user`);
  const orders = useSelector((state) => dive`${state}promiseReducer.getOrders.payload.data`);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetOrders({ user_id: userId, order_status: ['Completed'] }));
  }, []);

  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);

  return (
    <Container className={classes.container}>
      <NavButtons />
      {orders ? orders.map((order) => <OrderCard
          key={order.id}
          orderId={order.id}
          startAdress={order.route_points[1].address}
          finishAdress={order.route_points[0].address}
          transferDate={order.timestamp}
          price={order.price}
          transferDistance={450}
          // textValue={!!order.bids.length}
          // getBids={() => handleGetBids(order.id)}
        />)
        : ''}
    </Container>
  );
};

export default withRouter(PastOrders);
