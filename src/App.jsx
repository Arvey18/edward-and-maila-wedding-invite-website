/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import Routes from './configs/routes';
import { useJsApiLoader } from '@react-google-maps/api';
import './app.scss';

// stores
import googleMapStore from './stores/googleMapsApi';

// constants
import serverConfig from './constants/serverConfig';

function App() {
  const { updateLoading } = googleMapStore();

  // load google maps api
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: serverConfig.GOOGLE_MAPS_API_KEY,
  });

  // track google maps api loaded
  useEffect(() => {
    updateLoading(isLoaded);
  }, [isLoaded]);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
