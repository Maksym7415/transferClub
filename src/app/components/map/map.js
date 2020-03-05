import React, { useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import MapLoader from './loader';
import MapMarker from './mapMarker';

const Map = (props) => (
  <div>
    {props.children}
    <GoogleMap
     mapContainerStyle={{
       height: '600px',
       width: '600px',
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
  </div>
);

export default Map;
