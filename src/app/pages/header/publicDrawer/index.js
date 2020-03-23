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
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
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
                  <div style={{ whiteSpace: 'pre-wrap', maxWidth: '45%' }}>{loginData.name}</div>
              </>
              : <span>{langData.signIn[props.lang]}</span>
            }
            <div className={classes.toolbarIcon}>
              {loginData
                ? <IconButton style={{ padding: '0' }} onClick={() => dispatch(actionLogout())}>
                  <Icon style={{ fontSize: '18px' }} className='fas fa-sign-out-alt' />
                </IconButton>
                : <IconButton style={{ padding: '0' }} onClick={() => props.history.push(`/${props.lang}/auth`)}>
                  <Icon style={{ fontSize: '18px' }} className='fas fa-sign-in-alt' />
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
              <AddToPhotosIcon />
            </ListItemIcon>
            <ListItemText primary={langData.addOrder[props.lang]} />
          </ListItem>
          <ListItem button component={Link} to={`/${props.lang}/orders`}>
            <ListItemIcon>
              <Icon style={{ fontSize: '20px' }} className='fas fa-random' />
            </ListItemIcon>
            <ListItemText primary={langData.myOrders[props.lang]} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
            <Icon style={{ fontSize: '20px' }} className='fas fa-money-check-alt' />
            </ListItemIcon>
            <ListItemText primary={langData.myPayments[props.lang]} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
            <Icon style={{ fontSize: '20px' }} className='fas fa-archive' />
            </ListItemIcon>
            <ListItemText primary={langData.statistics[props.lang]} />
          </ListItem>
        </Drawer>
  );
};

export default withRouter(PublicDrawer);
