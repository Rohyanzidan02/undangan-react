import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Navbar.css';

function Navbar() {
  useEffect(() => {
    const stickyTop = document.querySelector('.sticky-top');
    const offcanvas = document.querySelector('#offcanvasNavbar'); // Menggunakan ID yang sama

    const handleShow = () => {
      stickyTop.style.overflow = 'visible';
    };

    const handleHide = () => {
      stickyTop.style.overflow = 'hidden';
    };

    offcanvas.addEventListener('show.bs.offcanvas', handleShow);
    offcanvas.addEventListener('hidden.bs.offcanvas', handleHide);

    // Cleanup function to remove event listeners
    return () => {
      offcanvas.removeEventListener('show.bs.offcanvas', handleShow);
      offcanvas.removeEventListener('hidden.bs.offcanvas', handleHide);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <nav className="navbar navbar-expand-md sticky-top mynavbar">
      <div className="container">
        <a className="navbar-brand" href="#">Kris & Restiani</a>
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasNavbar" // ID yang sama
          aria-controls="offcanvasNavbar" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div 
          className="offcanvas offcanvas-end" 
          tabIndex="-1" 
          id="offcanvasNavbar" // ID yang sama
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Kris & Restiani</h5>
            <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="offcanvas" 
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#home">Home</a>
              <a className="nav-link" href="#info">Info</a>
              <a className="nav-link" href="#story">Story</a>
              <a className="nav-link" href="#gallery">Gallery</a>
              <a className="nav-link" href="#rsvp">RSVP</a>
              <a className="nav-link" href="#gifts">Gifts</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;