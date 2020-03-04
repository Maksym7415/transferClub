import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../header';
import useStyle from '../styles';

const Orders = (props) => {
  const classes = useStyle()();

  return (
    <div className={classes.client}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.orders}>
          <Grid direction='column' container spacing={3}>
            <Grid item xs>
              <Paper className={classes.orderItem}>
                <div>
                  <div><span></span></div>
                  <p>Kiev</p>
                  <p>Kharkiv</p>
                </div>
                <p>6000UAH</p>
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
