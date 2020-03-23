import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router';
import { useStyles } from './styles';
import actionSaveOrder from '../../../redux/actions/publicPageOrder';
import langData from './langData';


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
            <p style={{ margin: '0' }}>{langData.econom[lang]}</p>
          </Card>
          <Card onClick={() => handleCheckCar('2')} className={classes.carsCard}>
            <img className={classes.carImage} alt='car' src='../../../../../images/car.png' />
            <p style={{ margin: '0' }}>{langData.comfort[lang]}</p>
          </Card>
          <Card onClick={() => handleCheckCar('3')} className={classes.carsCard}>
            <img className={classes.carImage} alt='car' src='../../../../../images/car.png' />
            <p style={{ margin: '0' }}>{langData.business[lang]}</p>
          </Card>
          <Card onClick={() => handleCheckCar('8')} className={classes.carsCard}>
            <img className={classes.carImage} alt='car' src='../../../../../images/car.png' />
            <p style={{ margin: '0' }}>{langData.minibus[lang]}</p>
          </Card>
        </div>
        <div>
          <Card onClick={() => handleCheckCar('4')} className={classes.carsCard}>
            <img className={classes.carImage} alt='car' src='../../../../../images/car.png' />
            <p style={{ margin: '0' }}>{langData.premium[lang]}</p>
          </Card>
          <Card onClick={() => handleCheckCar('5')} className={classes.carsCard}>
            <img className={classes.carImage} alt='car' src='../../../../../images/car.png' />
            <p style={{ margin: '0' }}>{langData.vip[lang]}</p>
          </Card>
          <Card onClick={() => handleCheckCar('6')} className={classes.carsCard}>
            <img className={classes.carImage} alt='car' src='../../../../../images/car.png' />
            <p style={{ margin: '0' }}>{langData.suv[lang]}</p>
          </Card>
          <Card onClick={() => handleCheckCar('7')} className={classes.carsCard}>
            <img className={classes.carImage} alt='car' src='../../../../../images/car.png' />
            <p style={{ margin: '0' }}>{langData.van[lang]}</p>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default withRouter(CarsTypes);
