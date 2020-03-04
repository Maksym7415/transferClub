import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import SwapCallsIcon from '@material-ui/icons/SwapCalls';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Icon from '@material-ui/core/Icon';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Header from '../header';
import useStyle from '../styles';

const Orders = (props) => {
  const classes = useStyle()();

  return (
    <div className={classes.client}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <h2 className={classes.orderHeader}>Orders history</h2>
        <div className={`orders ${classes.orders}`}>
          <Grid direction='column' container spacing={3}>
            <Grid item xs>
              <Paper className={`order-item ${classes.orderItem}`}>
                <div className={classes.orderItemContainer}>
                  <div><CheckCircleOutlineIcon/> <span>12.02.20</span><span>6000UAH</span></div>
                  <div>
                    <div>
                      <FiberManualRecordIcon />
                      <p>Kharkiv</p>
                    </div>
                    <SwapCallsIcon />
                    <div>
                      <FiberManualRecordIcon />
                      <p>Kiev</p>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
          {/* <Box className={classes.orderItem}>
            <div>
              <span>12.02.20</span>
              <p>From: Kiev</p>
              <p>To: Kharkiv</p>
            </div>
            <p>Price: 6000UAH</p>
          </Box> */}
        </div>
      </main>
    </div>
  );
};

export default Orders;
