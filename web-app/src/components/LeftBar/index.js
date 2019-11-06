import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imagLogo from '../../images/logoImage.png';


class LeftBar extends Component {

  state={
    expands: {},
    active: '',
  }



  render() {
    return (
      <div className="GlobalData_Left">
        <div>
        <img className="imageLogo" src={imagLogo} alt="CRYPTRONS" />
        <p className="nameLogo">CRYPTRONS</p>
        </div>
        <Link to="/" > Dashboard</Link>
      </div>
    );
  }
}


export default LeftBar;
