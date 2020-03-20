import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MapLoader from '../components/map/loader';
import Header from '../pages/header';
import MakeOrder from '../pages/makeOrder';
import Pay from '../pages/payment';
import Public from '../pages/public';
import SignIn from '../pages/auth/login';
import SignUp from '../pages/auth/register';
import Authorization from '../pages/auth';
import Orders from '../pages/orders';

function Router(props) {
  return (
        <Fragment>
          <MapLoader>
            <div className='drawer-content-container'>
              <Header/>
              <Switch>
                <Redirect exact from='/' to='/ru' />
                <Route component = {Public} exact path = '/:lang'/>
                <Route component = {Authorization} exact path = '/:lang/auth'/>
                <Route component = {SignIn} exact path = '/:lang/login'/>
                <Route component = {SignUp} exact path = '/:lang/register'/>
                <Route component = {MakeOrder} exact path = '/:lang/order' />
                <Route component = {Pay} exact path = '/:lang/pay'/>
                <Route component = {Orders} exact path = '/:lang/orders'/>
                <Route component = {() => <div>not found</div>} />
              </Switch>
            </div>
          </MapLoader>
        </Fragment>
  );
}


export default Router;
