import React from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
          <nav className="navbar-default">
            <div className="container-fluid">
              <div className="logo-container">
                <img src={logo} className="img-responsive Header-logo" alt="logo" /><span className="Header-logo-name">React</span>
              </div>
              <div className="navbar-header navbar-container">
                <ul className="nav navbar-nav">
                  <li><a href="#">Home</a></li>
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