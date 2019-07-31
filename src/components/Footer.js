import React from 'react';
import '../styles/scss/Footer.scss';

const Footer = () => {
  const date = new Date();
  const thisYear = date.getFullYear();

  return (
    <div className="footer">
      <p>
        {`Banka Copyright ${thisYear}`}
      </p>
    </div>
  );
};

export default Footer;
