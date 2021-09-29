import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';

import RecentImg1 from '../../assets/images/recent1.jpg';
import RecentImg3 from '../../assets/images/recent3.jpg';

const Footer = (props) => {
  const [ind, setInd] = useState();
  const [nz, setNz] = useState();
  const [us, setUs] = useState();
  const countryClick = (ctry) => {

  }
  return (
    <Fragment>
      <div className="footer-middle pt-95 call_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
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
                    <a href="#">
                      <p>Follow Us</p>
                    </a>
                  </div>
                  <div className="follow-company-icon">
                    <a
                      href="https://www.facebook.com/cloudintechnologies/"
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a
                      href="https://twitter.com/cloudintech?s=21"
                      target="_blank"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/cloudin-tech"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                     
                  </div>
                </div>
              </div>
            </div>
             
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget widgets-company-info">
                <h3 className="widget-title pb-4">Company Address</h3>
                <div className="company-info-desc">
                  <p>
                    201, Vanjiamman Building, <br />
                    Esso Bunk, Peelamedu,
                    <br />
                    Coimbatore-641004. Tamilnadu,
                    <br /> India, Contact : 0422 - 4960128, <br />
                    Email : info@cloudin.email
                  </p>
                  <p>
                    Sri Ekadantha Building, <br /> #10 2nd Cross,
                    <br /> Old Madiwala, BTM 1st Stag
                    <br /> Bangalore-68. , India <br />
                    Contact : +91 90436 86520, <br />
                    Email : info@cloudin.email
                  </p>
                  <p className="countries">
                    <img
                      className="active"
                      src="https://www.countryflags.io/in/flat/64.png"
                      width="40"
                    />
                    <img
                      src="https://www.countryflags.io/us/flat/64.png"
                      width="40"
                    />
                    <img
                      src="https://www.countryflags.io/nz/flat/64.png"
                      width="40"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div id="em-recent-post-widget">
                <div className="single-widget-item">
                  <h4 className="widget-title pb-0">Recent post</h4>
                  <div className=" active pb-3">
                    <div className="recent-post-image mr-3  pb-4">
                      <a href="#">
                        <img width="200" height="200" src="../assets/images/recent_posts.svg" alt="" />
                      </a>
                    </div>
                    <div className="recent-post-text">
                      <h5>
                        <a href="#">Cloudin new site <span className="rcomment">3.O</span></a>
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
