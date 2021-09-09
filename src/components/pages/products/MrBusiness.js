import React, { Fragment, useEffect } from 'react';

const MrBusiness = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Fragment>
      <div className="breatcome_area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome_title">
                <div className="breatcome_title_inner pb-2">
                  <h2>Mr. Business</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="#">Home</a>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <a href="#"> Pages</a>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <span>Mr. Business</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_area pt-85 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
              <div className="about_thumb">
                <img src="assets/images/about-2.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
              <div className="section_title text_left mb-40 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6>Save time </h6>
                </div>
                <div className="section_main_title">
                  <h1>
                    Stay focused and work smarter with automated solutions of
                    <span> Cloudin</span>
                  </h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
              <div className="singel_about_left mb-30">
                <div className="singel_about_left_inner mb-3">
                  <div className="singel-about-content boder pl-4">
                    <p>
                      Cloudin offers solutions that support a wide range of
                      management frameworks for admin and employee and map the
                      task to governance, risk, and compliance (GRC) that are
                      configured on the project management.
                    </p>
                  </div>
                </div>
                 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature_area ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="mrBusiness_Box_minHeight feature_style_eight mb-30 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="feature_style_eight_content">
                  <div className="feature_style_eight_icon">
                    <i className="fa fa-laptop"></i>
                    <div className="anim-icon">
                      <span className="icon icon-1"></span>
                      <span className="icon icon-2"></span>
                      <span className="icon icon-3"></span>
                    </div>
                  </div>
                  <div className="feature_style_eight_title pt-4">
                    <h4>
                      <a href="managed-service.html"> Admin Module</a>
                    </h4>
                  </div>
                  <div className="feature_style_eight_text pt-15">
                    <p>
                      A lot project details, client’s schedule, fix
                      product/project price, add new employee, assign task and
                      much more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="mrBusiness_Box_minHeight feature_style_eight mb-30 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="feature_style_eight_content">
                  <div className="feature_style_eight_icon">
                    <i className="fa fa-bullseye "></i>
                    <div className="anim-icon">
                      <span className="icon icon-1"></span>
                      <span className="icon icon-2"></span>
                      <span className="icon icon-3"></span>
                    </div>
                  </div>
                  <div className="feature_style_eight_title pt-4">
                    <h4>
                      <a href="industries.html">Employee Module</a>
                    </h4>
                  </div>
                  <div className="feature_style_eight_text pt-15">
                    <p>
                      Collect information from client, resolve queries if any
                      and report the upper management and client with status of
                      the product/ project
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="mrBusiness_Box_minHeight feature_style_eight mb-30 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="feature_style_eight_content">
                  <div className="feature_style_eight_icon">
                    <i className="fa fa-life-ring"></i>
                    <div className="anim-icon">
                      <span className="icon icon-1"></span>
                      <span className="icon icon-2"></span>
                      <span className="icon icon-3"></span>
                    </div>
                  </div>
                  <div className="feature_style_eight_title pt-4">
                    <h4>
                      <a href="business-solution.html"> Mapping</a>
                    </h4>
                  </div>
                  <div className="feature_style_eight_text pt-15">
                    <p>
                      Locate the location of the client by a google map to a
                      marketing person
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="mrBusiness_Box_minHeight feature_style_eight mb-30 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="feature_style_eight_content">
                  <div className="feature_style_eight_icon">
                    <i className="fa fa-life-ring"></i>
                    <div className="anim-icon">
                      <span className="icon icon-1"></span>
                      <span className="icon icon-2"></span>
                      <span className="icon icon-3"></span>
                    </div>
                  </div>
                  <div className="feature_style_eight_title pt-4">
                    <h4>
                      <a href="business-solution.html"> Notifications</a>
                    </h4>
                  </div>
                  <div className="feature_style_eight_text pt-15">
                    <p>
                      View e-books & blogs, announcements for events and news
                      feeds, raise request and enquiry and many more
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="mrBusiness_Box_minHeight feature_style_eight mb-30 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="feature_style_eight_content">
                  <div className="feature_style_eight_icon">
                    <i className="fa fa-life-ring"></i>
                    <div className="anim-icon">
                      <span className="icon icon-1"></span>
                      <span className="icon icon-2"></span>
                      <span className="icon icon-3"></span>
                    </div>
                  </div>
                  <div className="feature_style_eight_title pt-4">
                    <h4>
                      <a href="business-solution.html"> Task View</a>
                    </h4>
                  </div>
                  <div className="feature_style_eight_text pt-15">
                    <p>
                      Show the task to the management, client and others related
                      to the product / project and meet the client’s requirement
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="mrBusiness_Box_minHeight feature_style_eight mb-30 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="feature_style_eight_content">
                  <div className="feature_style_eight_icon">
                    <i className="fa fa-life-ring"></i>
                    <div className="anim-icon">
                      <span className="icon icon-1"></span>
                      <span className="icon icon-2"></span>
                      <span className="icon icon-3"></span>
                    </div>
                  </div>
                  <div className="feature_style_eight_title pt-4">
                    <h4>
                      <a href="business-solution.html"> Product View</a>
                    </h4>
                  </div>
                  <div className="feature_style_eight_text pt-15">
                    <p>
                      View the product images, UI/UX, landing pages and provide
                      demo od the project assigned
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service_area style2 pb-70 invent">
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="section_title text_left mb-55">
                <div className="section_main_title">
                  <h1> Prioritise and allocate business activities smartly </h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="service_single_thumb left">
                <div className="single_service_inner_thumb">
                  <img src="assets/images/service1.png" alt="" />
                </div>
                <div className="single_service_brg">
                  <div className="single_service_brg_thumb rotateme">
                    <img src="assets/images/service-rot.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="single_service">
                <div className="single_service_inner">
                  <div className="single_service_icon">
                    <i className="fa fa-dribbble"></i>
                  </div>
                  <div className="single_service_content">
                    <h4>Real-time status on task assigned</h4>
                  </div>
                </div>
              </div>
              <div className="single_service">
                <div className="single_service_inner">
                  <div className="single_service_icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="single_service_content">
                    <h4>Prioritise high-value work</h4>
                  </div>
                </div>
              </div>

              <div className="single_service">
                <div className="single_service_inner">
                  <div className="single_service_icon">
                    <i className="fa fa-desktop"></i>
                  </div>
                  <div className="single_service_content">
                    <h4>Measure the turn-around and average handling time</h4>
                  </div>
                </div>
              </div>
              <div className="single_service">
                <div className="single_service_inner">
                  <div className="single_service_icon">
                    <i className="fa fa-dashcube"></i>
                  </div>
                  <div className="single_service_content">
                    <h4>Enable better capacity planning</h4>
                  </div>
                </div>
              </div>
              <div className="single_service">
                <div className="single_service_inner">
                  <div className="single_service_icon">
                    <i className="fa fa-forward"></i>
                  </div>
                  <div className="single_service_content">
                    <h4>Balance workload between teams</h4>
                  </div>
                </div>
              </div>

              <div className="single_service">
                <div className="single_service_inner">
                  <div className="single_service_icon">
                    <i className="fa fa-forward"></i>
                  </div>
                  <div className="single_service_content">
                    <h4>Transform processes based on work patterns</h4>
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
export default MrBusiness;
