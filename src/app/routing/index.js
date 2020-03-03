import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import useStyles from '../theme/styleTheme';

import App from '../App';
import Admin from './privateRouting/admin';
import AdminPage from '../pages/Admin';

function Router(props) {
  return (
        <Fragment>
            <ThemeProvider>
                <Switch>
                {/* <Route component = {App} fallBack = {'/56756'} path = '/'/> */}
                <Route component = {AdminPage} path = '/'/>
                </Switch>
            </ThemeProvider>
        </Fragment>
  );
}


export default Router;
