/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { GoogleMap, MarkerF } from '@react-google-maps/api';

import googleMapStore from '../../stores/googleMapsApi';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const GoogleMapsView = ({ lat, lng }) => {
  const { loaded } = googleMapStore();

  const center = {
    lat: lat,
    lng: lng,
  };

  return loaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      options={{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: false,
        draggableCursor: false,
        zoom: 17,
        center: { ...center },
        // draggable: false,
        zoomControlOptions: false,
        gestureHandling: 'greedy',
        scrollwheel: false,
        allowfullscreen: false,
        disableDoubleClickZoom: true,
        scaleControl: false,
        keyboardShortcuts: false,
      }}
    >
      <MarkerF position={center}></MarkerF>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default GoogleMapsView;
