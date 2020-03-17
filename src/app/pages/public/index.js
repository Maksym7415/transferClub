import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import SimpleForm from '../../components/orderForm/simpleForm';
import useStyle from './styles';
import CarsTypes from '../../components/orderForm/intermediateForm/carsTypes';
import PriceOffer from '../../components/orderForm/intermediateForm/priceOffer';

const Public = (props) => {
  const classes = useStyle()();
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);
  const [from, setFrom] = useState('');
  const [select, setSelect] = useState('Duration');
  const [to, setTo] = useState('');
  const [autocompleteFrom, setAutocompleteFrom] = useState(null);
  const [autocompleteTo, setAutocompleteTo] = useState(null);
  const [isShowCars, setIsShowCars] = useState({
    from: false,
    to: false,
  });

  const handleOnLoadAutocompliteFrom = (e) => setAutocompleteFrom(e);
  const handleOnLoadAutocompliteTo = (e) => setAutocompleteTo(e);
  const handlePlaceChangedFrom = () => {
    if (autocompleteFrom !== null) {
      setFrom(autocompleteFrom.getPlace().formatted_address);
      setIsShowCars((prev) => ({ ...prev, from: true }));
    }
  };
  const handlePlaceChangedTo = () => {
    if (autocompleteTo !== null) {
      setTo(autocompleteTo.getPlace().formatted_address);
      setIsShowCars((prev) => ({ ...prev, to: true }));
    }
  };
  const handleChangeSelect = (e) => setSelect(e.target.value);
  const handleFrom = (e) => setFrom(e.target.value);
  const handleTo = (e) => setTo(e.target.value);
  const handleGetOffers = (car) => props.history.push(`/${lang}/order`, { from, to });

  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);

  return (
    <>
      <Container className={classes.container}>
        <SimpleForm from={from} select={select} to={to} autoCompleteFrom={autocompleteFrom} autoCompleteTo={autocompleteTo} isShowCars={isShowCars} handleOnLoadAutocompliteFrom={handleOnLoadAutocompliteFrom} handleOnLoadAutocompliteTo={handleOnLoadAutocompliteTo} handlePlaceChangedFrom={handlePlaceChangedFrom} handlePlaceChangedTo={handlePlaceChangedTo} handleChangeSelect={handleChangeSelect} handleFrom={handleFrom} handleTo={handleTo} />
        <div style={isShowCars.from === true && isShowCars.to === true ? { display: 'block' } : { display: 'none' }}>
          <PriceOffer />
          <CarsTypes />
        </div>
      <Button onClick={handleGetOffers}>Get Offers</Button>
      </Container>
    </>
  );
};

export default withRouter(Public);
