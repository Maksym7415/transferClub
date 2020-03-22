import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router';
import { useStyles } from './styles';
import actionSaveOrder from '../../../redux/actions/publicPageOrder';


const CarsTypes = (props) => {
  const classes = useStyles();
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);
  const dispatch = useDispatch();

  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);

  const handleCheckCar = (car) => {
    dispatch(actionSaveOrder(
      {
        from: props.from,
        to: props.to,
        car,
        fromCoordinates: props.fromCoordinates,
        toCoordinates: props.toCoordinates,
        price: props.price,
      },
      'publicPageOrder',
    ));
    props.history.push(`/${lang}/order`);
  };

  return (
    <>
      <Container className={`form-cars ${classes.cars}`}>
        <div>
          <Card onClick={() => handleCheckCar('1')} className={classes.carsCard}>
            <img className={classes.carImage} alt='car' src='../../../../../images/car.png' />
            <p style={{ margin: '0' }}>Economy</p>
          </Card>
          <Card onClick={() => handleCheckCar('2')} className={classes.carsCard}>
            <img className={classes.carImage} alt='car' src='../../../../../images/car.png' />
            <p style={{ margin: '0' }}>Comfort</p>
          </Card>
          <Card onClick={() => handleCheckCar('3')} className={classes.carsCard}>
            <img className={classes.carImage} alt='car' src='../../../../../images/car.png' />
            <p style={{ margin: '0' }}>Business</p>
          </Card>
          <Card onClick={() => handleCheckCar('8')} className={classes.carsCard}>
            <img className={classes.carImage} alt='car' src='../../../../../images/car.png' />
            <p style={{ margin: '0' }}>Minibus</p>
          </Card>
        </div>
        <div>
          <Card onClick={() => handleCheckCar('4')} className={classes.carsCard}>
            <img className={classes.carImage} alt='car' src='../../../../../images/car.png' />
            <p style={{ margin: '0' }}>Premium</p>
          </Card>
          <Card onClick={() => handleCheckCar('5')} className={classes.carsCard}>
            <img className={classes.carImage} alt='car' src='../../../../../images/car.png' />
            <p style={{ margin: '0' }}>VIP</p>
          </Card>
          <Card onClick={() => handleCheckCar('6')} className={classes.carsCard}>
            <img className={classes.carImage} alt='car' src='../../../../../images/car.png' />
            <p style={{ margin: '0' }}>SUV</p>
          </Card>
          <Card onClick={() => handleCheckCar('7')} className={classes.carsCard}>
            <img className={classes.carImage} alt='car' src='../../../../../images/car.png' />
            <p style={{ margin: '0' }}>Van</p>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default withRouter(CarsTypes);
