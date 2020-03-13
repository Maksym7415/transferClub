import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import clsx from 'clsx';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Input from '@material-ui/core/Input';
import PaymentIcon from '@material-ui/icons/Payment';
import useStyles from './styles';
import LangMenu from '../../components/changeLang';


const Header = (props) => {
  const classes = useStyles()();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(!true);
  };
  const handleDrawerClose = () => {
    setOpen(!false);
  };

  return (
    <>
      <CssBaseline/>
      <AppBar position="absolute" className={clsx(classes.appBar, !open && classes.appBarShift)} >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              // onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, !open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Transfer Club
            </Typography>
            <LangMenu />
          </Toolbar>
        </AppBar>
        {/* <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <div>
              <img />
              <span>Client name</span>
            </div>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider/>
          <ListItem button component={Link} to='/client'>
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
        </Drawer> */}
    </>
  );
};

export default withRouter(Header);
