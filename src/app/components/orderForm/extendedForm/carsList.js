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
              name='1'
              checked={props.checked['1'] || false}
              onChange={props.handleChange}
              // value="primary"
              // inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span>Economy</span>
          </Paper>
          <Paper className={classes.carsListItem}>
            <Checkbox
              name='2'
              checked={props.checked['2'] || false}
              onChange={props.handleChange}
              // value="primary"
              // inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span>Comfort</span>
          </Paper>
          <Paper className={classes.carsListItem}>
            <Checkbox
              name='3'
              checked={props.checked['3'] || false}
              onChange={props.handleChange}
              // value="primary"
              // inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span>Business</span>
          </Paper>
          <Paper className={classes.carsListItem}>
            <Checkbox
              name='4'
              checked={props.checked['4'] || false}
              onChange={props.handleChange}
              // value="primary"
              // inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span>Premium</span>
          </Paper>
          <Paper className={classes.carsListItem}>
            <Checkbox
              name='5'
              checked={props.checked['5'] || false}
              onChange={props.handleChange}
              // value="primary"
              // inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span>VIP</span>
          </Paper>
          <Paper className={classes.carsListItem}>
            <Checkbox
              name='6'
              checked={props.checked['6'] || false}
              onChange={props.handleChange}
              // value="primary"
              // inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span>SUV</span>
          </Paper>
          <Paper className={classes.carsListItem}>
            <Checkbox
              name='7'
              checked={props.checked['7'] || false}
              onChange={props.handleChange}
              // value="primary"
              // inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span>Van</span>
          </Paper>
          <Paper className={classes.carsListItem}>
            <Checkbox
              name='8'
              checked={props.checked['8'] || false}
              onChange={props.handleChange}
              // value="primary"
              // inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span>Minibus</span>
          </Paper>
        </Container>
      </Container>
  );
};

export default CarsList;
