import React, { Component } from 'react';
import './Error.css';
import lion from "../images/nothing_to_see_here.jpg";

class Error extends Component {

  render() {
    return(
      <div className="error">
        <h1 className="error-title">Nothing to see here</h1>
        <div className="lion_img_container">
          <a href="https://www.instagram.com/p/CJn-s6bMpTi/"><img className="error_img" src={lion} href="https://www.instagram.com/p/CJn-s6bMpTi/" alt="Lion licks mans face" /></a>
        </div>
      </div>
    );
  }

}

export default Error;
