import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { useStyles } from './styles';
import dive from '../../../../functions/dive';
import langData from './langData';
import actionRateOrder from '../../../../redux/actions/rateOrder';

const OrderRating = (props) => {
  const classes = useStyles();
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);
  // const [order] = useSelector((state) => dive`${state}promiseReducer..payload.data`);
  const [rating, setRating] = useState(4);
  const dispatch = useDispatch();

  const handleRating = (e) => {
    setRating(e.target.value);
    dispatch(actionRateOrder({ mark: e.target.value, comment: 'string', order_id: props.orderId }));
  };


  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);

  return (
    <Container className={classes.orderRatingContainer}>
      <Typography style={{ marginRight: '20px' }}>{langData.rateTransfer[lang]}</Typography>
      <Rating
          name="simple-controlled"
          value={rating}
          onChange={handleRating}
        />
    </Container>
  );
};

export default withRouter(OrderRating);
