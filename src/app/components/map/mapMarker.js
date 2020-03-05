import React, { useState } from 'react';
import { Marker } from '@react-google-maps/api';

const MapMarker = (props) => (
  <>
  <Marker
      marker={(marker) => marker}
      position={{ lat: -3.745, lng: -38.523 }} />
  </>
);

export default MapMarker;
