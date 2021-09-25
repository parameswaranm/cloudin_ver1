import React, { Fragment, useEffect } from 'react';

const MobileApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Fragment>
      <div className="breatcome_mobileapp d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome_title">
                <div className="breatcome_title_inner pb-2">
                  <h2>Mobile app development</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="#">Home</a>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <a href="#"> Pages</a>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <span>Mobile app development</span>
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
                  <h6>Full Spectrum of Mobile Development Services </h6>
                </div>
                <div className="section_main_title">
                  <h1>
                    That you can count on
                    <br />
                    <span> our Cutting-edge technology</span>
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
                      In today’s technological era, mobile app development is no
                      more an option but a must-have digital strategy for every
                      business. Mobile apps are the modern day communication
                      channels of businesses to reach their customers directly.
                      The demand for high-end android and iOS applications has
                      escalated in the business sphere.
                    </p>
                    <p>
                      We at Cloudin develop innovative, stand-out yet
                      user-friendly apps to drive real outcomes and results in
                      business performance. From strategy, conceptualization to
                      custom mobile app development, Cloudin provides a
                      comprehensive suite of mobile software development
                      services to meet your project requirements.
                    </p>
                  </div>
                </div>
                {/* <div className="singel_about_left_inner pl-4">
                  <div className="button two">
                    <a href="#">More Details</a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="call_do_action bg_color2 pt-20 blockcahin_threeBlockAlign blockChain_gloBg">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="section_title text_left mb-40 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6> Cloudin offers </h6>
                </div>
                <div className="section_main_title">
                  <h1>Full-cycle mobility solutions</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="acction_thumb">
                <img src="assets/images/shape2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature_area pb-2">
        <div className="feature_area pb-2">
          <div className="container">
            <div className="row nagative_margin4">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="mobiApp_Box_minHeight service_style_eight bgDrkGrey">
                  <div className="service_style_eight_icon">
                    <div className="icon">
                      <i className="flaticon-data"></i>
                    </div>
                  </div>
                  <div className="service_style_eight_content white pt-4">
                    <h5> Custom Mobile App Development</h5>
                    <p>
                      Creating feature-packed customized mobile application with
                      out-of-box custom software development approach
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="mobiApp_Box_minHeight service_style_eight bgDrkGrey">
                  <div className="service_style_eight_icon">
                    <div className="icon">
                      <i className="flaticon-data"></i>
                    </div>
                  </div>
                  <div className="service_style_eight_content white pt-4">
                    <h5> Technology Consultation</h5>
                    <p>
                      Implement the most appropriate technology stack and
                      well-thought-out system architecture for your mobile app.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="mobiApp_Box_minHeight service_style_eight bgDrkGrey">
                  <div className="service_style_eight_icon">
                    <div className="icon">
                      <i className="flaticon-data"></i>
                    </div>
                  </div>
                  <div className="service_style_eight_content white pt-4">
                    <h5> Digital Transformation</h5>
                    <p>
                      Transform digitally with advanced technologies such as AI,
                      cloud computing, the IoT, and more
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="mobiApp_Box_minHeight service_style_eight bgDrkGrey">
                  <div className="service_style_eight_icon">
                    <div className="icon">
                      <i className="flaticon-data"></i>
                    </div>
                  </div>
                  <div className="service_style_eight_content white pt-4">
                    <h5> App integration</h5>
                    <p>
                      Provides the latest technology integration, payment
                      gateway integration, and API integration in your existing
                      mobile app
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="mobiApp_Box_minHeight service_style_eight bgDrkGrey">
                  <div className="service_style_eight_icon">
                    <div className="icon">
                      <i className="flaticon-data"></i>
                    </div>
                  </div>
                  <div className="service_style_eight_content white pt-4">
                    <h5> Upgradation & Migration</h5>
                    <p>
                      Provides holistic approach to upgrade your existing mobile
                      app to the latest technology or migrate your app to a
                      different operating system or platform
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="mobiApp_Box_minHeight service_style_eight bgDrkGrey">
                  <div className="service_style_eight_icon">
                    <div className="icon">
                      <i className="flaticon-data"></i>
                    </div>
                  </div>
                  <div className="service_style_eight_content white pt-4">
                    <h5> QA & Testing Services</h5>
                    <p>
                      Puts quality analysts in the loop so that you can make
                      sure your mobile app runs seamlessly across all devices
                      and OS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_area pt-80 pb-70">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-6 col-md-5 col-sm-12 col-xs-6 vertical_top_mobilApp">
              <div className="section_title text_left mb-40">
                <div
                  className="section_sub_title uppercase mb-3 wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <h6> Our Latest Mobile Application Technologies</h6>
                </div>

                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="about_icon_box wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> iOS/iPhone APP
                        Development
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Xamarin App
                        Development
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Android App
                        Development
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> React Native
                        App Development
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Iconic App
                        Development
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Flutter Native
                        App Development
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-7 col-sm-12 col-xs-6 ">
              <div className="section_title text_left mb-40">
                <div
                  className="section_sub_title uppercase mb-3 wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <h6>
                    We are industry leaders in custom mobile application with
                    extensible benefits
                  </h6>
                </div>

                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="about_icon_box wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Improved
                        customer engagement
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Predictive
                        analysis driven by data analytics
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Reduced cost of
                        customer acquisition
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Earn trust,
                        brand loyalty and recognition
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Expand your
                        business across the world
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Generate more
                        insight, speed, value and quality
                      </span>
                    </div>

                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Increase
                        agility and performance of existing business
                        applications
                      </span>
                    </div>

                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Improve
                        enterprise’s competitive advantage
                      </span>
                    </div>
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
export default MobileApp;
