import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router';
import Container from '@material-ui/core/Container';
import Directions from '../../components/map/directions';
import useStyles from './styles';
import Map from '../../components/map/map';
import MapMarker from '../../components/map/mapMarker';
import SimpleForm from '../../components/orderForm/simpleForm';
import TransferDate from '../../components/orderForm/extendedForm/transferDate';
import CarsList from '../../components/orderForm/extendedForm/carsList';
import AdultsChildren from '../../components/orderForm/extendedForm/adultsChildseatsQuantity';
import AdditionalOptions from '../../components/orderForm/extendedForm/additionalOptions';
import Comment from '../../components/orderForm/extendedForm/comment'
import Contacts from '../../components/orderForm/extendedForm/contacts'

const MakeOrder = (props) => {
  const classes = useStyles()();
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
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [checked, setChecked] = useState({});
  const [adultsQuantity, setQuantity] = useState(2);
  const [openChildSeats, setOpenChildSeats] = useState(false);
  const [comment, setComment] = useState('');
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

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
  const handleDateChange = (date) => setSelectedDate(date);
  const handleChangeCheckbox = (event) => {
    const item = event.target.name;
    setChecked((prev) => ({ ...prev, [item]: event.target.checked }));
  };
  const handlePlusQuantity = () => setQuantity((prev) => (prev < 4 ? prev + 1 : 4));
  const handleMinusQuantity = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  const handleOpenChildSeats = () => setOpenChildSeats(!openChildSeats);
  const handleChangeComment = (e) => setComment(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value)

  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);


  return (
    <Container className={classes.container}>
      <CssBaseline />
      <Container className={classes.formContainer}>
        <SimpleForm from={from} select={select} to={to} autoCompleteFrom={autocompleteFrom} autoCompleteTo={autocompleteTo} isShowCars={isShowCars} handleOnLoadAutocompliteFrom={handleOnLoadAutocompliteFrom} handleOnLoadAutocompliteTo={handleOnLoadAutocompliteTo} handlePlaceChangedFrom={handlePlaceChangedFrom} handlePlaceChangedTo={handlePlaceChangedTo} handleChangeSelect={handleChangeSelect} handleFrom={handleFrom} handleTo={handleTo} />
        <TransferDate selectedDate={selectedDate} handleDateChange={handleDateChange} />
        <CarsList checked={checked} handleChange={handleChangeCheckbox} />
        <AdultsChildren adultsQuantity={adultsQuantity} openChildSeats={openChildSeats} handlePlusQuantity={handlePlusQuantity} handleMinusQuantity={handleMinusQuantity} handleOpenChildSeats={handleOpenChildSeats} />
        <AdditionalOptions checked={checked} handleChangeCheckbox={handleChangeCheckbox} />
        <Comment comment={comment} handleChange={handleChangeComment} />
        <Contacts email={email} handleChangeEmail={handleChangeEmail} phone={phone} setPhone={setPhone} />
      </Container>
      <Container className={classes.mapContainer}>
        <Map width='30vw' height='70vh' marker={<MapMarker />} />
      </Container>
      <Directions />
    </Container>
  );
};
export default withRouter(MakeOrder);
