import React, { Fragment, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';

const Investor = () => {
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
                  <h2>Investor</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="#">Home</a>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <a href="#"> Pages</a>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <span>Investor</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-80">
        <div className="col-lg-12 col-md-6 col-sm-12">
          <div className="service_style_one text_center  pl-3 pr-3 mb-4">
            <div className="service_style_one_icon mb-30">
              <i className="fa fa-apple"></i>
            </div>
            <div className="service_style_one_title mb-30">
              <h4>NVR Capital & Ventures</h4>
            </div>
            <div className="service_style_one_text">
              <p>
                Venture capital is to finance startup companies and small
                businesses that beliefs to have long-term growth potential by
                the Investors .NVR financing for the early stages and expansion
                activities for a new or growing business .
              </p>
              <p>
                Private investors are a relatively new race in India .Seed
                capital investors looking for start-ups to become successful
                business and new projects, private investors in India expect to
                invest in entrepreneurial projects and business startups across
                the country.
              </p>
              <p>
                Our investors come from a wide variety of backgrounds, but one
                common theme is their track record of working with successful
                mission-driven companies .NVR is one of them .NVR traditional
                business is into the Financial sector and current 3rd Generation
                promoters are keen towards startup Seed Capital funding .They've
                given us the resources to optimize for the long term and we're
                thrilled to have them with us on this journey .
              </p>
            </div>
            {/* <div className="service_style_one_button pt-3">
              <a href="#">
                Read More <i className="fa fa-long-arrow-right"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="feature_area bg_color2 pt-80 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-55">
                <div className="section_main_title">
                  <h1>
                    Current Investment Portfolio <span>04</span>
                  </h1>
                  <h6>
                    Separated they live in .A small river named Duden flows by
                    their place and supplies it with the necessary regelia .It
                    is a paradisematic country
                  </h6>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="feature_style_four mb-30">
                <div className="feature_style_four_icon mb-20">
                  <div className="icon">
                    <i className="flaticon-global"></i>
                  </div>
                </div>
                <div className="feature_style_four_title">
                  <h4>Software and AI</h4>
                </div>
                <div className="feature_style_four_text pt-15">
                  <p>
                    NVR works to provide policymakers with evidence, analysis,
                    and guidance to guide the development and adoption of this
                    technology to build trust in AI, empower people, and drive
                    growth and innovation .
                  </p>
                </div>
                {/* <div className="feature_style_four_button">
                  <a href="#">
                    Read More<i className="fa fa-long-arrow-right"></i>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="feature_style_four mb-30">
                <div className="feature_style_four_icon mb-20">
                  <div className="icon">
                    <i className="flaticon-code"></i>
                  </div>
                </div>
                <div className="feature_style_four_title">
                  <h4>Security systems</h4>
                </div>
                <div className="feature_style_four_text pt-15">
                  <p>
                    As long as security is a top priority for investors,
                    investors will continue to provide security startups and
                    endless money to companies .
                  </p>
                </div>
                {/* <div className="feature_style_four_button">
                  <a href="#">
                    Read More<i className="fa fa-long-arrow-right"></i>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="feature_style_four active mb-30">
                <div className="feature_style_four_icon mb-20">
                  <div className="icon">
                    <i className="flaticon-data"></i>
                  </div>
                </div>
                <div className="feature_style_four_title">
                  <h4>Healthcare</h4>
                </div>
                <div className="feature_style_four_text pt-15">
                  <p>
                    The opportunity to invest in professionally validated, risky
                    opportunities has long been limited to venture capitalists
                    and private equity funds - particularly in the healthcare
                    industry .
                  </p>
                </div>
                {/* <div className="feature_style_four_button">
                  <a href="#">
                    Read More<i className="fa fa-long-arrow-right"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="feature_style_four active mb-30">
                <div className="feature_style_four_icon mb-20">
                  <div className="icon">
                    <i className="flaticon-data"></i>
                  </div>
                </div>
                <div className="feature_style_four_title">
                  <h4>Hospitality</h4>
                </div>
                <div className="feature_style_four_text pt-15">
                  <p>
                    Hospitality is the relationship between a guest and a host,
                    wherein the host receives the guest and goodwill, including
                    the reception and entertainment of guests, visitors, or
                    strangers .
                  </p>
                </div>
                {/* <div className="feature_style_four_button">
                  <a href="#">
                    Read More<i className="fa fa-long-arrow-right"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand_area pt-35 pb-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-50 mt-3">
                <div className="section_main_title">
                  <h1>
                    Brand Style <span>02</span>
                  </h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <OwlCarousel items={4} margin={8} autoplay={true} nav={true}>
              <div className="slider_area d-flex align-items-center" id="home">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="single_brand mb-30">
                        <div className="single_brand_thumb">
                          <img src="assets/images/brand/1.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- --> */}

              <div className="slider_area d-flex align-items-center" id="home">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="single_brand mb-30">
                        <div className="single_brand_thumb">
                          <img src="assets/images/brand/2.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="slider_area d-flex align-items-center" id="home">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="single_brand mb-30">
                        <div className="single_brand_thumb">
                          <img src="assets/images/brand/3.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="slider_area d-flex align-items-center" id="home">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="single_brand mb-30">
                        <div className="single_brand_thumb">
                          <img src="assets/images/brand/4.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="slider_area d-flex align-items-center" id="home">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="single_brand mb-30">
                        <div className="single_brand_thumb">
                          <img src="assets/images/brand/5.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider_area d-flex align-items-center" id="home">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="single_brand mb-30">
                        <div className="single_brand_thumb">
                          <img src="assets/images/brand/1.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Investor;
