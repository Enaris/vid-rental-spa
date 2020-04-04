import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ label, className, ...otherProps }) => (
  <button
    className={`${className} custom-button`}
    { ...otherProps }
  >
    { label }
  </button>
)

export default CustomButton;