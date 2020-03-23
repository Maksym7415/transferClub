import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import Collapse from '@material-ui/core/Collapse';
import SimpleForm from '../../components/orderForm/simpleForm';
import useStyle from './styles';
import CarsTypes from '../../components/orderForm/intermediateForm/carsTypes';
import PriceOffer from '../../components/orderForm/intermediateForm/priceOffer';

const Public = (props) => {
  const classes = useStyle()();
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);
  const [from, setFrom] = useState('');
  const [fromCoordinates, setFromCoordinates] = useState({
    lat: '',
    lng: '',
  });
  const [select, setSelect] = useState('Duration');
  const [to, setTo] = useState('');
  const [toCoordinates, setToCoordinates] = useState({
    lat: '',
    lng: '',
  });
  const [autocompleteFrom, setAutocompleteFrom] = useState(null);
  const [autocompleteTo, setAutocompleteTo] = useState(null);
  const [isShowCars, setIsShowCars] = useState({
    from: false,
    to: false,
  });
  const [offerPrice, setOfferPrice] = useState('');

  const handleOfferPrice = (e) => setOfferPrice(e.target.value);
  const handleOnLoadAutocompliteFrom = (e) => setAutocompleteFrom(e);
  const handleOnLoadAutocompliteTo = (e) => setAutocompleteTo(e);
  const handlePlaceChangedFrom = () => {
    if (autocompleteFrom !== null) {
      setFrom(autocompleteFrom.getPlace().formatted_address);
      setFromCoordinates(() => ({
        lat: autocompleteFrom.getPlace().geometry.location.lat(),
        lng: autocompleteFrom.getPlace().geometry.location.lng(),
      }));
      setIsShowCars((prev) => ({ ...prev, from: true }));
    }
  };
  const handlePlaceChangedTo = () => {
    if (autocompleteTo !== null) {
      setTo(autocompleteTo.getPlace().formatted_address);
      setToCoordinates(() => ({
        lat: autocompleteTo.getPlace().geometry.location.lat(),
        lng: autocompleteTo.getPlace().geometry.location.lng(),
      }));
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
        <SimpleForm
          from={from}
          select={select}
          to={to}
          autoCompleteFrom={autocompleteFrom}
          autoCompleteTo={autocompleteTo}
          isShowCars={isShowCars}
          handleOnLoadAutocompliteFrom={handleOnLoadAutocompliteFrom}
          handleOnLoadAutocompliteTo={handleOnLoadAutocompliteTo}
          handlePlaceChangedFrom={handlePlaceChangedFrom}
          handlePlaceChangedTo={handlePlaceChangedTo}
          handleChangeSelect={handleChangeSelect}
          handleFrom={handleFrom} handleTo={handleTo}
        />
        <Collapse in={isShowCars.from && isShowCars.to} timeout={isShowCars ? 700 : 700} unmountOnExit>
          <PriceOffer offerPrice={offerPrice} handleOfferPrice={handleOfferPrice} />
          <CarsTypes
            from={from}
            to={to}
            fromCoordinates={fromCoordinates}
            toCoordinates={toCoordinates}
            price={offerPrice}
          />
        </Collapse>
      <Button color={'primary'} variant='contained' onClick={handleGetOffers}>Get Offers</Button>
      </Container>
    </>
  );
};

export default withRouter(Public);
