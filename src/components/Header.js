import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => (
  <header>
    <div className="header-area ">
      <div id="sticky-header" className="main-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-2">
              <div className="logo">
                <a className="text-white" href="/">
                  Real Estate App
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="main-menu white_text  d-none d-lg-block">
                <nav className="d-flex">
                  <ul id="navigation">
                    <li><Link to="/apartments">Find A Home For Yourself!!</Link></li>
                  </ul>
                  <ul>
                    <Link to="/login" className="btn mb-2">Sign In</Link>
                    <Link to="/signup" className="btn mb-2">Sign Up</Link>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;