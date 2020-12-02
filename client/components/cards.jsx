import React from 'react';
import { NavLink } from 'react-router-dom';

function Cards() {
  return (
    <>
      <div className="d-flex justify-content-center display-4 mt-5">
        <div data-aos="fade-up" data-aos-duration="2000" className="mr-5 text-white simple shadowed col-5 carpet-s containTL center-card-text">Carpet
          <div className="overlayL">
            <div className="text shadowed">Carpet</div>
            <NavLink to="/carpet-gallery" className="nav-link text-white text-left">Photos</NavLink>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="text-white simple shadowed col-5 upholstrey-s containTR center-card-text">Furniture/Upholstrey
          <div className="overlayR">
            <div className="text shadowed-text">Furniture/Upholstrey</div>
            <NavLink to="/upholstrey-gallery" className="nav-link text-white text-left">Photos</NavLink>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center display-4 mt-5">
        <div data-aos="fade-bottom" data-aos-duration="2000" className="mr-5 text-white simple shadowed col-5 area-s containBL center-card-text">Area Rug
          <div className="overlayL">
            <div className="text">Area Rug</div>
          </div>
        </div>
        <div data-aos="fade-bottom" data-aos-duration="2000" className="text-white simple col-5 shadowed grout-s containBR center-card-text">Tile/Grout
          <div className="overlayR">
            <div className="text">Tile/Grout</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
