import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';
// import actionGetOrders from '../../../../redux/actions/getOrders';
// import dive from '../../../../functions/dive';
import langData from './langData';

const NavButtons = (props) => {
  const classes = useStyles();
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);

  const handleUpcoming = () => props.history.push(`/${lang}/orders`);
  const handlePast = () => props.history.push(`/${lang}/past_orders`);
  const handleNew = () => props.history.push(`/${lang}/order`);
  const handleWaitingPayment = () => props.history.push(`/${lang}/waiting_payment`);

  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);

  return (
    <>
    <Paper
        elevation={0}
        className={classes.buttonContainer}
      >
        <Button
          className={classes.button}
          variant="contained"
          onClick={handleUpcoming}
        >
          {langData.upcoming[lang]}
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          onClick={handlePast}
        >
          {langData.past[lang]}
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          onClick={handleNew}
        >
          {langData.new[lang]}
        </Button>
        <Button
          className={classes.buttonPayment}
          variant="contained"
          onClick={handleWaitingPayment}
        >
          {langData.waitingPayment[lang]}
        </Button>
      </Paper>
    </>
  );
};

export default withRouter(NavButtons);
