import React, { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const UxUi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div className="breatcome_uxui d-flex align-items-center">
        <div className="container breadcrumb_align_lft">
          <div className="row">
            <div className="col-lg-12">
              <div className=" ">
                <div className="breatcome_title_inner pb-2">
                  <h2>UI & UX</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <NavLink activeClassName="active" to="/home">Home</NavLink> <i className="fa fa-angle-right"></i>{' '}
                      <NavLink activeClassName="active" to="/ai">Services</NavLink>{' '}
                      <i className="fa fa-angle-right"></i> <span>UI & UX</span>
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
                <img src="assets/images/uxui_side.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
              <div className="section_title text_left mb-40 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6>Captivate your </h6>
                </div>
                <div className="section_main_title">
                  <h1>
                    Users with our elegant UI/UX designs
                    <br />
                    <span> our graceful UI/UX </span>
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
                      In the current era of Web & Mobile, design goes beyond
                      creating visual elements. There are several frameworks
                      having a different set of pre-defined controls and we need
                      to incorporate those controls into the design and at the
                      same time need to keep it consistent, purposeful and
                      efficient.
                    </p>
                    <p>
                      At Cloudin, we take into accountability each and every
                      minutest aspect of this design variant to provide
                      compelling and intuitive user experience. We offer mobile
                      UX design, UX design for SAAS, Product UX design for
                      startups and more, while ensuring that the end user enjoys
                      a great value-added experience.
                    </p>
                    <p>
                      Our approach to transforming user experiences build better
                      products and applications, strengthen engagement with
                      customers, increase user adoption, boost productivity and
                      increase revenue footprint with customers.
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
                  <h6> Engage and enhance the customer </h6>
                </div>
                <div className="section_main_title">
                  <h1>experience with Cloudin UI/UX services</h1>
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
                <div className="uxui_Box_minHeight service_style_eight bgDrkGrey">
                  <div className="service_style_eight_icon">
                    <div className="icon">
                      <img src="/assets/images/cloudinIcons/uxui/interactionDesign.svg" />
                    </div>
                  </div>
                  <div className="service_style_eight_content white pt-4">
                    <h5> Interaction Designs</h5>
                    <p>
                      Offer beautiful interaction processes that are driven by
                      the most modern technologies to offer a great interactive
                      experience for your users
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="uxui_Box_minHeight service_style_eight bgDrkGrey">
                  <div className="service_style_eight_icon">
                    <div className="icon">
                      <img src="/assets/images/cloudinIcons/uxui/informationArch.svg" />
                    </div>
                  </div>
                  <div className="service_style_eight_content white pt-4">
                    <h5> Information Architecture </h5>
                    <p>
                      Collaborating new technologies, design methods and
                      business processes to formulate digital products that mark
                      a new beginning
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="uxui_Box_minHeight service_style_eight bgDrkGrey">
                  <div className="service_style_eight_icon">
                    <div className="icon">
                      <img src="/assets/images/cloudinIcons/uxui/mobileUX.svg" />
                    </div>
                  </div>
                  <div className="service_style_eight_content white pt-4">
                    <h5> Mobile UX</h5>
                    <p>
                      Define and design mobile UX strategies that create
                      excellent B2B and B2C functional enterprise mobile apps
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="uxui_Box_minHeight service_style_eight bgDrkGrey">
                  <div className="service_style_eight_icon">
                    <div className="icon">
                      <img src="/assets/images/cloudinIcons/uxui/uxtesting.svg" />
                    </div>
                  </div>
                  <div className="service_style_eight_content white pt-4">
                    <h5> UI/UX Testing</h5>
                    <p>
                      Starting from conceptualizing, analysing, researching,
                      prototyping, designing to the final stage of UX testing
                      all under one roof
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="uxui_Box_minHeight service_style_eight bgDrkGrey">
                  <div className="service_style_eight_icon">
                    <div className="icon">
                      <img src="/assets/images/cloudinIcons/uxui/uxResearch.svg" />
                    </div>
                  </div>
                  <div className="service_style_eight_content white pt-4">
                    <h5> Research</h5>
                    <p>
                      Team of research analysts brainstorm and integrate their
                      ideas from the UX research that they have done
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="uxui_Box_minHeight service_style_eight bgDrkGrey">
                  <div className="service_style_eight_icon">
                    <div className="icon">
                      <img src="/assets/images/cloudinIcons/uxui/wireframe.svg" />
                    </div>
                  </div>
                  <div className="service_style_eight_content white pt-4">
                    <h5> Wireframes</h5>
                    <p>
                      Finalization of your design happens only when you have
                      gone through the design wireframes, which is the skeleton
                      of your real-working model
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
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div
                className="single_about_thumb wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <div className="single_about_thumb_inner">
                  <img src="assets/images/new/ab3.png" alt="" />
                </div>
                <div className="shape_thumb">
                  <div className="about_shape_thumb_affiliate1 bounce-animate">
                    <img src="assets/images/shape/3.png" alt="" />
                  </div>
                  <div className="about_shape_thumb_affiliate2 rotateme">
                    <img src="assets/images/shape/rt2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12 col-xs-6">
              <div className="section_title text_left mb-40">
                <div
                  className="section_sub_title uppercase mb-3 wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <h6> Our visually and emotionally </h6>
                </div>
                <div
                  className="section_main_title wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <h1>appealing designs with amazing benefits</h1>
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
                        <i className="fa fa-check-square-o"></i>
                        Touch-friendly navigation options for enhanced user
                        experience
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Ensure a
                        simplified design layouts to provide a pleasant mobile
                        experience
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Engage with
                        users, to ensure they do not abandon the sit
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Using
                        Consistency and Common UI elements
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Compatibility
                        with all mobile web browsers: iPhone, Android, iPad
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Easily
                        accessible and recognizable graphics
                      </span>
                    </div>

                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Fluid Design
                        which fits with any screen resolution
                      </span>
                    </div>

                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Image
                        optimization for quick web pages loading
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
export default UxUi;
