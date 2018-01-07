import React, { Component } from 'react';
import { Navbar, Nav, Button} from 'react-bootstrap';
import Logo from '../img/000192-cat.png';

 class NavBar extends Component {
   render() {
     return(
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
