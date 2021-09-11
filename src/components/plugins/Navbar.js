import $ from 'jquery';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  useEffect(() => {
    $(window).on('scroll', function () {
      var ww = document.body.clientWidth;
      if ($(window).scrollTop() > 50) {
        $('#sticky-header').addClass('sticky');
      } else {
        $('#sticky-header').removeClass('sticky');
      }

      if ($(window).scrollTop() > 50) {
        if (ww < 1023) {
          $('#sticky-header').removeClass('sticky');
        } else if (ww >= 1024) {
          $('#sticky-header').addClass('sticky');
        }
      }
    });

    //MOBILE view

    var menu = 'close';
    $('.mobile-one .menu-toggle').on('click', function () {
      if (menu === 'close') {
        $(this)
          .parent()
          .next('.mobile-nav')
          .css('transform', 'translate(0, 0)');
        menu = 'open';
      } else {
        $(this)
          .parent()
          .next('.mobile-nav')
          .css('transform', 'translate(-100%, 0)');
        menu = 'close';
      }
    });

    $('li ul li').on('click', function () {
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .css('transform', 'translate(-100%, 0)');

      menu = 'close';
    });
    $('li.standalone').on('click', function () {
      $(this).parent().parent().css('transform', 'translate(-100%, 0)');
      menu = 'close';
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
                        <a
                          href="https://www.facebook.com/cloudintechnologies/"
                          target="_blank"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/cloudintech?s=21"
                          target="_blank"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://www.linkedin.com/company/cloudin-tech"
                          target="_blank"
                        >
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
        <div id="sticky-header" className="techno_nav_manud-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12 col-xs-12 logoAlign">
                <div className="logo mt-1">
                  <NavLink to="/home" className="logo_img">
                    <img src="assets/images/cloudin_logo.png" alt="Cloudin" />
                  </NavLink>

                  <NavLink className="main_sticky" to="/home">
                    <img src="assets/images/cloudin_logo.png" alt="Cloudin" />
                  </NavLink>
                </div>
              </div>
              <div className="col-md-9 col-sm-12 col-xs-12 menuAlign">
                <div className="mobile-wrapper">
                  <div className="mobile mobile-one">
                    <div className="header">
                      <div className="menu-toggle">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                      </div>
                    </div>
                    <nav className="techno_menu mobile-nav">
                      <ul className="nav_scroll">
                        <li className="standalone">
                          <NavLink to="/home">Home</NavLink>
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
                            {/* <li>
                              <NavLink activeClassName="active" to="/investor">
                                Investor
                              </NavLink>
                            </li> */}
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
                                Artificial intelligence
                              </NavLink>
                            </li>
                            <li>
                              <NavLink activeClassName="active" to="/mLnNLP">
                                ML & NLP
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                activeClassName="active"
                                to="/blockchain"
                              >
                                Blockchain
                              </NavLink>
                            </li>
                            <li>
                              <NavLink activeClassName="active" to="/chatBot">
                                Chatbot
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
                              <NavLink
                                activeClassName="active"
                                to="/iTConsulting"
                              >
                                IT consulting
                              </NavLink>
                            </li>
                            <li>
                              <NavLink activeClassName="active" to="/mobileApp">
                                Mobile app
                              </NavLink>
                            </li>
                            <li>
                              <NavLink activeClassName="active" to="/webApp">
                                Web app
                              </NavLink>
                            </li>
                            <li>
                              <NavLink activeClassName="active" to="/uiux">
                                UI/UX design
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                activeClassName="active"
                                to="/virtualAssist"
                              >
                                Virtual assistant
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
                              <NavLink
                                activeClassName="active"
                                to="/mrBusiness"
                              >
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
                                Privacy policy
                              </NavLink>
                            </li>
                            <li>
                              <NavLink activeClassName="active" to="/pricing">
                                Pricing policy
                              </NavLink>
                            </li>
                            <li>
                              <NavLink activeClassName="active" to="/refund">
                                Refund policy
                              </NavLink>
                            </li>
                            <li>
                              <NavLink activeClassName="active" to="/tc">
                                Terms & Conditions
                              </NavLink>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="cursor_pointer"
                          // onClick={handleScroll}
                        >
                          <NavLink activeClassName="active" to="/contactus">
                            Contact us
                          </NavLink>
                        </li>
                      </ul>
                      <div className="donate-btn-header">
                        <a
                          className="dtbtn"
                          href="https://t.me/cloudinQ"
                          target="_blank"
                        >
                          Get a quote
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
