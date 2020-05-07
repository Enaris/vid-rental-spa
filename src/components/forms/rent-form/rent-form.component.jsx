import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import './rent-form.styles.scss';
import VidFormSelect from '../vid-form-select/vid-form-select.component';
import AddressForm from '../address-form/address-form.component';
import { deliveryOptions } from './rent-form.utils';
 
const RentForm = ({ cartidgeRental: 
  { id, 
    movieTitle, 
    movieReleaseYear, 
    language, 
    daysToReturn, 
    rentPrice,
    addresses 
  }}) => {
  
  const formik = useFormik({
    initialValues: {
      selectedAddressId: '',
      newAddress: false,
      delivery: ''
    },
    validationSchema: Yup.object({
      delivery: Yup.string()
        .required('Delivery is required'),
    }),
    onSubmit: values => console.log(values)
  });

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
          name='Delivery'
          formik={ formik }
          label="Delivery" 
          textSelector={ o => o.key }
          valueSelector={ o => o.value }
          options={ deliveryOptions } 
        />
        {
          
          addresses.map(a => <div>{ a.city }</div>)
        }
        <AddressForm 
          address={{ firstName: '', 
            lastName: '', 
            phoneNumber: '',
            zipCode: '',
            street: '',
            city: ''
          }} 
        />

      </div>
    </div>
  )
}

export default RentForm;