import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './styles';
import dive from '../../../functions/dive';
import NavButtons from '../components/navButtons';
import OrderCard from '../components/orderCard';
import actionGetOrders from '../../../redux/actions/getOrders';
import OrderDetails from '../components/orderDetails';

const ViewOffers = (props) => {
  const classes = useStyles();
  const userPersonalData = useSelector((state) => dive`${state}syncReducer.token.payload.sub.id_user`);
  const [orderId] = useState(props.location.pathname.split('/')[props.location.pathname.split('/').length - 1]);
  const order = useSelector((state) => !!(dive`${state}promiseReducer.getOrders.payload.data`) && dive`${state}promiseReducer.getOrders.payload.data`.filter((item) => item.id === +orderId)[0]); // checking for availeability of order in redux. if false running actionGetOrder
  const dispatch = useDispatch();

  useEffect(() => {
    if (!order) {
      dispatch(actionGetOrders({ user_id: userPersonalData, order_status: ['Accepted'] }));
    }
  }, []);

  return (
    <Container className={classes.container}>
      <NavButtons/>
      {order
        ? <OrderCard
            orderId={order.id}
            startAdress={order.route_points[0].address}
            finishAdress={order.route_points[1].address}
            transferDate={order.timestamp}
            transferDistance={450}
            textValue={true}
          />
        : ''}
    </Container>
  );
};

export default withRouter(ViewOffers);
