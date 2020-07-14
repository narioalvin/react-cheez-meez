import React from 'react';

import closeIcon from '../../assets/icons/closeIcon.png';

import './info-bar.css';

const InfoBar = ({ room }) => (
  <div className="info">
    <div className="left-inner-container">
     <h3>{ room }</h3>
    </div>
    <div className="right-inner-container">
        <a href="/"><img src={closeIcon} alt="close" /></a>
    </div>
  </div>
);

export default InfoBar;
