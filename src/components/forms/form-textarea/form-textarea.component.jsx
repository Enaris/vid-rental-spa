import React from 'react';

import './form-textarea.styles.scss';
import '../form-input/form-input.component';

const VidFormTextarea = ({ name, formik, label, ...otherProps }) => {

  return (
    <div className='custom-form-input'>
      {
        label &&
        <div className='custom-form-label'>{ label }</div>
      }
      <textarea 
        className={`${formik.touched[name] && formik.errors[name] ? 'error' : ''} inner-field inner-textarea`}                
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

export default VidFormTextarea;