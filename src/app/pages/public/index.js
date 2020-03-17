import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import SimpleForm from '../../components/orderForm/simpleForm';
import useStyle from './styles';

const Public = (props) => {
  const classes = useStyle()();

  const [from, setFrom] = useState('');
  const [select, setSelect] = useState('Duration');
  const [to, setTo] = useState('');
  const [tabs, setTabs] = useState(0);
  const [autoCompleteFrom, setAutocompleteFrom] = useState(null);
  const [autoCompleteTo, setAutocompleteTo] = useState(null);
  const [isShowCars, setIsShowCars] = useState({
    from: false,
    to: false,
  });

  const handleOnLoadAutocompliteFrom = (e) => setAutocompleteFrom(e);
  const handleOnLoadAutocompliteTo = (e) => setAutocompleteTo(e);
  const handlePlaceChangedFrom = () => {
    if (autoCompleteFrom !== null) {
      setFrom(autoCompleteFrom.getPlace().formatted_address);
      setIsShowCars((prev) => ({ ...prev, from: true }));
    }
  };
  const handlePlaceChangedTo = () => {
    if (autoCompleteTo !== null) {
      setTo(autoCompleteTo.getPlace().formatted_address);
      setIsShowCars((prev) => ({ ...prev, to: true }));
    }
  };
  const handleChangeTabs = (event, newValue) => setTabs(newValue);
  const handleChangeIndex = (index) => setTabs(index);
  const handleChangeSelect = (e) => setSelect(e.target.value);
  const handleFrom = (e) => setFrom(e.target.value);
  const handleTo = (e) => setTo(e.target.value);

  useEffect(() => {
    setLang(props.history.location.pathname.split('/')[1]);
  }, [props.history.location]);

  return (
    <>
      <Container className={classes.container}>
        <SimpleForm />
      </Container>
    </>
  );
};

export default Public;
