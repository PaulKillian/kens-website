import React from 'react';
import BasicAccordion from '../accordions/basic-accordion';
import DeepAccordion from '../accordions/deep-accordion';
import CarAccordion from '../accordions/car-accordion';
import PaintAccordion from '../accordions/paint-accordion';

function PriceCards() {
  return (
    <div className={'container mt-5 mb-5'}>
      <div className={'row d-flex justify-content-around'}>
        <div id={'price-card'} className={'mt-2 border-0 rounded text-white col-6-sm col-lg-7 col-md-12 shadowed'}>
          <div className={'bg-dark '}>
            <h2 className={'pt-2 text-center'}>Basic Interior Cleaning</h2>
            <p className={'text-center'}>What the service will include:</p>
            <hr className={'bg-white'}></hr>
            <ul className={'pb-2 bg-white text-dark pr-2'}>
              <li>Thorough dusting &amp; vacuuming</li>
              <li>Vacuum Trunk area (optional)</li>
              <li>Wiping down all interior surfaces with interior detailer or</li>
              <li>APC - All purpose cleaner or detail cleaning product.
                (Depending on level of soil on surfaces)</li>
              <li>Cleaning interior glass and windows</li>
              <li>This is a basic or maintenance cleaning of the interior. I only offer this
                service to vehicles that do not need a deep thorough cleaning. If the
                vehicle requires a deeper cleaning? I can provide a higher level more
                detailed interior service</li>
            </ul>
            <hr className={'bg-white'}></hr>
          </div>
          <BasicAccordion mb={1}/>
        </div>
        <div id={'price-card'} className={'mt-2 border-0 rounded text-white col-6-sm col-lg-7 col-md-12 shadowed'}>
          <div className={'bg-dark '}>
            <h2 className={'pt-2 text-center'}>Deep Interior Cleaning</h2>
            <p className={'text-center'}>What the service will include:</p>
            <hr className={'bg-white'}></hr>
            <ul className={'pb-2 bg-white text-dark pr-2'}>
              <li>Thorough dusting &amp; vacuuming</li>
              <li>Vacuum Trunk area (optional)</li>
              <li>Clean and Steam all plastic side panels, door panels and center console</li>
              <li>Dust and clean dashboard, steering wheel &amp; column, all instrument
              panels, glove box, rear view mirror, visors, vents, and headliner</li>
              <li>Clean all fabric surfaces (seats, carpets, mats)</li>
              <li>Clean and condition leather surfaces</li>
              <li>Clean &amp; Steam Gas and Brake pedals</li>
              <li>Apply a UV protective coating to all plastic and vinyl surfaces.
              (Dash, Door panels, Console, Steering column area, side panels, and all
              other trim.)</li>
            </ul>
            <hr className={'bg-white'}></hr>
          </div>
          <DeepAccordion />
        </div>
        <div id={'price-card'} className={'mt-2 border-0 rounded text-white col-6-sm col-lg-7 col-md-12 shadowed'}>
          <div className={'bg-dark'}>
            <h2 className={'pt-2 text-center'}>Paint Polishing Enhancement and Protection</h2>
            <div className={'text-center'}>
              <p>Clear Coat Decontamination</p>
              <p>Sealant / Wax / Coating Applications:</p>
              <hr className={'bg-white'}></hr>
            </div>
            <div className={'bg-white text-dark px-3'}>
              <p>Step 1. Clay towel, Clay disc or Clay bar to remove embedded
              contaminants from the clear coat and windshield</p>
              <p>Step 2. Clean all Clayed surfaces with a paint prep or APA which is an
              alcohol wash and distilled to remove any particles left behind on the
              surface prior to polishing</p>
              <p>Step 3. One-step polish (Using a D/A dual action polisher) with an AIO
              all in one glaze polish seal or all in one polish finishing with a sealant
              wax or Graphene coating for up to 6 months of clear coat protection</p>
            </div>
            <hr className={'bg-white'}></hr>
          </div>
          <PaintAccordion />
        </div>
        <div id={'price-card'} className={'mt-2 border-0 rounded text-white col-6-sm col-lg-7 col-md-12 shadowed'}>
          <div className={'bg-dark'}>
            <h2 className={'text-center pt-2'}>Car Wash</h2>
            <hr className={'bg-white'}></hr>
            <ul className={'bg-white text-dark'}>
              <li>Complete Hand wash and dry</li>
              <li>Clean and Detail wheels &amp; Dress Tires</li>
              <li>Clean door jambs</li>
              <li>Clean exterior glass and windows</li>
            </ul>
            <hr className={'bg-white'}></hr>
          </div>
          <div className={'mb-2'}>
            <CarAccordion />
          </div>
          <div className={'bg-dark text-white text-center'}>
            <h2>Additional Services</h2>
            <h2>Plastic Trim Restoration</h2>
          </div>
          <div className={'text-center'}>
            <p>Small $10<br></br>Approximate Time: 40 minutes<br></br></p>
            <p>Medium $15<br></br>Approximate Time: 45 minutes<br></br></p>
            <p>Large $20<br></br>Approximate Time: 50 minutes</p>
          </div>
          <div className={'text-center'}>
            <h3>Front Headlight Restoration</h3>
            <p>$125 ~ Approximate Time: ~ 1 hour</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCards;
