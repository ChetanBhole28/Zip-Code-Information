import React from 'react';


const LocationInfo = ({ data, error, loading, onClear }) => {
    return (
        <div className={`location-info ${data ? 'fade-in' : ''}`}>
            {loading && <div className="loading"></div>}
            {error && <p className="error">{error}</p>}
            {data && (
                <div className="location-data">
                    <h2>Location Information</h2>
                    <div className="info-item">
                        <strong>Country:</strong> {data.country},{' '}
                        <strong>State:</strong> {data.state},{' '}
                        <strong>Place Name:</strong> {data.place_name}
                    </div>
                    <button onClick={onClear}>Clear Information</button>
                </div>
            )}
        </div>
    );
};

export default LocationInfo;
