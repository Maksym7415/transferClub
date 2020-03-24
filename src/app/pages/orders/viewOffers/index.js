import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './styles';
import dive from '../../../functions/dive';
import NavButtons from '../components/navButtons';
import OrderCard from '../components/orderCard';
import actionGetOrders from '../../../redux/actions/getOrders';
import OffersCard from '../components/offersCard';
import actionDeleteData from '../../../redux/actions/deleteData';

const ViewOffers = (props) => {
  const classes = useStyles();
  const userPersonalData = useSelector((state) => dive`${state}syncReducer.token.payload.sub.id_user`);
  const [orderId] = useState(props.location.pathname.split('/')[props.location.pathname.split('/').length - 1]);
  const order = useSelector((state) => !!(dive`${state}promiseReducer.getOrders.payload.data`) && dive`${state}promiseReducer.getOrders.payload.data`.filter((item) => item.id === +orderId)[0]); // checking for availeability of order in redux. if false running actionGetOrder
  const dispatch = useDispatch();
  const confirmBidResponse = useSelector((state) => dive`${state}promiseReducer.confirmBid.payload`);
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);

  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);

  useEffect(() => {
    if (!order) {
      dispatch(actionGetOrders({ user_id: userPersonalData, order_status: ['Accepted'] }));
    }
  }, []);

  useEffect(() => {
    if (confirmBidResponse) {
      dispatch(actionDeleteData('getOrders'));
      props.history.push(`/${lang}/orders`);
    }
  }, [confirmBidResponse]);

  return (
    <Container className={classes.container}>
      <NavButtons/>
      {order
        ? <OrderCard
            orderId={order.id}
            startAdress={order.route_points[1].address}
            finishAdress={order.route_points[0].address}
            transferDate={order.timestamp}
            transferDistance={order.distance}
            textValue={true}
          />
        : ''
      }
      <Container className={classes.offersContainer}>
        {order
          ? order.bids.map((item) => <OffersCard key={item.id} orderId={order.id} item={item} />)
          : ''
        }
      </Container>
    </Container>
  );
};

export default withRouter(ViewOffers);
