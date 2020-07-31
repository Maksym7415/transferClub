import React, { useState } from 'react';
import { LoadScript } from '@react-google-maps/api';

const MapLoader = (props) => (
  <LoadScript
      id="script-loader"
      googleMapsApiKey=""
      libraries={['places']}
      url='https://maps.googleapis.com/maps/api/directions/json'
    >
    {props.children}
  </LoadScript>
);
export default MapLoader;
