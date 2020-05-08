import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './user-address-add-page.styles.scss';
import AddressForm from '../../../components/forms/address-form/address-form.component';
import { selectCurrentUser } from '../../../redux/auth/auth.selectors';
import { addAddressStart } from '../../../redux/address/address.actions';

const AddAddressPage = ({ user, addAddress }) => {
  console.log(addAddress);
  return (
    <div className='add-address-page'>
      <AddressForm 
        submitForm={ values => addAddress(values, user.id) }
        address={{ 
          firstName: user.firstName, 
          lastName: user.lastName, 
          phoneNumber: 0,
          zipCode: '',
          street: '',
          city: ''
      }}/>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  addAddress: (address, userId) => dispatch(addAddressStart({ address: address, userId: userId }))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAddressPage);