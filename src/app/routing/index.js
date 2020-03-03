import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import useStyles from '../theme/styleTheme';


import App from '../App';
import Admin from './privateRouting/admin';
import AdminPage from '../pages/Admin/Admin';
import ProgilePage from '../pages/Admin/Profile';

const theme = makeStyles((theme) => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}));

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
