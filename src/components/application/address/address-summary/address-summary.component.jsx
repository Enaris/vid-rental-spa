import React from 'react';

import './address-summary.styles.scss';

const AddressSummary = ({ address: { city, zipCode, street, firstName, lastName, phoneNumber }}) => (
  <div className='address-summary'>
    <p>{ `City: ${city}, Street: ${street}, Zip Code: ${zipCode}`} </p>
    <p>{ `${firstName} ${lastName}, Phone: ${phoneNumber}` }</p>
  </div>
)

export default AddressSummary;