import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import useStyle from './styles';

const Contacts = (props) => {
  const classes = useStyle()();

  useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    <div>
      <Paper className={classes.contentItem}>
        <h3>Email</h3>
        <Paper className={classes.contactsContent}>
          <Icon
            style={{ margin: '0 10px', fontSize: '20px' }}
            className='fas fa-at'
          />
          <Input style={{ width: '100%' }} placeholder='Enter email' disableUnderline={true} />
        </Paper>
      </Paper>
      <Paper className={classes.contentItem}>
        <h3>Phone</h3>
        <Paper className={classes.contactsContent}>
          <Icon
            style={{ margin: '0 10px', fontSize: '20px' }}
            className='fas fa-at'
          />
          <Input style={{ width: '100%' }} placeholder='Enter phone' disableUnderline={true} />
        </Paper>
      </Paper>
    </div>
  );
};

export default Contacts;
