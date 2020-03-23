import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import langData from './langData';
import { useStyles } from './styles';
import OrderDetails from '../orderDetails';


const OrderCard = (props) => {
  const classes = useStyles();
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);
  const [openCollapse, setOpenCollapse] = useState(false);

  const handleOpenCollapse = () => setOpenCollapse(!openCollapse);

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
        <CardActions style={{ padding: '0' }}>
          {props.location.pathname === `/${lang}/orders`
            ? <Button
                className={classes.button}
                variant="contained"
                onClick={props.getBids}
              >
                {props.textValue ? langData.viewOffers[lang] : langData.details[lang]}
              </Button>
            : props.location.pathname === `/${lang}/waiting_payment`
              ? <div className={classes.collapseContainer}>
                  <Paper
                    elevation={0}
                    className={classes.orderDetailsCollapse}
                    onClick={handleOpenCollapse}
                  >
                    <Typography>{langData.orderDetails[lang]}</Typography>
                    {openCollapse ? <ExpandLess /> : <ExpandMore />}
                    <Button
                      className={classes.button}
                      variant="contained"
                      onClick={props.pay}
                    >
                      {langData.pay[lang]}
                    </Button>
                  </Paper>
                  <Collapse in={openCollapse} timeout={openCollapse ? 1000 : 1000} unmountOnExit>
                    <OrderDetails />
                  </Collapse>
                </div>
              : <div className={classes.collapseContainer}>
              <Paper
                elevation={0}
                className={classes.orderDetailsCollapse}
                onClick={handleOpenCollapse}
              >
                <Typography>{langData.orderDetails[lang]}</Typography>
                {openCollapse ? <ExpandLess /> : <ExpandMore />}
              </Paper>
              <Collapse in={openCollapse} timeout={openCollapse ? 1000 : 1000} unmountOnExit>
                <OrderDetails />
              </Collapse>
            </div>
          }
        </CardActions>
      </Card>
    </>
  );
};

export default withRouter(OrderCard);
