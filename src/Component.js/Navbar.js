import { Outlet, Link } from "react-router-dom";
import React from "react";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="Box">
        <div className="lbox" >
            <Link className="inbox" to="/">Home</Link>
          </div>
          <div className="lbox">
            <Link className="inbox" to="/Services">Services</Link>
          </div>
          <div className="lbox">
            <Link  className="inbox"to="/About">About</Link>
          </div>
          <div className="lbox">
            <Link  className="inbox" to="/Contact">Contact</Link>
          </div>
          
        
        </div>
      </nav>
     
      <Outlet />
    </>
  )
};

export default Navbar;
