
import Input from '@material-ui/core/Input';
import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';

const AutoComplete = (props) => {
  let [autoComplete, setAutocomplete] = useState(null);

  const handleOnLoad = (e) => setAutocomplete(autoComplete = e);
  const handlePlaceChanged = () => {
    if (autoComplete !== null) {
      console.log(autoComplete.getPlace());
    }
  };

  return (
    <Autocomplete
      onLoad={handleOnLoad}
      onPlaceChanged={handlePlaceChanged}
      style={{ width: '100%' }}
    >
      <Input fullWidth={props.fullWidth} value={props.value} onChange={props.onChange} disableUnderline={props.underline} placeholder={props.placeholder}/>
    </Autocomplete>
  );
};

export default AutoComplete;
