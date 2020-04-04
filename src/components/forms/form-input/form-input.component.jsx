import React from 'react';

import './form-input.styles.scss';

const VidFormInput = ({ name, formik, label, ...otherProps }) => {

  return (
    <div className='custom-form-input'>
      {
        label &&
        <div className='custom-form-label'>{ label }</div>
      }
      <input 
        className={`${formik.touched[name] && formik.errors[name] ? 'error' : ''} inner-field`}                
        name
        { ...otherProps }
        { ...formik.getFieldProps(name) }
        />
      {
        formik.touched[name] && formik.errors[name] &&
        <div className='form-error'>{ formik.errors[name] }</div>
      }
    </div>
  )
}

export default VidFormInput;