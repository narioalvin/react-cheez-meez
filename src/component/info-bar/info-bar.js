import React from 'react';
import closeIcon from '../../assets/icons/closeIcon.png';
import { Link } from 'react-router-dom';

import './info-bar.css';

const InfoBar = ({ room }) => (
  <div className='info'>
    <div className='left-inner-container'>
      <h3>{room}</h3>
    </div>
    <div className='right-inner-container'>
      <Link to={'/'}>
        <img src={closeIcon} alt='close' />
      </Link>
    </div>
  </div>
);

export default InfoBar;
