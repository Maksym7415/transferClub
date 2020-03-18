import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import useStyle from '../styles';

const CarsList = (props) => {
  const classes = useStyle()();


  return (
      <div className={classes.carsContainer}>
        <Paper>
          <Checkbox
            name='econom'
            checked={props.checked.econom || false}
            onChange={props.handleChange}
            // value="primary"
            // inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>Econom</span>
        </Paper>
        <Paper>
          <Checkbox
            name='standart'
            checked={props.checked.standart || false}
            onChange={props.handleChange}
            // value="primary"
            // inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>Standart</span>
        </Paper>
        <Paper>
          <Checkbox
            name='buiseness'
            checked={props.checked.buiseness || false}
            onChange={props.handleChange}
            // value="primary"
            // inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>Buiseness</span>
        </Paper>
        <Paper>
          <Checkbox
            name='Van'
            checked={props.checked.Van || false}
            onChange={props.handleChange}
            // value="primary"
            // inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>Van</span>
        </Paper>
        <Paper>
          <Checkbox
            name='bus'
            checked={props.checked.bus || false}
            onChange={props.handleChange}
            // value="primary"
            // inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>Bus</span>
        </Paper>
        <Paper>
          <Checkbox
            name='comfort'
            checked={props.checked.comfort || false}
            onChange={props.handleChange}
            // value="primary"
            // inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>Comfort</span>
        </Paper>
      </div>
  );
};

export default CarsList;
