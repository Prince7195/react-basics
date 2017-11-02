import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from './logo.svg';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
          <nav className="navbar-default">
            <div className="container-fluid">
              <div className="logo-container">
                <img src={logo} className="img-responsive Header-logo" alt="logo" /><span className="Header-logo-name"><NavLink to="/" >React</NavLink></span>
              </div>
              <div className="navbar-header navbar-container">
                <ul className="nav navbar-nav">
                  <li><NavLink exact={true} to="/home" activeClassName="active" activeStyle={{color: "red"}} >Home</NavLink></li>
                  <li><NavLink to="/user/10" activeClassName="active" activeStyle={{color: "red"}} >User</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container-fluid">
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default Header;