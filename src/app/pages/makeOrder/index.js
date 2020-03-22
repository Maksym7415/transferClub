import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Directions from '../../components/map/directions';
import { useStyles } from './styles';
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
import dive from '../../functions/dive';
import actionSaveOrder from '../../redux/actions/saveOrderData';
import actionDeleteData from '../../redux/actions/deleteData';

const MakeOrder = (props) => {
  const classes = useStyles();
  const savedOrder = useSelector((state) => state.syncReducer.order);
  const publicPageOrder = useSelector((state) => state.syncReducer.publicPageOrder);
  const [lang, setLang] = useState(props.location.pathname.split('/')[1]);
  const [from, setFrom] = useState(savedOrder ? savedOrder.routes[0].address.title : publicPageOrder ? publicPageOrder.from : '');
  const [fromCoordinates, setFromCoordinates] = useState({
    lat: savedOrder ? savedOrder.routes[0].address.latitude : publicPageOrder ? publicPageOrder.fromCoordinates.lat : '',
    lng: savedOrder ? savedOrder.routes[0].address.longitude : publicPageOrder ? publicPageOrder.fromCoordinates.lng : '',
  });
  const [selectDuration, setSelectDuration] = useState('Duration');
  const [to, setTo] = useState(savedOrder ? savedOrder.routes[1].address.title : publicPageOrder ? publicPageOrder.to : '');
  const [toCoordinates, setToCoordinates] = useState({
    lat: savedOrder ? savedOrder.routes[1].address.latitude : publicPageOrder ? publicPageOrder.toCoordinates.lat : '',
    lng: savedOrder ? savedOrder.routes[1].address.longitude : publicPageOrder ? publicPageOrder.toCoordinates.lng : '',
  });
  const [autocompleteFrom, setAutocompleteFrom] = useState(null);
  const [autocompleteTo, setAutocompleteTo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(savedOrder ? new Date(savedOrder.timestamp) : new Date());
  const [backwardsSelectedDate, setBackwardsSelectedDate] = useState(savedOrder ? new Date(savedOrder.timestamp) : null);
  const [returnWay, setReturnWay] = useState(savedOrder ? savedOrder.backwardsRoute : false);
  const [checked, setChecked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    checkOfferPrice: !!(savedOrder && savedOrder.price),
    checkShareTrip: !!(savedOrder && savedOrder.shareOrder === true),
    flightNumber: !!(savedOrder && savedOrder.flightTrainNumber),
    meetingName: !!(savedOrder && savedOrder.nameSign),
    promoCode: !!(savedOrder && savedOrder.promocode),
  });
  const [adultsQuantity, setQuantity] = useState(savedOrder ? savedOrder.adults : 1);
  const [openChildSeats, setOpenChildSeats] = useState(false);
  const [comment, setComment] = useState(savedOrder ? savedOrder.comment : '');
  const [phone, setPhone] = useState();
  const createOrderResponse = useSelector((state) => dive`${state}promiseReducer.createOrder.payload.data`);
  const userPersonalData = useSelector((state) => dive`${state}syncReducer.token.payload.sub`);
  const dispatch = useDispatch();
  const [email, setEmail] = useState(userPersonalData ? userPersonalData.email : '');
  const [offerPrice, setOfferPrice] = useState(savedOrder && savedOrder.price ? savedOrder.price : '');
  const [offerPriceCurrency, setOfferPriceCurrency] = useState('Usd');
  const [flightTrainNumber, setFlightTrainNumber] = useState(savedOrder && savedOrder.flightTrainNumber ? savedOrder.flightTrainNumber : '');
  const [nameSign, setNameSign] = useState(savedOrder && savedOrder.nameSign ? savedOrder.nameSign : '');
  const [promocode, setPromocode] = useState(savedOrder && savedOrder.promocode ? savedOrder.promocode : '');
  const [infantSeatsQuantity, setInfantSeatsQuantity] = useState(savedOrder ? savedOrder.childrenSeats.smallSeat : 0);
  const [convertableQuantity, setConvertableQuantity] = useState(savedOrder ? savedOrder.childrenSeats.middleSeat : 0);
  const [boosterQuantity, setBoosterQuantity] = useState(savedOrder ? savedOrder.childrenSeats.largeSeat : 0);

  const handleOnLoadAutocompliteFrom = (e) => setAutocompleteFrom(e);
  const handleOnLoadAutocompliteTo = (e) => setAutocompleteTo(e);
  const handlePlaceChangedFrom = () => {
    if (autocompleteFrom !== null) {
      setFrom(autocompleteFrom.getPlace().formatted_address);
      setFromCoordinates(() => ({
        lat: autocompleteFrom.getPlace().geometry.location.lat(),
        lng: autocompleteFrom.getPlace().geometry.location.lng(),
      }));
    }
  };
  const handlePlaceChangedTo = () => {
    if (autocompleteTo !== null) {
      setTo(autocompleteTo.getPlace().formatted_address);
      setToCoordinates(() => ({
        lat: autocompleteTo.getPlace().geometry.location.lat(),
        lng: autocompleteTo.getPlace().geometry.location.lng(),
      }));
    }
  };
  const handleChangeSelectDuration = (e) => setSelectDuration(e.target.value);
  const handleFrom = (e) => setFrom(e.target.value);
  const handleTo = (e) => setTo(e.target.value);
  const handleDateChange = (date) => setSelectedDate(date);
  const handleBackwardsDateChange = (date) => setBackwardsSelectedDate(date);
  const handleChangeCheckbox = (event) => {
    const item = event.target.name;
    setChecked((prev) => ({ ...prev, [item]: event.target.checked }));
  };
  const handlePlusAdultsQuantity = () => setQuantity((prev) => (prev < 4 ? prev + 1 : 4));
  const handleMinusAdultsQuantity = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  const handlePlusInfantSeat = () => setInfantSeatsQuantity((prev) => (prev < 3 ? prev + 1 : 3));
  const handleMinusInfantSeat = () => setInfantSeatsQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  const handleMinusConvertableSeat = () => setConvertableQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  const handlePlusConvertableSeat = () => setConvertableQuantity((prev) => (prev < 3 ? prev + 1 : 3));
  const handleMinusBoosterSeats = () => setBoosterQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  const handleOpenChildSeats = () => setOpenChildSeats(!openChildSeats);
  const handlePlusBoosterSeats = () => setBoosterQuantity((prev) => (prev < 3 ? prev + 1 : 3));
  const handleChangeComment = (e) => setComment(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeOfferPriceCurrency = (e) => setOfferPriceCurrency(e.target.value);
  const handleOfferPrice = (e) => setOfferPrice(+e.target.value);
  const handleFlightTrainNumber = (e) => setFlightTrainNumber(e.target.value);
  const handleNameSign = (e) => setNameSign(e.target.value);
  const handlePromocode = (e) => setPromocode(e.target.value);
  const handleChangeReturnWay = (e) => setReturnWay(!returnWay);

  const handleCreateOrder = () => {
    const order = {
      timestamp: Date.now(selectedDate),
      backwardsRoute: returnWay,
      backwardsTimestamp: checked.addReturnWay && Date.now(backwardsSelectedDate),
      adults: adultsQuantity,
      distance: 500,
      childrenSeats: {
        smallSeat: infantSeatsQuantity,
        middleSeat: convertableQuantity,
        largeSeat: boosterQuantity,
      },
      price: offerPrice,
      shareOrder: checked.checkShareTrip,
      flightTrainNumber: checked.flightNumber === true ? flightTrainNumber : '',
      nameSign: checked.meetingName === true ? nameSign : '',
      promocode: checked.promoCode === true ? promocode : '',
      comment,
      routes: [
        {
          point_type: 'Start',
          address: {
            title: from,
            longitude: fromCoordinates.lng,
            latitude: fromCoordinates.lat,
          },
        },
        {
          point_type: 'Finish',
          address: {
            title: to,
            longitude: toCoordinates.lng,
            latitude: toCoordinates.lat,
          },
        },
      ],
      vehicle_types: [
        1,
      ],
    };
    if (userPersonalData) {
      dispatch(actionCreateOrder({ user_id: userPersonalData.id_user, ...order }));
    } else {
      dispatch(actionSaveOrder(order, 'order'));
      props.history.push(`/${lang}/auth`);
    }
  };

  useEffect(() => {
    setLang(props.location.pathname.split('/')[1]);
  }, [props.location]);

  useEffect(() => {
    if (createOrderResponse) {
      if (savedOrder) dispatch(actionDeleteData('order'));
      dispatch(actionDeleteData('createOrder'));
      props.history.push(`/${lang}/orders`);
    }
  }, [createOrderResponse]);

  useEffect(() => {
    if (publicPageOrder && publicPageOrder.car in checked) {
      setChecked((prev) => ({ ...prev, [publicPageOrder.car]: true }));
    }
    if (publicPageOrder && publicPageOrder.price) {
      setChecked((prev) => ({ ...prev, checkOfferPrice: true }));
      setOfferPrice(publicPageOrder.price);
    }
  }, []);

  return (
    <Container className={classes.container}>
      <CssBaseline />
      <Container className={classes.formContainer}>
        <div className={classes.simpleForm}>
          <SimpleForm
            from={from}
            select={selectDuration}
            to={to}
            autoCompleteFrom={autocompleteFrom}
            autoCompleteTo={autocompleteTo}
            handleOnLoadAutocompliteFrom={handleOnLoadAutocompliteFrom}
            handleOnLoadAutocompliteTo={handleOnLoadAutocompliteTo}
            handlePlaceChangedFrom={handlePlaceChangedFrom}
            handlePlaceChangedTo={handlePlaceChangedTo}
            handleChangeSelect={handleChangeSelectDuration}
            handleFrom={handleFrom}
            handleTo={handleTo}
          />
          <TransferDate
            openReturnWay={returnWay}
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
            backwardsSelectedDate={backwardsSelectedDate}
            backwardsHandleDateChange={handleBackwardsDateChange}
            checked={returnWay}
            handleChangeCheckbox={handleChangeReturnWay}
          />
        </div>
        <Container className={classes.mapContainer}>
          <Map width='100%' height='100%' marker={<MapMarker />} />
        </Container>
        <CarsList
          checked={checked}
          handleChange={handleChangeCheckbox}
        />
        <AdultsChildren
          adultsQuantity={adultsQuantity}
          openChildSeats={openChildSeats}
          handlePlusAdultsQuantity={handlePlusAdultsQuantity}
          handleMinusAdultsQuantity={handleMinusAdultsQuantity}
          handleOpenChildSeats={handleOpenChildSeats}
          handleMinusInfantSeat={handleMinusInfantSeat}
          handlePlusInfantSeat={handlePlusInfantSeat}
          infantSeatsQuantity={infantSeatsQuantity}
          handleMinusConvertableSeat={handleMinusConvertableSeat}
          convertableQuantity={convertableQuantity}
          handlePlusConvertableSeat={handlePlusConvertableSeat}
          handleMinusBoosterSeats={handleMinusBoosterSeats}
          boosterQuantity={boosterQuantity}
          handlePlusBoosterSeats={handlePlusBoosterSeats}
        />
        <AdditionalOptions
          offerPrice={offerPrice}
          offerPriceCurrency={offerPriceCurrency}
          handleChangeOfferPriceCurrency={handleChangeOfferPriceCurrency}
          handleOfferPrice={handleOfferPrice}
          checked={checked}
          handleChangeCheckbox={handleChangeCheckbox}
          handleFlightTrainNumber={handleFlightTrainNumber}
          flightTrainNumber={flightTrainNumber}
          nameSign={nameSign}
          handleNameSign={handleNameSign}
          promocode={promocode}
          handlePromocode={handlePromocode}
        />
        <Comment
          comment={comment}
          handleComment={handleChangeComment}
        />
        <Contacts email={email} handleChangeEmail={handleChangeEmail} phone={phone} setPhone={setPhone} />
        <Button
          variant='contained'
          color='primary'
          onClick={handleCreateOrder}
        >
          Create Order
        </Button>
      </Container>
      {/* <Container className={classes.mapContainer}>
        <Map width='100%' height='100%' marker={<MapMarker />} />
      </Container> */}
      {/* <Directions /> */}
    </Container>
  );
};
export default withRouter(MakeOrder);
