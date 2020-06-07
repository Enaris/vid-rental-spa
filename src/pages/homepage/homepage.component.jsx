import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';

const Homepage = () => (
  <div className='homepage w100'>
    <h1 className='homepage-text'>
      Welcome to video rental store - VidRental!
    </h1>
    <div className='homepage-link'>
      <Link to={`/cartridges`}> Browse movies </Link>
    </div>
  </div>
)

export default Homepage;