import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './rent-form.styles.scss';
import VidFormSelect from '../vid-form-select/vid-form-select.component';
import AddressForm from '../address-form/address-form.component';
import CustomButton from '../../general/custom-button/custom-button.component';
import { deliveryOptions } from './rent-form.utils';
import { selectCurrentUser } from '../../../redux/auth/auth.selectors';
 
const RentForm = ({
  user, 
  cartidgeRental: 
  { id, 
    movieTitle, 
    movieReleaseYear, 
    language, 
    daysToReturn, 
    rentPrice,
    addresses 
  }}) => {
  
  const [addAddress, setAddAddress] = useState(false);
  const [addressAdded, setAddressAdded] = useState(false);

  const [savedAddress, setSavedAddress] = useState({
    city: '',
    zipCode: '',
    street: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  const addressFormHandleSubmit = ( values ) => {
    setSavedAddress(values); 
    setAddAddress(false); 
    setAddressAdded(true);
  }

  const handleCancelAddAddress = () => {
    setAddAddress(false);
  }

  const handleRemoveAddress = () => {
    setSavedAddress({city: '',
      zipCode: '',
      street: '',
      firstName: '',
      lastName: '',
      phoneNumber: ''
    });
    setAddressAdded(false);
    setAddAddress(false);
  }

  const formik = useFormik({
    initialValues: {
      selectedAddressId: '',
      addressId: '',
      newAddress: false,
      delivery: deliveryOptions[0].key
    },
    validationSchema: Yup.object({
      delivery: Yup.string()
        .required('Delivery is required'),
    }),
    onSubmit: values => console.log(values)
  });

  const canSelectAddress = () => formik.values.delivery 
    !== deliveryOptions[0].key && addresses && addresses.length;

  console.log(formik.values.delivery);
  console.log(canSelectAddress() && !addAddress);
  
  return (
    <div className='rent-form-container'>
      <div className='rent-cartridge-info'>
        <div className='cartridge-title'>
          {`Renting: ${movieTitle}, ${movieReleaseYear}, ${language}`}      
        </div>
        <div className='rent-price'>
          Price: { rentPrice }
        </div>
        <div className='rent-days-to-return'> 
          After renting you will have { `${ daysToReturn } ${daysToReturn === 1 ? 'day' : 'days'} ` } 
          to return cartridge, you can have active rentals at time
        </div>
      </div>
      <div className='rent-form'>
        <VidFormSelect
          name='delivery'
          formik={ formik }
          label="Delivery" 
          textSelector={ o => o.value }
          valueSelector={ o => o.key }
          options={ deliveryOptions } 
        />
        {
          canSelectAddress() && !addAddress &&
          <VidFormSelect
            name='addressId'
            formik={ formik }
            label="Address" 
            textSelector={ o => `${o.firstName}, ${o.lastName} | ${o.city}, ${o.street}` }
            valueSelector={ o => o.id }
            options={ addresses } 
          />
        }
        {
          canSelectAddress() && !addAddress && 
          <CustomButton 
            onClick={() => setAddAddress(true)}
            label='Add new address'
          />
        }
        {
          canSelectAddress() && addAddress && (
            <div>
              <div className='address-cancel-rmv-btns'> 
                <CustomButton 
                  label='CANCEL' 
                  onClick={ () => handleCancelAddAddress() }
                />
                {
                  addressAdded &&
                  <CustomButton
                  className='rmv-button'
                  label='REMOVE'
                  onClick={ e => handleRemoveAddress() }
                  />
                }
              </div>
              <AddressForm 
                submitForm={ values => addressFormHandleSubmit(values) } 
                address={ addressAdded 
                  ? savedAddress 
                  : { firstName: user.firstName, 
                      lastName: user.lastName, 
                      phoneNumber: 0,
                      zipCode: '',
                      street: '',
                      city: ''
                  }} 
              />
            </div>
          )
        }
      </div>
      <CustomButton 
        className='w100' 
        type='submit' 
        label={ 'ok' }
        form='register-form' 
        disabled={ addAddress }
      />

      </div>
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

export default connect(mapStateToProps)(RentForm);