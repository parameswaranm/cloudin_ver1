import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import RecentImg1 from '../../assets/images/recent1.jpg';
import RecentImg3 from '../../assets/images/recent3.jpg';

const Slider = () => {
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
                  <div className="slider_content">
                    <div className="slider_text">
                      <div className="slider_text_inner">
                        <h5>Total IT Solution Here</h5>
                        <h1>
                          Experience the simplest yet the most powerful and
                          seamless techno-digital Solution
                        </h1>
                      </div>
                      <div className="slider_button pt-5 d-flex">
                        <div className="button">
                          <a href="#">
                            How IT Work{' '}
                            <i className="fa fa-long-arrow-right"></i>
                          </a>
                          <a className="active" href="#">
                            IT Services{' '}
                            <i className="fa fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="slider-video">
                        <div className="video-icon">
                          <a
                            className="video-vemo-icon venobox vbox-item"
                            data-vbtype="youtube"
                            data-autoplay="true"
                            href="https://youtu.be/BS4TUd7FJSg"
                          >
                            <i className="fa fa-play"></i>
                          </a>
                        </div>
                      </div>
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
                  <div className="slider_content">
                    <div className="slider_text">
                      <div className="slider_text_inner">
                        <h5>Total IT Solution Here</h5>
                        <h1>
                          Bridging the gap between business and technology with
                          Cloudin IT Solutions
                        </h1>
                      </div>
                      <div className="slider_button pt-5 d-flex">
                        <div className="button">
                          <a href="#">
                            How IT Work{' '}
                            <i className="fa fa-long-arrow-right"></i>
                          </a>
                          <a className="active" href="#">
                            IT Services{' '}
                            <i className="fa fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="slider-video">
                        <div className="video-icon">
                          <a
                            className="video-vemo-icon venobox vbox-item"
                            data-vbtype="youtube"
                            data-autoplay="true"
                            href="https://youtu.be/BS4TUd7FJSg"
                          >
                            <i className="fa fa-play"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- --> */}

        <div
          className="slider_area d-flex align-items-center slider3"
          id="home"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="single_slider">
                  <div className="slider_content">
                    <div className="slider_text">
                      <div className="slider_text_inner">
                        <h5>Total IT Solution Here</h5>
                        <h1>
                          Mapping the innovations that adds lasting value in
                          every direction{' '}
                        </h1>
                      </div>
                      <div className="slider_button pt-5 d-flex">
                        <div className="button">
                          <a href="#">
                            How IT Work{' '}
                            <i className="fa fa-long-arrow-right"></i>
                          </a>
                          <a className="active" href="#">
                            IT Services{' '}
                            <i className="fa fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="slider-video">
                        <div className="video-icon">
                          <a
                            className="video-vemo-icon venobox vbox-item"
                            data-vbtype="youtube"
                            data-autoplay="true"
                            href="https://youtu.be/BS4TUd7FJSg"
                          >
                            <i className="fa fa-play"></i>
                          </a>
                        </div>
                      </div>
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
                <div className="techno_flipbox_font border_grey1">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon ">
                      <div className="icon bgYellow">
                        <i className="flaticon-global-1"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>UNDERSTADING</h3>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back bgYellow">
                  <div className="techno_flipbox_inner">
                    <div className="flipbox_title">
                      <h3>UNDERSTADING</h3>
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
                <div className="techno_flipbox_font border_grey1">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon ">
                      <div className="icon bgDrkblue">
                        <i className="flaticon-data"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>IMPLEMENTATION</h3>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back bgDrkblue">
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
                <div className="techno_flipbox_font border_grey1">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgDrkPink">
                        <i className="flaticon-interaction"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>INNOVATION</h3>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back bgDrkPink">
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
                <div className="techno_flipbox_font border_grey1">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon ">
                      <div className="icon bgDrkGrey">
                        <i className="flaticon-developer"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>EXPOSURE</h3>
                    </div>
                  </div>
                </div>
                <div className="techno_flipbox_back bgDrkGrey">
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
                  <img src="assets/images/about-img.png" alt="" />
                </div>
              </div>
              <div className="single_about_shape">
                <div className="single_about_shape_thumb bounce-animate">
                  <img src="assets/images/about-circle.png" alt="" />
                </div>
              </div>
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
                    algorithm along with Engineering IOT solutions
                  </p>
                </div>
              </div>
              <div className="singel_about_left mb-30">
                <div className="singel_about_left_inner mb-3">
                  <div className="about_icon mr-4">
                    <div className="icon mt-3">
                      <i className="flaticon-padlock"></i>
                    </div>
                  </div>
                  <div className="singel-about-content">
                    <h5>Warranty Management</h5>
                    <p>
                      Morem Ipsum is simply dummy text of the printing and
                      pepesetting found.
                    </p>
                  </div>
                </div>
                <div className="singel_about_left_inner">
                  <div className="about_icon mr-4">
                    <div className="icon mt-3">
                      <i className="flaticon-code"></i>
                    </div>
                  </div>
                  <div className="singel-about-content">
                    <h5>Quality Control System</h5>
                    <p>
                      Morem Ipsum is simply dummy text of the printing and
                      pepesetting found.
                    </p>
                  </div>
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
                <div className="techno_flipbox_font">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgYellow">
                        <i className="flaticon-padlock"></i>
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
                      <a href="">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgDrkblue">
                        <i className="flaticon-intelligent"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>ML & NLP</h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Combining machine learning & natural language processing
                        boost accuracy and understand human utterances
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
                        boost accuracy and understand human utterances
                      </p>
                    </div>
                    <div className="flipbox_button">
                      <a href="">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgDrkPink">
                        <i className="flaticon-code"></i>
                      </div>
                    </div>
                    <div className="flipbox_title">
                      <h3>Blockchain Technology </h3>
                    </div>
                    <div className="flipbox_desc">
                      <p>
                        Improve traceability, transparency and tradability that
                        brings trust and accountability in businesses
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
                        brings trust and accountability in businesses
                      </p>
                    </div>
                    <div className="flipbox_button">
                      <a href="">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgBusiGreen">
                        <i className="flaticon-content-writing"></i>
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
                      <a href="">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgDrkGrey">
                        <i className="flaticon-bar-chart"></i>
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
                      <a href="">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgOrange">
                        <i className="flaticon-business-and-finance"></i>
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
                      <a href="">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgSharPink">
                        <i className="flaticon-content-writing"></i>
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
                      <a href="">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgRed">
                        <i className="flaticon-bar-chart"></i>
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
                      <a href="">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgDrkblue">
                        <i className="flaticon-business-and-finance"></i>
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
                      <a href="">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
              <div className="techno_flipbox mb-30">
                <div className="techno_flipbox_font">
                  <div className="techno_flipbox_inner">
                    <div className="techno_flipbox_icon">
                      <div className="icon bgOrange">
                        <i className="flaticon-business-and-finance"></i>
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
                      <a href="">
                        Read More<i className="fa fa-angle-double-right"></i>
                      </a>
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
                    <h4>Inventory</h4>
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
                    <h4>Mr.Business</h4>
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
                    <h4>Finjo</h4>
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
                    <h4>E-Camp</h4>
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
        <div className="video_area pb-200">
          <div className="container">
            <div className="row mrt-200">
              <div className="col-lg-12">
                <div className="single_video">
                  <div className="single_video_thumb">
                    <img src="assets/images/slider/video.png" alt="" />
                  </div>
                </div>
                <div className="single-video text-center">
                  <div className="video-icon mrt-345">
                    <a
                      className="video-vemo-icon venobox vbox-item"
                      data-vbtype="youtube"
                      data-autoplay="true"
                      href="https://youtu.be/BS4TUd7FJSg"
                    >
                      <i className="fa fa-play"></i>
                    </a>
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
                    <div className="job">USERs of marketer</div>
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
                    <div className="job">CEO At WRAPUP</div>
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
                    <div className="job">CEO At Truserve</div>
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
                    <div className="job">CEO At Bharatha Varshayam</div>
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

      <div className="footer-middle pt-95 call_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
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
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-skype"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget widget-nav-menu">
                <h4 className="widget-title pb-4">Associated with</h4>
                <div className="menu-quick-link-container ml-4">
                  <ul id="menu-quick-link" className="menu">
                    <li>
                      <a href="#">TextLocal</a>
                      <br />
                      <p className="color_yellow">
                        Condimentum rhoncus, sem quam semper libero
                      </p>
                    </li>
                    <li>
                      <a href="#">Collect ChatBot</a>
                      <br />
                      <p className="color_yellow">
                        Condimentum rhoncus, sem quam semper libero
                      </p>
                    </li>
                  </ul>
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
                    Coimbatore-641004. Tamil Nadu,
                    <br /> INDIA, Contact : 0422 - 4960128, <br />
                    Email :cloudin@cloudin.com
                  </p>
                  <p>
                    Sri Ekadantha Building, <br /> #10 2nd Cross,
                    <br /> Old Madiwala, BTM 1st Stag
                    <br /> Bangalore-68. , INDIA <br />
                    Contact : +91 90436 86520, <br />
                    Email :cloudin@cloudin.com
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
                  <h4 className="widget-title pb-3">Popular Post</h4>
                  <div className="recent-post-item active pb-3">
                    <div className="recent-post-image mr-3">
                      <a href="#">
                        <img width="80" height="80" src={RecentImg1} alt="" />
                      </a>
                    </div>
                    <div className="recent-post-text">
                      <h6>
                        <a href="#">Tiktok Illegally collecting data sharing</a>
                      </h6>
                      <span className="rcomment">December 12, 2020</span>
                    </div>
                  </div>
                  <div className="recent-post-item pt-1">
                    <div className="recent-post-image mr-3">
                      <a href="#">
                        <img width="80" height="80" src={RecentImg3} alt="" />
                      </a>
                    </div>
                    <div className="recent-post-text">
                      <h6>
                        <a href="#">How can use our latest news by</a>
                      </h6>
                      <span className="rcomment">December 15, 2020</span>
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
                  <a className="absod" href="#">
                    Privacy Policy{' '}
                  </a>
                  <a href="#"> Terms & Conditions</a>
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
