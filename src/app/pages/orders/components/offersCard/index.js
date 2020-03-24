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
import DockIcon from '@material-ui/icons/Dock';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import DnsIcon from '@material-ui/icons/Dns';
import langData from './langData';
import { useStyles } from './styles';
import actionConfirmBid from '../../../../redux/actions/changeOfferStatus';


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
        {console.log(!!(props.item.partner_vehicle.vehicle_photos))}
        <CardContent className={classes.contentContainer}>
          <img className={classes.image} alt='car' src={!!(props.item.partner_vehicle.vehicle_photos) ? `http://localhost:8080/${props.item.partner_vehicle.vehicle_photos[0].name}` : '../../../../../images/imageNotFound.png'} />
          <Paper elevation={0} className={classes.infoContainer}>
            <Typography className={classes.carModel}>{`${props.item.partner_vehicle.vehicle.make} ${props.item.partner_vehicle.vehicle.model}, ${props.item.partner_vehicle.year}`}</Typography>
            <p>{props.item.partner_vehicle.vehicle.vehicle_type.type}</p>
            <div className={classes.iconsContainer}>
              {props.item.free_wifi && <WifiIcon/>}
              {props.item.refreshment && <LocalDrinkIcon/>}
              {props.item.phone_charger && <DockIcon/>}
              {props.item.name_sign && <DnsIcon/>}
            </div>
          </Paper>
        </CardContent>
        <CardActions className={classes.buttonPriceContainer}>
          <Paper className={classes.price} elevation={0}>{props.item.price}$</Paper>
          <Button onClick={() => handleConfirm(props.item.bidId, props.orderId)} className={classes.button} variant="contained" color="primary">{langData.book[lang]}</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default withRouter(OffersCard);
