// import React, { useState } from 'react'; // useState is a hook
import '../assets/css/main.css';
import { Link } from 'react-scroll'

function Main() {
  
  return (
    <div className="Main">
      
      <div className="main-header">
        I need advice on...
      </div>

      <div className="main-buttons">
        <Link to="advice" spy={true} smooth={true}>
          <button className="main-button">
            Housing
          </button>
        </Link>
        <Link to="advice" spy={true} smooth={true}>
          <button className="main-button">
            Financial Stability
          </button>
        </Link>
        <Link to="advice" spy={true} smooth={true}>
          <button className="main-button">
            Debt Management
          </button>
        </Link>
      </div>

      <div className="divider"></div>

      <div id="advice" className="advice">
        im lost where is my lover i dont have the power on my side forever
      </div>

    </div>
  );
}

export default Main;
