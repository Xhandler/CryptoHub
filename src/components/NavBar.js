import React, { Component } from 'react';

 class NavBar extends Component {
   render() {
     return(
       <div>
         <div className="container">
          <div className="NavBar">
          <ul>
            <li><img src={require("../img/icon3.png")} className="logo"></img></li>
            <li> Home </li>
            <li> About </li>
            <li> Contact </li>
            <p>chanes</p>
          </ul>
          </div>
         </div>
       </div>
     );
   }
 }

export default NavBar;
