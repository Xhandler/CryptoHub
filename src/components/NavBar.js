import React, { Component } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import Logo from '../img/Logomakr_5lCYUD.png';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Navbar>
          <Nav>
            <ul>
            <li><img className="logo" src={Logo}></img></li>
            </ul>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
