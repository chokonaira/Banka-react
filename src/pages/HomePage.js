import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/style.css';
import '../styles/css/utils.css';


const BankaHomePage = () => (
  <div className="cont">

    <div className="wrapper d-flex flex-col  a-i-center">
      <h2 className="get-started1">Smart way to bank...</h2>
      <Link to="/signup" className="get-started">Get Started</Link>
    </div>

  </div>
);

export default BankaHomePage;
