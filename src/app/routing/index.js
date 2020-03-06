import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import useStyles from '../theme/styleTheme';


import App from '../App';
import ClientPage from '../pages/client';
import Orders from '../pages/client/orders';
import MapLoader from '../components/map/loader';
import Header from '../pages/header';
import MakeOrder from '../pages/makeOrder';

const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};
function Router(props) {
  return (
        <Fragment>
          <Header/>
          <Switch>
            <MapLoader>
              <Route component = {ClientPage} exact path = '/:lang'/>
              <Route component = {MakeOrder} exact path = '/:lang/order'/>
            </MapLoader>
          </Switch>
        </Fragment>
  );
}


export default Router;
