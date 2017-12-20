import React, { Component } from 'react';

 class NavBar extends Component {
   render() {
     return(
       <div>
         <div className="container">
          <div className="Logo">
          <img src={require("../img/icon3.png")}></img>
          </div>
          <div className="NavBar">
          <ul>
            <li> Home </li>
            <li> About </li>
            <li> Contact </li>
          </ul>
          </div>
         </div>
       </div>
     );
   }
 }

export default NavBar;
