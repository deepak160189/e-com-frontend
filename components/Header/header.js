import React from "react";
// import './header.css';
import NavbarLinks from "../Navbar/Index";
import HeaderLogo from "./logo.js";
import IconWithClickContent from "./Test";
import HeaderSearch from "./search.js";
const HeaderAll = () =>{
  return(
    <div className="header-wrapper">
    <HeaderLogo />
    <HeaderSearch />
    <IconWithClickContent />
    <div className="navbar-wrapper">
    <NavbarLinks />
    </div>
    </div>  
  )
}

export default HeaderAll;