import React, { useState } from 'react';
import Card from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';

const CarsTypes = (props) => {
  const classes = useStyles();


  return (
    <>
      <Container className={`form-cars ${classes.cars}`}>
        <div>
          <Card className={classes.carsCard}>
           <p>Econom</p>
          </Card>
          <Card className={classes.carsCard}>
            Econom
          </Card>
          <Card className={classes.carsCard}>
            Econom
          </Card>
        </div>
        <div>
          <Card className={classes.carsCard}>
            Econom
          </Card>
          <Card className={classes.carsCard}>
            Econom
          </Card>
          <Card className={classes.carsCard}>
            Econom
          </Card>
        </div>
      </Container>
    </>
  );
};

export default CarsTypes;
