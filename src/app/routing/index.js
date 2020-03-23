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
import Orders from '../pages/orders/upcoming';
import ViewOffers from '../pages/orders/viewOffers';
import PastOrders from '../pages/orders/past';
import WaitingPayment from '../pages/orders/waitingPayment';

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
                <Route component = {ViewOffers} exact path = '/:lang/orders/:id'/>
                <Route component = {PastOrders} exact path = '/:lang/past_orders'/>
                <Route component = {WaitingPayment} exact path = '/:lang/waiting_payment'/>
                <Route component = {() => <div>not found</div>} />
              </Switch>
            </div>
          </MapLoader>
        </Fragment>
  );
}


export default Router;
