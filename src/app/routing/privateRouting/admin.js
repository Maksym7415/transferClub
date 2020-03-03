/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import dive from '../../functions/dive';

const Admin = (props) => (
    <Route {...props}
        component = {(newProps) => {
          const PageComponent = props.component;
          console.log(props);
          if (props.data === 'manager') {
            return (
          <PageComponent {...newProps}/>
            );
          }
          return (
          <Redirect to = {props.fallBack}/>
          );
        }}
    />
);
export default connect(
  (state) => ({ data: dive`${state}syncReducer.token.token.sub.role` }),
)(Admin);
