import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router';
import WifiIcon from '@material-ui/icons/Wifi';
import langData from './langData';
import { useStyles } from './styles';
import actionConfirmBid from '../../../../redux/actions/confirmOffer';


const OffersCard = (props) => {
  const classes = useStyles();
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);
  const dispatch = useDispatch();

  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);

  const handleConfirm = (bidId, orderId) => dispatch(actionConfirmBid({ bid_id: bidId, bid_status: 'Accepted', order_id: orderId }));

  return (
    <>
      <Card className={classes.container} variant="outlined">
        <CardContent className={classes.contentContainer}>
          <img className={classes.image} alt='car' src='../../../../../images/imageNotFound.png'/>
          <Paper elevation={0} className={classes.infoContainer}>
            <Typography className={classes.carModel}>{props.car}</Typography>
            <p>{props.carType}</p>
            <WifiIcon/>
          </Paper>
        </CardContent>
        <CardActions className={classes.buttonPriceContainer}>
          <Paper className={classes.price} elevation={0}>{props.price}$</Paper>
          <Button onClick={() => handleConfirm(props.bidId, props.orderId)} className={classes.button} variant="contained" color="primary">{langData.book[lang]}</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default withRouter(OffersCard);
