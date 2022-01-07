import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const [ind, setInd] = useState(true);
  const [nz, setNz] = useState(false);
  const [us, setUs] = useState(false);
  const countryClick = (ctry) => {
    if (ctry === 'ind') {
      setInd(true);
      setNz(false);
      setUs(false);
    }
    if (ctry === 'us') {
      setUs(true);
      setNz(false);
      setInd(false);
    }
    if (ctry === 'nz') {
      setNz(true);
      setUs(false);
      setInd(false);
    }
  };
  return (
    <Fragment>
      <div className="footer-middle pt-95 call_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="widget widgets-company-info">
                {/* <div className="footer-bottom-logo pb-40">
                  <img src="assets/images/cloudin_logo_hover.png" alt="" />
                </div> */}
                <div className="company-info-desc">
                  <p className="border_bottom_dotted">
                    Experience the simplest yet the most powerful and seamless
                    techno-digital Solution.{' '}
                  </p>

                  <p className="border_bottom_dotted">
                    Bridging the gap between business and technology with
                    Cloudin IT Solutions
                  </p>

                  <p>
                    Mapping the innovations that adds lasting value in every
                    direction
                  </p>
                </div>
                <div className="follow-company-info pt-3">
                  <div className="follow-company-text mr-3">
                     
                      <p className="color_white">Follow Us</p>
                    
                  </div>
                  <div className="follow-company-icon">
                    <a
                      href="https://www.facebook.com/cloudintechnologies/"
                      target="_blank" rel="noreferrer"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a
                      href="https://twitter.com/cloudintech?s=21"
                      target="_blank" rel="noreferrer"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/cloudin-tech"
                      target="_blank" rel="noreferrer"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="widget widgets-company-info">
                <h3 className="widget-title pb-4">Company Address</h3>
                <div className="company-info-desc">
                  {ind && (
                    <div>
                      <p>
                        Cloudin, <br />
                        10th street, Sri sai Towers, <br />
                        Axis Bank Building,<br />
                        from 10th street, Sri Kumaran Cut, <br />
                        from 100 feet Malabar Cut, <br />
                        Coimbatore. Tamilnadu,<br /> 
                        India, Contact : 0422 - 4960128, <br />
                        Email : info@cloudin.email
                      </p>
                      
                    </div>
                  )}
                  {us && (
                    <div>
                      <p>
                        Cloudin, Sunnyvale, <br />
                        California,
                        <br />
                        USA-641004.
                        <br /> Contact : +1(206)7523331, <br />
                        Email : info@cloudin.email
                      </p>
                    </div>
                  )}
                  {nz && (
                    <div>
                      <p>
                        Cloudin, 113D, Sturges Road, <br />
                        Henderson,
                        <br />
                        Auckland, Newzealand ,
                        <br /> Contact : +64 02102920557, <br />
                        Email : info@cloudin.email
                      </p>
                    </div>
                  )}
                  <div className="countries">
                    <div className="display_inlineblock">
                      <img
                        className="cursor_hand"
                        src="assets/images/cloudinIcons/india_flag.svg"
                        width="40"
                        onClick={() => {
                          countryClick('ind');
                        }}  alt=""
                      />
                      {ind && (
                        <span className="active display_block flag_width"></span>
                      )}
                    </div>
                    <div className="display_inlineblock">
                      <img
                        className="cursor_hand"
                        src="assets/images/cloudinIcons/usa_flag.svg"
                        width="40"
                        onClick={() => {
                          countryClick('us');
                        }} alt=""
                      />
                      {us && (
                        <span className="active display_block flag_width"></span>
                      )}
                    </div>
                    <div className="display_inlineblock">
                      <img
                        className="cursor_hand"
                        src="assets/images/cloudinIcons/newzealand_flag.svg"
                        width="40"
                        onClick={() => {
                          countryClick('nz');
                        }} alt=""
                      />
                      {nz && (
                        <span className="active display_block flag_width"></span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div id="em-recent-post-widget">
                <div className="single-widget-item">
                  <h4 className="widget-title pb-0">Recent post</h4>
                  <div className=" active pb-3">
                    <div className="recent-post-image mr-3  pb-4">
                       
                        <img
                          width="200"
                          height="200"
                          src="../assets/images/recent_posts.svg"
                          alt=""
                        />
                       
                    </div>
                    <div className="recent-post-text">
                      <h5>
                        <a
                          href="https://www.linkedin.com/feed/update/urn:li:activity:6848295836535934976"
                          target="_blank" rel="noreferrer"
                        >
                          Virtual Assistant
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer-bottom mt-70 pt-3 pb-1">
            <div className="col-lg-6 col-md-6">
              <div className="footer-bottom-content">
                <div className="footer-bottom-content-copy">
                  <p>&copy; 2021 Cloudin. All Rights Reserved. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="footer-bottom-right">
                <div className="footer-bottom-right-text">
                  <NavLink activeClassName="active" to="/privacy">
                    Privacy policy
                  </NavLink>
                  &nbsp; | &nbsp;
                  <NavLink activeClassName="active" to="/tc">
                    Terms & Conditions
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
