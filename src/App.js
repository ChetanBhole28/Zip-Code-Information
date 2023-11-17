import React, { useState } from 'react';
import ZipCodeForm from './Components/ZipCodeForm';
import LocationInfo from './Components/LocationInfo';
import './App.css';

const App = () => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchLocationInfo = async (countryCode, postalCode) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.zippopotam.us/${countryCode}/${postalCode}`);
      const data = await response.json();

      if (response.ok) {
        // Try to extract state and place name from the first place in the array (if available)
        const state = data.places && data.places.length > 0 ? data.places[0].state : 'N/A';
        const placeName = data.places && data.places.length > 0 ? data.places[0]['place name'] : 'N/A';

        setLocationInfo({
          country: data.country,
          state: state,
          placeName: placeName,
          places: data.places[placeName],
        });

        setError(null);
      } else {
        setLocationInfo(null);
        setError(data.error || 'Not Available');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLocationInfo(null);
      setError(`Error fetching data. Please try again. ${error.message || ''}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setLocationInfo(null);
    setError(null);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">ZipInfo</div>
      </nav>
      <h1>Zip Code Information</h1>
      <ZipCodeForm onSubmit={fetchLocationInfo} />
      <LocationInfo data={locationInfo} error={error} loading={loading} onClear={handleClear} />
    </div>
  );
};

export default App;
