import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';


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
            <ThemeProvider theme={theme}> */}
                <Switch>
                {/* <Route component = {App} fallBack = {'/56756'} path = '/'/> */}
                <Route component = {AdminPage} path = '/'/>
                <Route component = {ProgilePage} path = '/myProfile'/>
                </Switch>
            </ThemeProvider>
        </Fragment>
  );
}


export default Router;
