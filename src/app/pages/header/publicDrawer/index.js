import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PaymentIcon from '@material-ui/icons/Payment';
import { useStyles } from './styles';
import langData from './langData';

const PublicDrawer = (props) => {
  const classes = useStyles();


  return (
    <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, props.open && classes.drawerPaperClose),
          }}
          open={props.open}
        >
          <div className={classes.toolbarIcon}>
            <div>
              <img />
              <Link to={`/${props.lang}/auth`}>{langData.signIn[props.lang]}</Link>
            </div>
            <IconButton onClick={props.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider/>
          <ListItem button component={Link} to={`/${props.lang}/order`}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Add order" />
          </ListItem>
          <ListItem button component={Link} to='/client/orders'>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Payment" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Statistics" />
          </ListItem>
        </Drawer>
  );
};

export default withRouter(PublicDrawer);
