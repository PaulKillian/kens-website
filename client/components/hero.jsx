import React from 'react';
import AOS from 'aos';

AOS.init();

function Hero() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <img className="position-absolute text" src="/images/logo8.png "></img>
      </div>
      <div className="paralax"></div>
    </>
  );
}

export default Hero;