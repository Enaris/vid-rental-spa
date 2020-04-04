import React from 'react';

import './address-card-list.styles.scss';
import AddressCard from '../address-card/address-card.component';

const AddressCardList = ({ addressList }) => (
  <div>
    { addressList.map((address, index) => <AddressCard key='index' address /> )}
  </div>
);

export default AddressCardList;