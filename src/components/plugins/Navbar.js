import $ from 'jquery';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-header').addClass('sticky');
      } else {
        $('#sticky-header').removeClass('sticky');
      }
    });
  }, []);

  return (
    <Fragment>
      <div>
        <div className="header_top_menu pt-2 pb-2 bg_color">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-sm-8">
                <div className="header_top_menu_address">
                  <div className="header_top_menu_address_inner">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-envelope-o"></i>example@gmail.com
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker"></i>24/5, 1st Floor,
                          Kurigram
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-phone"></i>+ (1800) 456 7890
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4">
                <div className="header_top_menu_icon">
                  <div className="header_top_menu_icon_inner">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sticky-header"
          className="techno_nav_manu d-md-none d-lg-block d-sm-none d-none"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="logo mt-1">
                  <a className="logo_img" href="index.html" title="Cloudin">
                    <img src="assets/images/cloudin_logo.png" alt="Cloudin" />
                  </a>
                  <a className="main_sticky" href="index.html" title="Cloudin">
                    <img src="assets/images/cloudin_logo_hover.png" alt="Cloudin" />
                  </a>
                </div>
              </div>
              <div className="col-md-9">
                <nav className="techno_menu">
                  <ul className="nav_scroll">
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/aboutus">Company</NavLink>
                      <ul className="sub-menu">
                        <li>
                          <NavLink activeClassName="active" to="/aboutus">
                            About us
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/ourteam">
                            Our team
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/investor">
                            Investor
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/portfolio">
                            Portfolio
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/services">
                            Services
                          </NavLink>
                      <ul className="sub-menu">
                        <li>
                          <NavLink activeClassName="active" to="/ai">
                            Artificial Intelligence
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/mLnNLP">
                            ML & NLP
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/blockchain">
                            Blockchain
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/chatBot">
                            Chat bot
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/aWSnAzure">
                            AWS & Azure
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/react">
                            React
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/iTConsulting">
                            IT Consulting
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/mobileApp">
                            Mobile App
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/webApp">
                            Web App
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/uiux">
                            UI/UX Design
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#solution.html">Products</a>
                      <ul className="sub-menu">
                        <li>
                          <NavLink activeClassName="active" to="/ai">
                            Inventory
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/ai">
                            Mr.Business
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/ai">
                            Finjo
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/ai">
                            E-Camp
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#elements.html">Policies</a>
                      <ul className="sub-menu">
                        <li>
                          <NavLink activeClassName="active" to="/privacy">
                            Privacy Policy
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/pricing">
                            Pricing Policy
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/refund">
                            Refund Policy
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/tc">
                            Terms & Conditions
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                     <li>
                     <NavLink activeClassName="active" to="/ai">
                            Contact us
                          </NavLink>
                       </li>
                  </ul>
                  <div className="donate-btn-header">
                    <a className="dtbtn" href="#">
                      Get A Quote
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu-area d-sm-block d-md-block d-lg-none ">
          <div className="mobile-menu">
            <nav className="techno_menu">
              <ul className="nav_scroll">
                <li>
                  <a href="#home">Home</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="index.html">Home One</a>
                    </li>
                    <li>
                      <a href="#new-demo.html">Added New Demo</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index-11.html">Home Eleven New</a>
                        </li>
                        <li>
                          <a href="index-12.html">Home Twelve New</a>
                        </li>
                        <li>
                          <a href="index-13.html">Home Thirteen New</a>
                        </li>
                        <li>
                          <a href="data-science.html">Data Science New</a>
                        </li>
                        <li>
                          <a href="machine-learning.html">
                            Machine Learning New
                          </a>
                        </li>
                        <li>
                          <a href="affiliate-intelligent.html">
                            Affiliate Intelligent New
                          </a>
                        </li>
                        <li>
                          <a href="revulation-slider.html">
                            Revulation Slider One
                          </a>
                        </li>
                        <li>
                          <a href="revulation-slider-2.html">
                            Revulation Slider Two
                          </a>
                        </li>
                        <li>
                          <a href="home-dark.html">Dark Version New</a>
                        </li>
                        <li>
                          <a href="index-14.html">Home Animation New</a>
                        </li>
                        <li>
                          <a href="landing-1.html">Landing One New</a>
                        </li>
                        <li>
                          <a href="landing-2.html">Landing Two New</a>
                        </li>
                        <li>
                          <a href="landing-3.html">Landing Three New</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="index-2.html">Home Two</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home Three</a>
                    </li>
                    <li>
                      <a href="index-4.html">Home Four</a>
                    </li>
                    <li>
                      <a href="index-5.html">Home Five</a>
                    </li>
                    <li>
                      <a href="index-6.html">Home Six</a>
                    </li>
                    <li>
                      <a href="index-7.html">Home Seven</a>
                    </li>
                    <li>
                      <a href="index-8.html">Home Eight</a>
                    </li>
                    <li>
                      <a href="index-9.html">Home Nine</a>
                    </li>
                    <li>
                      <a href="index-10.html">Home Ten</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="#company.html">Company</NavLink>
                  <ul className="sub-menu">
                    <li>
                      <NavLink to="/aboutus">About us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/ourteam">Our team</NavLink>
                    </li>
                    <li>
                      <NavLink to="/investor">Investor</NavLink>
                    </li>
                    <li>
                      <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#service.html">Services</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="service-1.html">Service One</a>
                    </li>
                    <li>
                      <a href="service-2.html">Service Two</a>
                    </li>
                    <li>
                      <a href="service-3.html">Service Three</a>
                    </li>
                    <li>
                      <a href="service-4.html">Service Four</a>
                    </li>
                    <li>
                      <a href="service-details.html">Service Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#solution.html">IT Solution</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="managed-service.html">Managed IT Service</a>
                    </li>
                    <li>
                      <a href="it-service.html">IT Service</a>
                    </li>
                    <li>
                      <a href="industries.html">Industries</a>
                    </li>
                    <li>
                      <a href="business-solution.html">Business Solution</a>
                    </li>
                    <li>
                      <a href="product-design.html">Product Design</a>
                    </li>
                    <li>
                      <a href="service-details.html">IT Service Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#elements.html">Element</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="service-element.html">Service Box</a>
                    </li>
                    <li>
                      <a href="info-box-element.html">Info Box</a>
                    </li>
                    <li>
                      <a href="team-element.html">Teams</a>
                    </li>
                    <li>
                      <a href="case-study-element.html">Case Study</a>
                    </li>
                    <li>
                      <a href="process-element.html">Process</a>
                    </li>
                    <li>
                      <a href="testimonial-element.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="pricing-element.html">Pricing</a>
                    </li>
                    <li>
                      <a href="counter-element.html">Counters</a>
                    </li>
                    <li>
                      <a href="call-do-action-element.html">Call Do Action</a>
                    </li>
                    <li>
                      <a href="brand-element.html">Brands</a>
                    </li>
                    <li>
                      <a href="blog-element.html">Blogs</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#blog">Blog </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog-gird.html">Blog Gird</a>
                    </li>
                    <li>
                      <a href="blog-list.html">Blog List</a>
                    </li>
                    <li>
                      <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="contact.html">Contact One</a>
                    </li>
                    <li>
                      <a href="contact-2.html">Contact Two New</a>
                    </li>
                    <li>
                      <a href="contact-3.html">Contact Three New</a>
                    </li>
                    <li>
                      <a href="contact-4.html">Contact Four New</a>
                    </li>
                    <li>
                      <a href="contact-5.html">Contact Five New</a>
                    </li>
                    <li>
                      <a href="contact-6.html">Contact Six New</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
