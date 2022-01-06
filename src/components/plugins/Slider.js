import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { NavLink } from 'react-router-dom';

const Slider = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <OwlCarousel
        items={1}
        margin={8}
        autoplay={true}
        nav={true}
        navText={[
          "<i class='fa fa-long-arrow-left'></i>",
          "<i class='fa fa-long-arrow-right'></i>",
        ]}
      >
        <div
          className="slider_area d-flex align-items-center slider1"
          id="home"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="single_slider">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
                      <div className="slider_content">
                        <div className="slider_text">
                          <div className="slider_text_inner">
                            <h1 className="banner_text_bg1">
                              <span> Total IT Solution Here </span>
                              <br />
                              Experience the simplest yet the most powerful and
                              seamless techno-digital Solution
                            </h1>
                          </div>

                          <div className="slider_button pt-5 d-flex">
                            <div className="button">
                              <NavLink to="/aboutus">
                                How IT Work{' '}
                                <i className="fa fa-long-arrow-right"></i>
                              </NavLink>
                              <NavLink
                                activeClassName="active"
                                to="/ai"
                                className="ml-4"
                              >
                                IT Services{' '}
                                <i className="fa fa-long-arrow-right"></i>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
                      <img
                        src="../assets/images/slider/banner1_icon.png"
                        className="mainbannerAlignImg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- --> */}

        <div
          className="slider_area d-flex align-items-center slider2"
          id="home"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="single_slider">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
                      <div className="slider_content">
                        <div className="slider_text">
                          <div className="slider_text_inner">
                            <h1 className="banner_text_bg1 color_pink">
                              <span> Total IT Solution Here </span>
                              <br />
                              Bridging the gap between business and technology
                              with Cloudin IT Solutions
                            </h1>
                          </div>
                          <div className="slider_button pt-5 d-flex">
                            <div className="button">
                              <NavLink to="/aboutus">
                                How IT Work{' '}
                                <i className="fa fa-long-arrow-right"></i>
                              </NavLink>
                              <NavLink
                                activeClassName="active"
                                to="/ai"
                                className="ml-4"
                              >
                                IT Services{' '}
                                <i className="fa fa-long-arrow-right"></i>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
                      <img
                        src="../assets/images/slider/banner2_icon.png"
                        className="mainbannerAlignImg2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- --> */}

        <div className="slider_area d-flex slider3" id="home">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="single_slider">
                  <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-12 col-xs-6">
                      <div className="slider_content mainbannerAlign">
                        <div className="slider_text">
                          <div className="slider_text_inner">
                            <h1 className="banner_text_bg1 color_strip_Green">
                              <span> Total IT Solution Here </span>
                              <br />
                              Mapping the innovations that adds lasting value in
                              every direction{' '}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
                      &nbsp;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>

      <div className="flipbox_area top_feature">
        <div className="container">
          <div className="row nagative_margin">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font border_grey1 flipcus_height">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon ">
                      <div className="icon bgYellow">
                        {/* <i className="flaticon-global-1"></i> */}
                        <i className="understandingIcon"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>UNDERSTANDING</h3>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back bgYellow flipcus_height">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>UNDERSTANDING</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>Effective client requirement & analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font border_grey1 flipcus_height">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon ">
                      <div className="icon bgDrkblue">
                        <i className="implemetationIcon"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>IMPLEMENTATION</h3>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back bgDrkblue flipcus_height">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>IMPLEMENTATION</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>Ensuring on-budget, on-time delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font border_grey1 flipcus_height">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgDrkPink">
                        <i className="innovationIcon"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>INNOVATION</h3>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back bgDrkPink flipcus_height">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>INNOVATION</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>Accelerating innovation with emerging technologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font border_grey1 flipcus_height">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon ">
                      <div className="icon bgDrkGrey">
                        <i className="exposureIcon"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>EXPOSURE</h3>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back bgDrkGrey flipcus_height">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>EXPOSURE</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>Work experience with global partners & clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_area pt-70 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
              <div className="single_about_thumb mb-3">
                <div className="single_about_thumb_inner">
                  <img src="assets/images/home_side.svg" alt="" />
                </div>
              </div>
              {/* <div className="single_about_shape">
                <div className="single_about_shape_thumb bounce-animate">
                  <img src="assets/images/about-circle.png" alt="" />
                </div>
              </div> */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
              <div className="section_title text_left mb-40 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6>6+ YEARS OF EXPERIENCE</h6>
                </div>
                <div className="section_main_title">
                  <h1>Preparing For Your Success</h1>
                  <h3>
                    Provide Best <span>IT Solutions.</span>
                  </h3>
                  <h5>Professional, Inexpensive & Effective Solutions</h5>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <div className="section_content_text pt-4">
                  <p>Empowering Businesses to Achieve Digital Transformation</p>
                  <p>
                    We are a full-cycle techno-digital agency focusing on latest
                    technologies and helping businesses to achieve their
                    industry specific solutions delivered reliably on time.
                    Incepted in 2015, at Coimbatore, we are advancing every year
                    by keeping up with the growing technologies and trends such
                    as Artificial Intelligence, Deep Learning &Machine Learning
                    algorithm along with Engineering IoT solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flipbox_area pt-85 pb-70 service_bg1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center white mb-55">
                <div className="section_sub_title uppercase mb-3">
                  <h6>SERVICES</h6>
                </div>
                <div className="section_main_title">
                  <h1>Provide Exclusive Services</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font flipcusBorder">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgYellow">
                        <i className="aiServices"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>Artificial Intelligence</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Empower change, drive innovation and create exciting new
                        possibilities through smart & Agile AI
                      </p>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back service_bg2">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>Artificial Intelligence</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Empower change, drive innovation and create exciting new
                        possibilities through smart & Agile AI
                      </p>
                    </div>
                    <div className="flipbox_button">
                      <NavLink activeClassName="active" to="/ai">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font flipcusBorder">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgDrkblue">
                        <i className="mlServices"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>ML & NLP</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Combining machine learning & natural language processing
                        boost accuracy and understand of human utterances
                      </p>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back service_bg2">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>ML & NLP</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Combining machine learning & natural language processing
                        boost accuracy and understand of human utterances
                      </p>
                    </div>
                    <div className="flipbox_button">
                      <NavLink activeClassName="active" to="/mLnNLP">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font flipcusBorder">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgDrkPink">
                        <i className="blockchainServices"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>Blockchain Technology </h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Improve traceability, transparency and tradability that
                        brings trust and accountability to businesses
                      </p>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back service_bg2">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>Blockchain Technology</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Improve traceability, transparency and tradability that
                        brings trust and accountability to businesses
                      </p>
                    </div>
                    <div className="flipbox_button">
                      <NavLink activeClassName="active" to="/blockchain">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font flipcusBorder">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgBusiGreen">
                        <i className="chatbotServices"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>Chatbot</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Seamlessly build & deploy fully automated, omnichannel
                        and multilingual chatbots
                      </p>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back service_bg2">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>Chatbot</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Seamlessly build & deploy fully automated, omnichannel
                        and multilingual chatbots
                      </p>
                    </div>
                    <div className="flipbox_button">
                      <NavLink activeClassName="active" to="/chatBot">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font flipcusBorder">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgDrkGrey">
                        <i className="cloudServices2"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>Cloud services</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Improves public cloud adoption for analytics, virtual
                        computing, storage, networking and much more
                      </p>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back service_bg4">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>Cloud services</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Improves public cloud adoption for analytics, virtual
                        computing, storage, networking and much more
                      </p>
                    </div>
                    <div className="flipbox_button">
                      <NavLink activeClassName="active" to="/aWSnAzure">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font flipcusBorder">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgOrange">
                        <i className="reactServices"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>React Native Development</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Providing high quality andfast growing cross platform
                        development framework using native UI elements
                      </p>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back service_bg3">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>React Native Development</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Providing high quality andfast growing cross platform
                        development framework using native UI elements
                      </p>
                    </div>
                    <div className="flipbox_button">
                      <NavLink activeClassName="active" to="/react">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font flipcusBorder">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgSharPink">
                        <i className="itServices"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>IT Consulting Services</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Helping clients with smarter technology decisions,
                        increases ROI and continuously improve efficiency
                      </p>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back service_bg2">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>IT Consulting Services</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Helping clients with smarter technology decisions,
                        increases ROI and continuously improve efficiency
                      </p>
                    </div>
                    <div className="flipbox_button">
                      <NavLink activeClassName="active" to="/iTConsulting">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font flipcusBorder">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgRed">
                        <i className="mobileAppServices"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>Mobile App Development</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Crafting top-notch mobile experiences that offers high
                        scalability and get ahead of competition
                      </p>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back service_bg4">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>Mobile App Development</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Crafting top-notch mobile experiences that offers high
                        scalability and get ahead of competition
                      </p>
                    </div>
                    <div className="flipbox_button">
                      <NavLink activeClassName="active" to="/mobileApp">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font flipcusBorder">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgDrkblue">
                        <i className="webAppServices"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>Web Application</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Providing proper identity over the web with more
                        compatible across platforms with easy customization
                      </p>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back service_bg3">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>Web Application</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Providing proper identity over the web with more
                        compatible across platforms with easy customization
                      </p>
                    </div>
                    <div className="flipbox_button">
                      <NavLink activeClassName="active" to="/webApp">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font flipcusBorder">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgDrkGrey">
                        <i className="uxuiServices"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>UI / UX Design</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Rendering exceptional user experience with intuitive
                        designs and more insights from user engagement
                      </p>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back service_bg3">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>UI / UX Design </h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Rendering exceptional user experience with intuitive
                        designs and more insights from user engagement
                      </p>
                    </div>
                    <div className="flipbox_button">
                      <NavLink activeClassName="active" to="/uiux">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font flipcusBorder">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgOrange">
                        <i className="virtualServices"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>Virtual Assistant</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Our CloudinAssistants have the top administrative skills
                        and know all the best tools to get things done quickly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back service_bg3">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>Virtual Assistant</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Our CloudinAssistants have the top administrative skills
                        and know all the best tools to get things done quickly.
                      </p>
                    </div>
                    <div className="flipbox_button">
                      <NavLink activeClassName="active" to="/virtualAssist">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font flipcusBorder">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon dark_purple">
                        <i className="digitalMarketing"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>Digital Marketing</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        No matter what you're looking for, we can create a
                        custom solution for your business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back service_bg3">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>Digital Marketing</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        No matter what you're looking for, we can create a
                        custom solution for your business.
                      </p>
                    </div>
                    <div className="flipbox_button">
                      <NavLink activeClassName="active" to="/digitalMarket">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service_area bg_color2 pt-85 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-55">
                <div className="section_sub_title uppercase mb-3">
                  <h6>GOOD REASONS</h6>
                </div>
                <div className="section_main_title">
                  <h1>Our Products</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="service_style_two mb-4">
                <div className="service_style_two_number mr-60">
                  <h5>01</h5>
                </div>
                <div className="service_style_two_content">
                  <div className="service_style_two_title pb-3">
                    <h4>
                      <NavLink activeClassName="active" to="/inventory">
                        Inventory
                      </NavLink>
                    </h4>
                  </div>
                  <div className="service_style_two_text">
                    <p>
                      Automates your business by tracking two main functions of
                      your warehouse / stockroom i.e. receiving(incoming) and
                      shipping(outgoing)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="service_style_two mb-4">
                <div className="service_style_two_number mr-60">
                  <h5>02</h5>
                </div>
                <div className="service_style_two_content">
                  <div className="service_style_two_title pb-3">
                    <h4>
                      <NavLink activeClassName="active" to="/mrBusiness">
                        Mr.Business
                      </NavLink>
                    </h4>
                  </div>
                  <div className="service_style_two_text">
                    <p>
                      Streamline your business with tracking sales, marketing
                      employees, orders along with integrated payment gateway
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="service_style_two mb-4">
                <div className="service_style_two_number mr-60">
                  <h5>03</h5>
                </div>
                <div className="service_style_two_content">
                  <div className="service_style_two_title pb-3">
                    <h4>
                      <NavLink activeClassName="active" to="/finjo">
                        Finjo
                      </NavLink>
                    </h4>
                  </div>
                  <div className="service_style_two_text">
                    <p>
                      Accomplish the objectives of your business with efficient
                      and effective of management of money(funds) for
                      distribution & collection of payment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="service_style_two mb-4">
                <div className="service_style_two_number mr-60">
                  <h5>04</h5>
                </div>
                <div className="service_style_two_content">
                  <div className="service_style_two_title pb-3">
                    <h4>
                      <NavLink activeClassName="active" to="/eCamp">
                        E-Camp
                      </NavLink>
                    </h4>
                  </div>
                  <div className="service_style_two_text">
                    <p>
                      Manages operations of administration of whole school or
                      university through E-governance management software of
                      E-Camp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="video_area pt-100 pb-200 slider_bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section_title text_center white mb-55">
                  <div className="section_main_title">
                    <h1>We Create Real Impact For Those</h1>
                    <h1>Who Partner With Us.</h1>
                  </div>
                  <div className="em_bar">
                    <div className="em_bar_bg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video_area">
          <div className="container">
            <div className="row mrt-200">
              <div className="col-lg-12">
                <div className="single_video">
                  <div className="single_video_thumb">
                    <img
                      src="assets/images/slider/video.png"
                      width="100%"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="review" className="testimonial-bg pt-100 pb-70">
          <div
            id="container-general"
            className="ready anim-section-features anim-section-desc anim-section-quote"
          >
            <section id="section-quote">
              <div className="col-lg-12">
                <div className="section_title text_center mt-3">
                  <div className="section_sub_title uppercase mb-3">
                    <h6>TESTIMONIAL</h6>
                  </div>
                  <div className="section_main_title">
                    <h1>
                      Our Happy <span>Clients Says</span>
                    </h1>
                  </div>
                  <div className="em_bar">
                    <div className="em_bar_bg"></div>
                  </div>
                </div>
              </div>

              <div className="container-pe-quote left">
                <div
                  className="pp-quote li-quote-1"
                  data-textquote="quote-text-1"
                >
                  <div className="img animated bounce"></div>
                </div>
                <div
                  className="pp-quote li-quote-2"
                  data-textquote="quote-text-2"
                >
                  <div className="img animated bounce"></div>
                </div>
                <div
                  className="pp-quote li-quote-3"
                  data-textquote="quote-text-3"
                >
                  <div className="img animated bounce"></div>
                </div>
                <div
                  className="pp-quote li-quote-4 active"
                  data-textquote="quote-text-4"
                >
                  <div className="img animated bounce"></div>
                </div>
                <div
                  className="pp-quote li-quote-5"
                  data-textquote="quote-text-5"
                >
                  <div className="img animated bounce"></div>
                </div>
                <div
                  className="pp-quote li-quote-6"
                  data-textquote="quote-text-6"
                >
                  <div className="img animated bounce"></div>
                </div>
              </div>

              <div className="container-quote carousel-on">
                <div
                  className="quote quote-text-3 hide-bottom"
                  data-ppquote="li-quote-3"
                >
                  <p>
                    'Really we are impressed with Cloudin work because it
                    simplify our work where we had a lot of confusion to
                    remember sanskrit name and ayurvedic name of ingredient.'
                  </p>
                  <div className="container-info">
                    <div className="pp"></div>
                    <div className="name">Managing Director</div>
                    <div className="job">AVP Ayurveda</div>
                  </div>
                </div>

                <div
                  className="quote quote-text-4 show"
                  data-ppquote="li-quote-4"
                >
                  <p>
                    ' Thank you Cloudin, we happy to use your Finaz product, it
                    is so simple to use and once again we thank you that we are
                    changing our business from paperwork to digit work.'
                  </p>
                  <div className="container-info">
                    <div className="pp"></div>
                    <div className="name">Karthi</div>
                    <div className="job">Product Finaz</div>
                  </div>
                </div>

                <div
                  className="quote hide-bottom quote-text-5"
                  data-ppquote="li-quote-5"
                >
                  <p>
                    'This app very useful to us for the Tracking market and
                    salesperson current location also it helps us to get the
                    requirement from our client. Thank you cloudin.'
                  </p>
                  <div className="container-info">
                    <div className="pp"></div>
                    <div className="name">MD</div>
                    <div className="job">Users of marketer</div>
                  </div>
                </div>

                <div
                  className="quote hide-bottom quote-text-6"
                  data-ppquote="li-quote-6"
                >
                  <p>
                    'Cloudin is a small island of intelligent enquiry floating
                    in a vast stagnant pool of ignorance and assumption.'
                  </p>
                  <div className="container-info">
                    <div className="pp"></div>
                    <div className="name">CEO</div>
                    <div className="job">DADO</div>
                  </div>
                </div>

                <div
                  className="quote hide-bottom quote-text-7"
                  data-ppquote="li-quote-7"
                >
                  <p>
                    'This software very useful to us, it simplifies our invoice
                    process, we handle inbound and outbound without confusion.
                    Thank you cloudin.'
                  </p>
                  <div className="container-info">
                    <div className="pp"></div>
                    <div className="name">Siva</div>
                    <div className="job">CEO at WRAPUP</div>
                  </div>
                </div>

                <div
                  className="quote hide-bottom quote-text-8"
                  data-ppquote="li-quote-8"
                >
                  <p>
                    'Thank you cloudin, for beautiful, responsive, low budget
                    but well designed website. '
                  </p>
                  <div className="container-info">
                    <div className="pp"></div>
                    <div className="name">CEO</div>
                    <div className="job">Aqua care</div>
                  </div>
                </div>

                <div
                  className="quote hide-bottom quote-text-9"
                  data-ppquote="li-quote-9"
                >
                  <p>
                    'Few things in life are truly definitive. Cloudin is well on
                    its way to becoming one of them.'
                  </p>
                  <div className="container-info">
                    <div className="pp"></div>
                    <div className="name">Lokeshwaran</div>
                    <div className="job">CEO at Apple Green</div>
                  </div>
                </div>

                <div
                  className="quote hide-bottom quote-text-10"
                  data-ppquote="li-quote-10"
                >
                  <p>
                    'I always felt like my site was priority number one. So, if
                    you want a great specialized work, with a satisfying
                    professional experience, you've found your company,Cloudin.'
                  </p>
                  <div className="container-info">
                    <div className="pp"></div>
                    <div className="name">Vijay</div>
                    <div className="job">CEO at Truserve</div>
                  </div>
                </div>

                <div
                  className="quote hide-bottom quote-text-11"
                  data-ppquote="li-quote-11"
                >
                  <p>
                    'The Logo Design is creative, fast and responsive…I have
                    used them twice for my business and would use them again!'
                  </p>
                  <div className="container-info">
                    <div className="pp"></div>
                    <div className="name">Santhosh</div>
                    <div className="job">CEO at Bharatha Varshayam</div>
                  </div>
                </div>
              </div>

              <div className="container-pe-quote right">
                <div
                  className="pp-quote li-quote-7"
                  data-textquote="quote-text-7"
                >
                  <div className="img animated bounce"></div>
                </div>
                <div
                  className="pp-quote li-quote-8"
                  data-textquote="quote-text-8"
                >
                  <div className="img animated bounce"></div>
                </div>
                <div
                  className="pp-quote li-quote-9"
                  data-textquote="quote-text-9"
                >
                  <div className="img animated bounce"></div>
                </div>
                <div
                  className="pp-quote li-quote-10"
                  data-textquote="quote-text-10"
                >
                  <div className="img animated bounce"></div>
                </div>
                <div
                  className="pp-quote li-quote-11"
                  data-textquote="quote-text-11"
                >
                  <div className="img animated bounce"></div>
                </div>
                <div
                  className="pp-quote li-quote-13"
                  data-textquote="quote-text-13"
                >
                  <div className="img animated bounce"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="counter_area">
        <div className="container">
          <div className="row cntr_bg_up nagative_margin pt-50 pb-45">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single_counter text_center mb-4">
                <div className="countr_text">
                  <h1>
                    <span className="counter">850+</span>
                  </h1>
                </div>
                <div className="counter_desc">
                  <h5> Clients Worldwide</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single_counter text_center mb-4">
                <div className="countr_text">
                  <h1>
                    <span className="counter">450+</span>
                  </h1>
                </div>
                <div className="counter_desc">
                  <h5>Projects Delivered</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single_counter text_center mb-4">
                <div className="countr_text">
                  <h1>
                    <span className="counter">8+</span>
                  </h1>
                </div>
                <div className="counter_desc">
                  <h5>Countries We are operating</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single_counter text_center mb-4">
                <div className="countr_text">
                  <h1>
                    <span className="counter">99%</span>
                  </h1>
                </div>
                <div className="counter_desc">
                  <h5>Happy Customers</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
