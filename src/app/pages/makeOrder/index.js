import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import Directions from '../../components/map/directions';
import useStyles from './styles';
import Map from '../../components/map/map';
import MapMarker from '../../components/map/mapMarker';
import SimpleForm from '../../components/orderForm/simpleForm';
import TransferDate from '../../components/orderForm/extendedForm/transferDate';
import CarsList from '../../components/orderForm/extendedForm/carsList';
import AdultsChildren from '../../components/orderForm/extendedForm/adultsChildseatsQuantity';
import AdditionalOptions from '../../components/orderForm/extendedForm/additionalOptions';
import Comment from '../../components/orderForm/extendedForm/comment';
import Contacts from '../../components/orderForm/extendedForm/contacts';
import actionCreateOrder from '../../redux/actions/createOrder';
import Button from '@material-ui/core/Button';

const MakeOrder = (props) => {
  const classes = useStyles()();
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);
  const [from, setFrom] = useState({
    address: '',
    lat: '',
    lng: '',
  });
  const [selectDuration, setSelectDuration] = useState('Duration');
  const [to, setTo] = useState({
    address: '',
    lat: '',
    lng: '',
  });
  const [autocompleteFrom, setAutocompleteFrom] = useState(null);
  const [autocompleteTo, setAutocompleteTo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [backwardsSelectedDate, setBackwardsSelectedDate] = useState(null)
  const [checked, setChecked] = useState({
    econom: false,
    standart: false,
    addReturnWay: false,
    buiseness: false,
    Van: false,
    bus: false,
    comfort: false,
    checkOfferPrice: false,
    checkShareTrip: false,
    flightNumber: false,
    meetingName: false,
    promoCode: false,
  });
  const [adultsQuantity, setQuantity] = useState(2);
  const [openChildSeats, setOpenChildSeats] = useState(false);
  const [comment, setComment] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [price, setPrice] = useState(500)
  const orderResponse = useSelector((state) => state.promiseReducer.createOrder);
  const dispatch = useDispatch();

  const handleOnLoadAutocompliteFrom = (e) => setAutocompleteFrom(e);
  const handleOnLoadAutocompliteTo = (e) => setAutocompleteTo(e);
  const handlePlaceChangedFrom = () => {
    if (autocompleteFrom !== null) {
      setFrom((prev) => ({
        address: autocompleteFrom.getPlace().formatted_address,
        lat: autocompleteFrom.getPlace().geometry.location.lat(),
        lng: autocompleteFrom.getPlace().geometry.location.lng(),
      }));
    }
  };
  const handlePlaceChangedTo = () => {
    if (autocompleteTo !== null) {
      setFrom((prev) => ({
        address: autocompleteTo.getPlace().formatted_address,
        lat: autocompleteTo.getPlace().geometry.location.lat(),
        lng: autocompleteTo.getPlace().geometry.location.lng(),
      }));
    }
  };
  const handleChangeSelectDuration = (e) => setSelectDuration(e.target.value);
  const handleFrom = (e) => setFrom(e.target.value);
  const handleTo = (e) => setTo(e.target.value);
  const handleDateChange = (date) => setSelectedDate(date);
  const handleBackwardsDateChange = (date) => setBackwardsSelectedDate(date)
  const handleChangeCheckbox = (event) => {
    const item = event.target.name;
    setChecked((prev) => ({ ...prev, [item]: event.target.checked }));
  };
  const handlePlusQuantity = () => setQuantity((prev) => (prev < 4 ? prev + 1 : 4));
  const handleMinusQuantity = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  const handleOpenChildSeats = () => setOpenChildSeats(!openChildSeats);
  const handleChangeComment = (e) => setComment(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleCreateOrder = () => dispatch(actionCreateOrder({
    user_id: 'string',
    date: Date.now(selectedDate),
    backwardsRoute: checked.addReturnWay,
    backwardsDate: Date.now(backwardsSelectedDate),
    adults: adultsQuantity,
    childrenSeats: {
      smallSeat: 0,
      middleSeat: 0,
      largeSeat: 0,
    },
    price,
    shareOrder: checked.checkShareTrip,
    flightTrainNumber: 'string',
    nameSign: checked.meetingName,
    promocode: 'string',
    comment: 'string',
    routes: [
      {
        point_type: 'Start',
        address: {
          title: from.adress,
          longitude: from.lng,
          latitude: from.lat,
        },
      },
      {
        point_type: 'Finish',
        address: {
          title: to.adress,
          longitude: to.lng,
          latitude: to.lat,
        },
      },
    ],
    vehicle_types: [
      0,
    ],
  }));

  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);


  return (
    <Container className={classes.container}>
    {console.log(checked)}
      <CssBaseline />
      <Container className={classes.formContainer}>
        <SimpleForm from={from.adress} select={selectDuration} to={to.address} autoCompleteFrom={autocompleteFrom} autoCompleteTo={autocompleteTo} handleOnLoadAutocompliteFrom={handleOnLoadAutocompliteFrom} handleOnLoadAutocompliteTo={handleOnLoadAutocompliteTo} handlePlaceChangedFrom={handlePlaceChangedFrom} handlePlaceChangedTo={handlePlaceChangedTo} handleChangeSelect={handleChangeSelectDuration} handleFrom={handleFrom} handleTo={handleTo} />
        <TransferDate selectedDate={selectedDate} handleDateChange={handleDateChange} backwardsSelectedDate={backwardsSelectedDate} backwardsHandleDateChange={handleBackwardsDateChange} checked={checked} handleChangeCheckbox={handleChangeCheckbox} />
        <CarsList checked={checked} handleChange={handleChangeCheckbox} />
        <AdultsChildren adultsQuantity={adultsQuantity} openChildSeats={openChildSeats} handlePlusQuantity={handlePlusQuantity} handleMinusQuantity={handleMinusQuantity} handleOpenChildSeats={handleOpenChildSeats} />
        <AdditionalOptions checked={checked} handleChangeCheckbox={handleChangeCheckbox} />
        <Comment comment={comment} handleChange={handleChangeComment} />
        <Contacts email={email} handleChangeEmail={handleChangeEmail} phone={phone} setPhone={setPhone} />
        <Button 
          variant='contained'
          color='primary'
          onClick={handleCreateOrder}
        >
          Create Order
        </Button>
      </Container>
      <Container className={classes.mapContainer}>
        <Map width='30vw' height='70vh' marker={<MapMarker />} />
      </Container>
      <Directions />
    </Container>
  );
};
export default withRouter(MakeOrder);
