import React from "react";
import "./Navbar.css";


const Navbar = props => (


<nav className="navbar navbar-default">
{/* <div className="container-fluid">
<div className="navbar-header"> */}

    
<a className="nav navbar-left" href="/">Musical Theatre Memory Game</a>
{props.children}

{/* </div>
</div> */}
</nav>
)
export default Navbar;