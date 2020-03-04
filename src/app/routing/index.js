import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import useStyles from '../theme/styleTheme';


import App from '../App';
import Admin from './privateRouting/admin';
import AdminPage from '../pages/Admin/Admin';
import ProgilePage from '../pages/Admin/Profile';
import RegistrationPage from '../pages/Admin/Registration';

const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};
function Router(props) {
  return (
        <Fragment>

            {/* <ThemeProvider > */}
                <Switch>
                {/* <Route component = {App} fallBack = {'/56756'} path = '/'/> */}
                <Route component = {AdminPage} exact path = '/'/>
                <Route component = {ProgilePage} exact path = '/myProfile'/>
                <Route component = {RegistrationPage} exact path = '/registration'/>
                </Switch>
            {/* </ThemeProvider> */}
        </Fragment>
  );
}


export default Router;
