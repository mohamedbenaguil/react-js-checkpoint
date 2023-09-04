import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div >

  <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
    <div className="container">
      <a href="#" className="navbar-brand">
        {/* Logo Image */}
        <img
          src="https://toppng.com/uploads/preview/aming-and-esports-logos-11563768848wyzgnn9umv.png"          width={45}
          alt="no connexion"
          className="d-inline-block align-middle mr-2"
        />
        {/* Logo Text */}
        <span className="text-uppercase font-weight-bold">SPORT SHOP</span>
      </a>
      <button
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="navbar-toggler"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div id="navbarSupportedContent" className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a href="/home" className="nav-link">
              Home <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a href="/Register" className="nav-link">
              Signe Up
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 

    </div>
  )
}

export default Navbar