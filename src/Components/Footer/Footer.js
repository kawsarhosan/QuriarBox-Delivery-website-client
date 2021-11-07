import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            {/* <!-- Footer --> */}
<footer className=" text-center text-lg-start bg-light text-light">

  <div className='bg-custom'>
  
  <section>
    <div className="container text-light text-center text-md-start pt-4 mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 text-light col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            <img src="/logo.png" alt="" />
          </h6>
          <p className='text-light'>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Services
          </h6>
          <p>
            <NavLink to="//ambulance" className="text-light">Parcel Delivery</NavLink>
          </p>
          <p>
            <NavLink to="//React" className="text-light">Bulk shipment</NavLink>
          </p>
          <p>
            <NavLink to="//vue" className="text-light">Line Hall</NavLink>
          </p>
          <p>
            <NavLink to="//laravel" className="text-light">24/7 Support</NavLink>
          </p>
        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <NavLink to="/corona" className="text-light">Helpline</NavLink>
          </p>
          <p>
            <NavLink to="/care" className="text-light">Emaergency Care</NavLink>
          </p>
          <p>
            <NavLink to="/dgfp" className="text-light">DGPF</NavLink>
          </p>
          <p>
            <NavLink to="/help" className="text-light">Help</NavLink>
          </p>
        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 foot">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i className="fas fa-home me-3"></i> Farmgate, Tejgaon, Dhaka.</p>
          <p>
            <i className="fas fa-envelope me-3"></i> info@quriarbox.com.bd
          </p>
          <p><i className="fas fa-phone me-3"></i> 01758216414</p>
          <p><i className="fas fa-print me-3"></i> 01854256485</p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  </div>
  {/* <!-- Section: Links  -->

  <!-- Copyright --> */}
  <div className=" bg-custom2 p-4" >
    <div className='container px-4 d-flex justify-content-between align-items-center'>
    <p>© 2021 Copyright || QuriarBox.com.bd</p>
    <p>Design & Developed by <Link to="www.github.com/kawsarhosan">Md Kawsar Hosan</Link></p>
    </div>
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
        </div>
    );
};

export default Footer;