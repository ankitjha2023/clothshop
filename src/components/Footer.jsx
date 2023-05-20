import React from "react";

import links from "../api/SocialMediaApi";
import { Link } from "react-router-dom";
const Footer = () => (

  <footer className="container-fluid py-3 bg-light">
    <div className="row mt-3">
     
      <div className="col-md-4  d-flex gap-3 justify-content-center">
        <Link to="/" >Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <div className="col-md-4 d-flex  justify-content-center gap-2 fs-5">
        {
          links.map((link)=>{
            return(
              <a href={link.href} key={link.id}><i className={link.class}></i></a>
            )
          })
        }
      </div>
      <div className="col-md-4 text-center">
        <p className="text-sm">Designed and developed By Ankit Jha</p>
      </div>
    </div>

  </footer>
  
    
  //  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 bg-light border-top">
    
  //   <div className="d-flex gap-4 mx-auto">
  //   <li className="nav-item list-unstyled">
         
  //        <Link className="nav-link fw-bold"  to="/about">About</Link>
  //      </li>
  //      <li className="nav-item fw-bold list-unstyled">
      
  //        <Link className="nav-link"  to="/contact">Contact</Link>
  //      </li>
  //   </div>
  //   <div className="d-flex align-items-center justify-content-center text-decoration-none mx-auto py-2">
  //   <a href="https://bit.ly/3I6E9DP"><i className="fab fa-facebook text-dark fs-4"></i></a>
  //   <a href="https://bit.ly/3GpGclc"><i className="fab fa-instagram text-dark fs-4 mx-2"></i></a>
  //   <a href="https://bit.ly/3G0NCKd"><i className="fab fa-linkedin text-dark fs-4"></i></a>
  //   <a href="https://bit.ly/3XubLzN"><i className="fab fa-github text-dark fs-4 mx-2"></i></a>
  //   <a href="https://bit.ly/3i3MY6H"><i className="fab fa-twitter text-dark fs-4"></i></a>
  //   </div>
  //   <p className="mb-0  mx-auto fw-bold text-center">Designed By Ankit Jha</p>
    
  // </footer>
  
);

export default Footer;
 