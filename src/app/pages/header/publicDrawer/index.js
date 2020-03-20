import React, { useEffect } from 'react';
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
import Avatar from '@material-ui/core/Avatar';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './styles';
import langData from './langData';
import dive from '../../../functions/dive';
import actionLogout from '../../../redux/actions/logoutAction';

const PublicDrawer = (props) => {
  const classes = useStyles();
  const loginData = useSelector((state) => dive`${state}syncReducer.token.payload.sub`);
  const dispatch = useDispatch();

  useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, props.open && classes.drawerPaperClose),
          }}
          open={props.open}
        >
          <div className={classes.headerContainer}>
            {loginData
              ? <>
                  <Avatar style={{ marginRight: '20px' }} alt='Remy Sharp' src='' />
                  <span>Name</span>
              </>
              : <span>{langData.signIn[props.lang]}</span>
            }
            <div className={classes.toolbarIcon}>
              {loginData
                ? <IconButton style={{ padding: '0' }} onClick={() => dispatch(actionLogout())}>
                  <Icon className='fas fa-sign-out-alt' />
                </IconButton>
                : <IconButton style={{ padding: '0' }} onClick={() => props.history.push(`/${props.lang}/auth`)}>
                  <Icon className='fas fa-sign-in-alt' />
                </IconButton>
              }
              <IconButton style={{ padding: '0' }} onClick={props.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
          </div>
          <Divider/>
          <ListItem button component={Link} to={`/${props.lang}/order`}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Add order" />
          </ListItem>
          <ListItem button component={Link} to={`/${props.lang}/orders`}>
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
