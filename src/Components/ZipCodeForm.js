import React, { useState } from 'react';

const ZipCodeForm = ({ onSubmit }) => {
    const [postalCode, setPostalCode] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit('in', postalCode); // 'in' is the country code for India
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="postalCode">Enter Postal Code: </label>
            <input
                type="text"
                id="postalCode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
            />
            <button type="submit">Fetch Information</button>
        </form>
    );
};

export default ZipCodeForm;
