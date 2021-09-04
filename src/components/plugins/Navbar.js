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
                        <NavLink activeClassName="active" to="/virtualAssist">
                          <i className="fa fa-life-ring" aria-hidden="true"></i>
                          Do you need an awesome virtual assistant? to know all
                          the best tools to get things done quickly.
                        </NavLink>
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
                    <img
                      src="assets/images/cloudin_logo_hover.png"
                      alt="Cloudin"
                    />
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
                        {/* <li>
                          <NavLink activeClassName="active" to="/portfolio">
                            Portfolio
                          </NavLink>
                        </li> */}
                      </ul>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/ai">
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
                        <li>
                          <NavLink activeClassName="active" to="/virtualAssist">
                            Virtual Assistant
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/inventory">
                        Products
                      </NavLink>
                      <ul className="sub-menu">
                        <li>
                          <NavLink activeClassName="active" to="/inventory">
                            Inventory
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/mrBusiness">
                            Mr.Business
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/finjo">
                            Finjo
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName="active" to="/eCamp">
                            E-Camp
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/privacy">
                        Policies
                      </NavLink>
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
                      <NavLink activeClassName="active" to="/home">
                        Contact us
                      </NavLink>
                    </li>
                  </ul>
                  <div className="donate-btn-header">
                    <a className="dtbtn">Get A Quote</a>
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
                  <NavLink to="/">Home Mobile</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/aboutus">
                    Company
                  </NavLink>
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
                    {/* <li>
                          <NavLink activeClassName="active" to="/portfolio">
                            Portfolio
                          </NavLink>
                        </li> */}
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
                    <li>
                      <NavLink activeClassName="active" to="/virtualAssist">
                        Virtual Assistant
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/inventory">
                    Products
                  </NavLink>
                  <ul className="sub-menu">
                    <li>
                      <NavLink activeClassName="active" to="/inventory">
                        Inventory
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/mrBusiness">
                        Mr.Business
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/finjo">
                        Finjo
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/eCamp">
                        E-Camp
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/services">
                    Policies
                  </NavLink>
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
                  <NavLink activeClassName="active" to="/home">
                    Contact us
                  </NavLink>
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
