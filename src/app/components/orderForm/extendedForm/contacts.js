import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import PhoneInput from 'react-phone-input-2';
import { useStyles } from './styles';
import 'react-phone-input-2/lib/material.css';

const Contacts = (props) => {
  const classes = useStyles();

  useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    <div style={{ width: '100%', marginBottom: '20px' }}>
      <Paper elevation={0} className={classes.contentItem}>
        <h3>Email</h3>
        <Paper className={classes.contactsContent}>
          <Icon
            style={{ margin: '0 10px', fontSize: '20px' }}
            className='fas fa-at'
          />
          <Input style={{ width: '100%' }} onChange={props.handleChangeEmail} value={props.email} placeholder='Enter email' disableUnderline={true} />
        </Paper>
      </Paper>
      <Paper elevation={0} className={classes.contentItem}>
        <h3>Phone</h3>
        <Paper className={classes.contactsContent}>
          <PhoneInput
            placeholder="Enter phone number"
            country="ua"
            value={props.phone}
            onChange={props.setPhone}
          />
        </Paper>
      </Paper>
    </div>
  );
};

export default Contacts;
