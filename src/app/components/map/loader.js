import React, { useState } from 'react';
import { LoadScript } from '@react-google-maps/api';

const MapLoader = (props) => (
  <LoadScript
      id="script-loader"
      googleMapsApiKey="AIzaSyD530nQRjKmRP41ba_vm7YC_G90OBGqD8M"
      libraries={['places']}
      url='https://maps.googleapis.com/maps/api/directions/json'
    >
    {props.children}
  </LoadScript>
);
export default MapLoader;


// my AIzaSyD530nQRjKmRP41ba_vm7YC_G90OBGqD8M
