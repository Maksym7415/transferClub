import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import useStyles from '../theme/styleTheme';


import App from '../App';
import Admin from './privateRouting/admin';
import AdminPage from '../pages/Admin/Admin';
import ProgilePage from '../pages/Admin/Profile';
import RegistrationPage from '../pages/Admin/Registration';
import ClientPage from '../pages/client';
import Orders from '../pages/client/orders';
import Directions from '../components/map/directions';
import MapLoader from '../components/map/loader';

const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};
function Router(props) {
  return (
        <Fragment>
          <Switch>
          <MapLoader>
            <Route component = {AdminPage} exact path = '/admin'/>
            <Route component = {ProgilePage} exact path = '/admin/myProfile'/>
            <Route component = {RegistrationPage} exact path = '/admin/registration'/>
            <Route component = {ClientPage} exact path = '/client'/>
            <Route component = {Orders} exact path = '/client/orders'/>
            <Route component = {Orders} exact path = '/client/orders'/>
            <Route component = {Directions} exact path = '/client/route'/>
            </MapLoader>
          </Switch>
        </Fragment>
  );
}


export default Router;
