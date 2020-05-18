import React from 'react';
import DatePicker from 'react-datepicker';

import './vid-datepicker.styles.scss';

const VidDatepicker = ({ formik, name, ...otherProps }) => {
  return (
    <div>
      <DatePicker
        { ...otherProps }
        { ...formik.getFieldProps(name) }
        dateFormat="dd/MM/yyyy"
        className='inner-field'
        selected={(formik.values[name] && new Date(formik.values[name])) || null}
        onChange={val => {
          formik.setFieldValue(name, val);
        }}      
      />
      {
        formik.touched[name] && formik.errors[name] &&
        <div className='form-error'>{ formik.errors[name] }</div>
      }
    </div>
  );
};

export default VidDatepicker;