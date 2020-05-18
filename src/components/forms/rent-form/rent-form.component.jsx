import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './rent-form.styles.scss';
import VidFormSelect from '../vid-form-select/vid-form-select.component';
import AddressForm from '../address-form/address-form.component';
import CustomButton from '../../general/custom-button/custom-button.component';
import AddressSummary from '../../application/address/address-summary/address-summary.component';
import { deliveryOptions } from './rent-form.utils';
import { selectCurrentUser } from '../../../redux/auth/auth.selectors';
import { rentCartridgeStart } from '../../../redux/cartridge-rent/cartridge-rent.actions';
 
const RentForm = ({
  user, 
  rentCartridge,
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
    formik.values.addressId='';
  }

  const handleDeliverySelect = (value) => {
    if (value !== deliveryOptions[0].key)
      return;
    
    handleRemoveAddress();
  }

  const getRentData = () => {
    const rentData = ({
      ...formik.values,
      userId: user.id,
      cartridgeId: id,
      addAddress: addressAdded,
      newAddress: !addressAdded ? null : {
        ...savedAddress
      }
    })
    return rentData;
  }

  const formik = useFormik({
    initialValues: {
      addressId: '',
      delivery: deliveryOptions[0].key
    },
    validationSchema: Yup.object({
      delivery: Yup.string()
        .required('Delivery is required'),
      addressId: Yup.string()
        .test('address-required', 'Address is required', 
          value => formik.values.delivery === deliveryOptions[0].key || (!!value && value.trim()) || addressAdded )
    }),
    onSubmit: values => rentCartridge(getRentData())
  });

  const canSelectAddress = () => formik.values.delivery 
    !== deliveryOptions[0].key && addresses && addresses.length;

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
          to return cartridge, you cannot have more than 3 active rental at same time.
        </div>
      </div>
      <div className='rent-form-container' >
        <form className='rent-form' onSubmit={ formik.handleSubmit } id='rent-form'>
          <VidFormSelect
            name='delivery'
            formik={ formik }
            label="Delivery" 
            textSelector={ o => o.value }
            valueSelector={ o => o.key }
            options={ deliveryOptions } 
            onChange={ handleDeliverySelect }
          />
          {
            canSelectAddress() && !addAddress && !addressAdded &&
            <VidFormSelect
              placeholder='Select address'
              name='addressId'
              formik={ formik }
              label="Address" 
              textSelector={ o => `${o.firstName}, ${o.lastName} | ${o.city}, ${o.street}` }
              valueSelector={ o => o.id }
              options={ addresses } 
            />
          }
        </form>
        {
          addressAdded &&
          <AddressSummary address={ savedAddress } />
        }
        {
          canSelectAddress() && !addAddress && 
          <CustomButton 
            onClick={() => setAddAddress(true)}
            label={ `${ addressAdded ? 'Change address' : 'Add new address' }` }
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
        <CustomButton 
          className='w100' 
          type='submit' 
          label={ 'ok' }
          form='rent-form' 
          disabled={ addAddress }
        />
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  rentCartridge: rentData => dispatch(rentCartridgeStart(rentData))
});

export default connect(mapStateToProps, mapDispatchToProps)(RentForm);