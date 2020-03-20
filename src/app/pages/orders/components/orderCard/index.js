import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router';
import { useStyles } from './styles';
import langData from './langData';

const OrderCard = (props) => {
  const classes = useStyles();
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);

  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);

  return (
    <>
      <Card
        variant="outlined"
        className={classes.orderItem}
      >
        <CardContent>
          <Typography className={classes.orderId}>{langData.transferReq[lang]} #{props.orderId}</Typography>
          <Paper
            elevation={0}
            className={`address ${classes.address}`}
          >
            <div className='address-label'>A</div>
            <div>
              <p>{props.startAdress}</p>
              <span className='order-date'>{props.transferDate}</span>
            </div>
          </Paper>
          <Paper
            elevation={0}
            className={`address ${classes.address}`}
          >
            <div className='address-label'>B</div>
            <div>
              <p>{props.finishAdress}</p>
              <span>{`${props.transferDistance} ${langData.km[lang]}`}</span>
            </div>
          </Paper>
        </CardContent>
      </Card>
    </>
  );
};

export default withRouter(OrderCard);
