import React from 'react';

import './vid-form-select.styles.scss';

const VidFormSelect = ({ options, 
  valueSelector, 
  textSelector, 
  placeholder, 
  label, 
  formik, 
  onChange,
  name }) => {

  const handleChange = (value) => {
    if (onChange)
      onChange(value);

    formik.setFieldValue(name, value);
  }

  return (
    <div className='w100 vid-form-select-container'>
      {
        label &&
        <div className='vid-form-select-label'>{ label }</div>
      }
      <select 
        onChange={ (e) => handleChange(e.target.value) }
        value={ formik.values[name] }
        className={`${formik.touched[name] && formik.errors[name] ? 'error' : ''} vid-form-select`}
        name={ name }
      >
        {
          placeholder &&
          <option className='vid-form-select-option' key={ placeholder } value='' >{ placeholder }</option>
        }
        {
          options.map(o => 
            <option className='vid-form-select-option' key={ valueSelector(o) } value={ valueSelector(o) }>
              { textSelector(o) }
            </option> )
        }
      </select>
      {
        formik.touched[name] && formik.errors[name] &&
        <div className='form-error'>{ formik.errors[name] }</div>
      }
    </div>
  )
}

export default VidFormSelect;