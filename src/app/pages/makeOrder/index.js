import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router';
import Container from '@material-ui/core/Container';
import Directions from '../../components/map/directions';
import useStyles from './styles';
import Map from '../../components/map/map';
import MapMarker from '../../components/map/mapMarker';
import SimpleForm from '../../components/orderForm/simpleForm';

const MakeOrder = (props) => {
  const classes = useStyles()();
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);
  const [from, setFrom] = useState(props.location.state.from);
  const [select, setSelect] = useState('Duration');
  const [to, setTo] = useState(props.location.state.to);
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

  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);


  return (
    <Container className={classes.container}>
    {console.log(props)}
      <CssBaseline />
      <Container className={classes.formContainer}>
        <SimpleForm from={from} select={select} to={to} autoCompleteFrom={autocompleteFrom} autoCompleteTo={autocompleteTo} isShowCars={isShowCars} handleOnLoadAutocompliteFrom={handleOnLoadAutocompliteFrom} handleOnLoadAutocompliteTo={handleOnLoadAutocompliteTo} handlePlaceChangedFrom={handlePlaceChangedFrom} handlePlaceChangedTo={handlePlaceChangedTo} handleChangeSelect={handleChangeSelect} handleFrom={handleFrom} handleTo={handleTo} />
      </Container>
      <Container className={classes.mapContainer}>
        <Map width='30vw' height='70vh' marker={<MapMarker />} />
      </Container>
      <Directions />
    </Container>
  );
};
export default withRouter(MakeOrder);
