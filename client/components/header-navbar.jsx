import React from 'react';
import 'bootstrap';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <>
      <div className="shadow-sm col-12 sticky-top bg-white">
        <div className="row d-flex justify-content-between">
          <img id="logo" src="images/ECOfav.png" className=""></img>
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mt-2">
                <li className="nav-item">
                  <NavLink to="/" exact className="nav-link text-muted">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown ml-3">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">What I Do</a>
                  <div className="dropdown-menu dropdown-width" aria-labelledby="navbarDropdownMenuLink">
                    <NavLink to="/carpet-cleaning" className="nav-link text-muted px-2">Carpet Cleaning</NavLink><br></br>
                    <NavLink to="/area-rug" className="text-muted px-2">Area Rug Cleaning</NavLink><br></br>
                    <NavLink to="/furniture-upholstrey" className="text-muted px-2">Furniture/Upholstrey Cleaning</NavLink><br></br>
                    <NavLink to="/grout-tile" className="text-muted px-2">Tile/Grout Cleaning</NavLink><br></br>
                    <NavLink to="/" className="text-muted px-2">Auto Detailng</NavLink>
                  </div>
                </li>
                <li className="nav-item ml-3">
                  <NavLink to="/reviews" className="nav-link" href="#">Reviews</NavLink>
                </li>
                <li className="nav-item ml-3">
                  <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item ml-3">
                  <NavLink to="/estimate" className="nav-link" href="#">Schedule Estimate</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <div className="bg-hero"></div>
        </div>
      </div>
    </>
  );
}

export default Header;
