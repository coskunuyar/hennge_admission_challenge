import React from 'react';
import notFoundLogo from '../../assets/logo.png';
import './not-found.css';

const NotFound = () => {
  return (
    <div
      className="not-found-logo"
      style={{ height: window.screen.availHeight * 0.4 }}
    >
      <img src={notFoundLogo} alt="not-found" />
    </div>
  );
};

export default NotFound;
