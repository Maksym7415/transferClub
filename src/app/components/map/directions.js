import React, { useState } from 'react';
import { DirectionsRenderer, DirectionsService } from '@react-google-maps/api';
import MapLoader from './loader';
import Map from './map';

const Directions = (props) => {
  const [response, setResponse] = useState(null);
  const [origin, setOrigin] = useState('Brooklyn');
  const [destination, setDestination] = useState('Queens');
  const [travelMode, setTravelMode] = useState('TRANSIT');

  const directionsCallback = (res) => {
    if (res !== null) {
      if (res.status === 'OK') {
        setResponse(
          () => ({
            res,
          }),
        );
      } else {
        console.log('response: ', res);
      }
    }
  };

  return (
    <>
      {
              (
                destination !== ''
                && origin !== ''
              ) && (
                <DirectionsService
                  // required
                  options={{
                    destination,
                    origin,
                    travelMode,
                  }}
                  // required
                  callback={directionsCallback}
                  // optional
                  onLoad={(directionsService) => {
                    console.log('DirectionsService onLoad directionsService: ', directionsService);
                  }}
                  // optional
                  onUnmount={(directionsService) => {
                    console.log('DirectionsService onUnmount directionsService: ', directionsService);
                  }}
                />
              )
            }
      {
        response !== null
        && console.log('ok') && <DirectionsRenderer
          options={{ directions: response }}
        />
      }
    </>
  );
};

export default Directions;
