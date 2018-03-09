import React, { Component } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import Logo from '../img/Logomakr_5lCYUD.png';

class NavBar extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoggedIn: false,
      handleLogoutClick: () => {
        this.setState({isLoggedIn:true});
        console.log('click')
      },
      handleLoginClick: () => {
        this.setState({isLoggedIn:false});
        console.log('click')
      }
    };
  }
  handleLogoutClick() {
    this.setState({isLoggedIn:true})
    console.log('click')
  }
  handleLoginClick() {
    this.setState({isLoggedIn:false})
    console.log('click')
  }
  render() {
    let button = null;
    if (this.state.isLoggedIn) {
      button = <Button className="btn-primary" type="button" onClick={this.state.handleLoginClick}>Off</Button>
    } else {
      button = <Button className="btn-primary" type="button" onClick={this.state.handleLogoutClick}>On</Button>
    }

    return (
      <div className="NavBar">
        <Navbar>
          <Nav>
            <ul>
            <li><img className="logo" src={Logo}></img></li>
            </ul>
            {button}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
