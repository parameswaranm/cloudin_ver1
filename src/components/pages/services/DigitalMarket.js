import React, { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const DigitalMarket = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div className="breatcome_virtualassist d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome_title">
                <div className="breatcome_title_inner pb-2">
                  <h2>Digital Marketing</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <NavLink activeClassName="active" to="/home">Home</NavLink> <i className="fa fa-angle-right"></i>{' '}
                      <NavLink activeClassName="active" to="/ai">Services</NavLink>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <span> Digital Marketing</span>
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
                <img src="assets/images/dm_side.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
              <div className="section_title text_left mb-40 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6>
                    No matter what you're looking for, we can create a custom
                    solution for your business.
                  </h6>
                </div>
                <div className="section_main_title">
                  <h1>
                    The Right Choice for
                    <span> Digital Marketing Services</span>
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
                      <b>Are you looking to</b>
                      <br />
                      Boost your brand’s presence on digital platforms? Cloudin
                      digital is one of the best online marketing service
                      providers in all location, with an array of digital
                      marketing services to suit all your requirements. To get
                      your company in the top ranks, you need to opt for the
                      best digital marketing service provider. We understand
                      your needs, and create a custom plan and strategy just for
                      you. With our digital marketing packages, you won’t have
                      to worry anymore, and we promise to deliver only the best!
                    </p>
                    <p>
                      <b>Cloudin Digital Marketing Services</b>
                      <br />
                      We are an experienced digital marketing company in
                      Coimbatore comprised of a team of highly trained
                      professionals. We are constantly updating our skill set
                      and R&D practices, to ensure that each of our clients
                      benefit from efficient digital marketing services all year
                      round.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="process_area bg_color2 pt-90 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section_title text-center mb-50 wow fadeInDown"
                data-wow-delay="0.3s"
              >
                <div className="section_sub_title uppercase mb-3">
                  <h6>Our Working Process</h6>
                </div>
                <div className="section_main_title">
                  <h1>
                    Our advanced and easily-integrable capabilities addresses
                    various business needs
                  </h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-md-6 col-sm-12 dmkg_box_minheight">
              <div
                className="dmkg_box_minheight process_style_two text-center mb-30 wow fadeInUp blue_border p-3"
                data-wow-delay="0.3s"
              >
                <div className="process_style_two_thumb">
                  <img src="assets/images/new/seo.svg" alt="" />
                </div>
                <div className="process_style_two_content">
                  <div className="process_style_two_content_title pt-3 pb-2">
                    <h5>SEO</h5>
                  </div>
                  <div className="process_style_two_content_text">
                    <p>
                      Attract the traffic that matters with our SEO services,
                      which include local, ecommerce, and national SEO.
                    </p>
                  </div>
                  {/* <div className="process_style_two_content_button">
                    <a href="#">Read More</a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="dmkg_box_minheight process_style_two text-center mb-30 wow fadeInUp blue_border p-3"
                data-wow-delay="0.3s"
              >
                <div className="process_style_two_thumb">
                  <img
                    src="assets/images/new/socialMediaMarketing.svg"
                    alt=""
                  />
                </div>
                <div className="process_style_two_content">
                  <div className="process_style_two_content_title pt-3 pb-2">
                    <h5>Social Media Marketing</h5>
                  </div>
                  <div className="process_style_two_content_text">
                    <p>
                      We engage in strategized and well-planned social media
                      marketing to give your brand the advantage of increased
                      traffic online. This includes Brand Management, Social
                      Tone and Nature, and focusing on Social PPC and Monitoring
                      as well.
                    </p>
                  </div>
                  {/* <div className="process_style_two_content_button">
                    <a href="#">Read More</a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="dmkg_box_minheight process_style_two text-center mb-30 wow fadeInUp blue_border p-3"
                data-wow-delay="0.3s"
              >
                <div className="process_style_two_thumb">
                  <img src="assets/images/new/smo.svg" alt="" />
                </div>
                <div className="process_style_two_content">
                  <div className="process_style_two_content_title pt-3 pb-2">
                    <h5>Social Media Optimization </h5>
                  </div>
                  <div className="process_style_two_content_text">
                    <p>
                      Through social media optimization tools and platforms, we
                      ensure that all of your marketing efforts are channelized
                      in the right direction. This involves Social Profile
                      Management, Social Content Strategy, and increasing
                      organic engagement.
                    </p>
                  </div>
                  {/* <div className="process_style_two_content_button">
                    <a href="#">Read More</a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-25 justify-content-md-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="dmkg_box_minheight process_style_two text-center mb-30 wow fadeInUp blue_border p-3"
                data-wow-delay="0.3s"
              >
                <div className="process_style_two_thumb">
                  <img src="assets/images/new/eml.svg" alt="" />
                </div>
                <div className="process_style_two_content">
                  <div className="process_style_two_content_title pt-3 pb-2">
                    <h5> Email Marketing</h5>
                  </div>
                  <div className="process_style_two_content_text">
                    <p>
                      Nurture valuable leads into customers, and turn one-time
                      shoppers into repeat customers with email.
                    </p>
                  </div>
                  {/* <div className="process_style_two_content_button">
                    <a href="#">Read More</a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="dmkg_box_minheight process_style_two text-center mb-30 wow fadeInUp blue_border p-3"
                data-wow-delay="0.3s"
              >
                <div className="process_style_two_thumb">
                  <img src="assets/images/new/cnt.svg" alt="" />
                </div>
                <div className="process_style_two_content">
                  <div className="process_style_two_content_title pt-3 pb-2">
                    <h5>Content Marketing</h5>
                  </div>
                  <div className="process_style_two_content_text">
                    <p>
                      The right content marketing strategy can do wonders for
                      your brand, and we’re here to ensure that! We take care of
                      Content Strategy, Content Writing, Outreach Campaigns, and
                      effective Social Promotion.
                    </p>
                  </div>
                  {/* <div className="process_style_two_content_button">
                    <a href="#">Read More</a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="dmkg_box_minheight process_style_two text-center mb-30 wow fadeInUp blue_border p-3"
                data-wow-delay="0.3s"
              >
                <div className="process_style_two_thumb">
                  <img src="assets/images/new/ppc.svg" alt="" />
                </div>
                <div className="process_style_two_content">
                  <div className="process_style_two_content_title pt-3 pb-2">
                    <h5> Pay Per Click Management</h5>
                  </div>
                  <div className="process_style_two_content_text">
                    <p>
                      Pay per click is an effective way of promotion and
                      visibility on the internet. We offer expert PPC
                      Management, PPC Strategy Implementation, ad copywriting,
                      and also complete Campaign Optimization.
                    </p>
                  </div>
                  {/* <div className="process_style_two_content_button">
                    <a href="#">Read More</a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_area pt-80 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
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
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
              <div className="section_title text_left mb-40">
                <div
                  className="section_sub_title uppercase mb-3 wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <h6>
                    Why We Differ from Other Digital Marketing Service Providers{' '}
                  </h6>
                </div>
                <div
                  className="section_main_title wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <h1> Way Includes...</h1>
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
                        <b>Agile Methodologies</b>
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i>{' '}
                        <b>Efficient Campaign Management</b>
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i>{' '}
                        <b>Reach Precise Target Audience </b>
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i>{' '}
                        <b>Guaranteed ROI</b>
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i>
                        <b> Performance Tracking</b>
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i>{' '}
                        <b>Affordable Packages</b>
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
export default DigitalMarket;
