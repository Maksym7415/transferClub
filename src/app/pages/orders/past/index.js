import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './styles';
import dive from '../../../functions/dive';
import NavButtons from '../components/navButtons';
import OrderCard from '../components/orderCard';
import OrderDetails from '../components/orderDetails';
import OffersCard from '../components/offersCard';

const PastOrders = (props) => {
  const classes = useStyles();
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);
  const confirmOfferResponse = useSelector((state) => dive`${state}promiseReducer.confirmBid.payload`);
  const dispatch = useDispatch();

  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);

  return (
    <Container className={classes.container}>
      <NavButtons />
      past
    </Container>
  );
};

export default withRouter(PastOrders);
