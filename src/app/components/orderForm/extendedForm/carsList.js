import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';

const CarsList = (props) => {
  const classes = useStyles();


  return (
      <Container className={classes.carsContainer}>
        <Container className={classes.carsContainerLabel}>
          Transport Types
        </Container>
        <Container className={classes.carsContainerList}>
          <Paper className={classes.carsListItem}>
            <Checkbox
              name='econom'
              checked={props.checked.econom || false}
              onChange={props.handleChange}
              // value="primary"
              // inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span>Econom</span>
          </Paper>
          <Paper className={classes.carsListItem}>
            <Checkbox
              name='standart'
              checked={props.checked.standart || false}
              onChange={props.handleChange}
              // value="primary"
              // inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span>Standart</span>
          </Paper>
          <Paper className={classes.carsListItem}>
            <Checkbox
              name='buiseness'
              checked={props.checked.buiseness || false}
              onChange={props.handleChange}
              // value="primary"
              // inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span>Buiseness</span>
          </Paper>
          <Paper className={classes.carsListItem}>
            <Checkbox
              name='Van'
              checked={props.checked.Van || false}
              onChange={props.handleChange}
              // value="primary"
              // inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span>Van</span>
          </Paper>
          <Paper className={classes.carsListItem}>
            <Checkbox
              name='bus'
              checked={props.checked.bus || false}
              onChange={props.handleChange}
              // value="primary"
              // inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span>Bus</span>
          </Paper>
          <Paper className={classes.carsListItem}>
            <Checkbox
              name='comfort'
              checked={props.checked.comfort || false}
              onChange={props.handleChange}
              // value="primary"
              // inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span>Comfort</span>
          </Paper>
        </Container>
      </Container>
  );
};

export default CarsList;
