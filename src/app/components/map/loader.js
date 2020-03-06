import React, { useState } from 'react';
import { LoadScript } from '@react-google-maps/api';

const MapLoader = (props) => (
  <LoadScript
      id="script-loader"
      googleMapsApiKey="AIzaSyDxy2xkxk7zDKEGtsXtIGEiaMdBVV3vH3Q"
      libraries={['places']}
      url='https://maps.googleapis.com/maps/api/directions/json'
    >
    {props.children}
  </LoadScript>
);
export default MapLoader;


// my AIzaSyD530nQRjKmRP41ba_vm7YC_G90OBGqD8M
