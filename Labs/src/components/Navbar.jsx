import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="NavBar">
//       <ul className="menu">
//         <li>
//           <NavLink to="/">Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/login">Login</NavLink>
//         </li>
//         <li>
//           <NavLink to="/bitcoin-rates">Bitcoin Rates</NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// Update app to use mui

function Navbar() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={NavLink} to="/">Home</Button>
          <Button color="inherit" component={NavLink} to="/login">Login</Button>
          <Button color="inherit" component={NavLink} to="/bitcoin-rates">Bitcoin Rates</Button>
        </Toolbar>
      </AppBar>
    );
  }

export default Navbar;