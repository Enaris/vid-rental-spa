import React from 'react';

import './left-panel.styles.scss';

const LeftPanel = ({ children }) => {
  return (
    <div className='left-panel-container'>
      <div className='left-panel'>
        { children }
      </div>
    </div>
  )
}

export default LeftPanel;