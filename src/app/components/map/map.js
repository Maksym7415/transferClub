import React, { useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import MapLoader from './loader';
import MapMarker from './mapMarker';

const Map = (props) => (
  <>
    {props.children}
    <GoogleMap
     mapContainerStyle={{
       height: props.height,
       width: props.width,
       position: 'relative',
     }}
      center={{
        lat: -3.745,
        lng: -38.523,
      }}
      zoom={15}
      id='example-map'
    >
    {props.marker}
    {props.direction}
    </GoogleMap>
  </>
);

export default Map;
