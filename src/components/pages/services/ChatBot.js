import React, { Fragment, useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Fragment>
      <div className="breatcome_chatbot d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome_title">
                <div className="breatcome_title_inner pb-2">
                  <h2>Chatbot</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="#">Home</a>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <a href="#"> Pages</a>{' '}
                      <i className="fa fa-angle-right"></i> <span>Chatbot</span>
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
                  <h6>Chatbot development </h6>
                </div>
                <div className="section_main_title">
                  <h1>
                    Decoding intelligent man-machine conversations
                    <span> our conversational AI</span>
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
                      Chatbots are more than messaging apps, it brings
                      conversational artificial intelligence capabilities to
                      existing and new applications.With the integration of AI
                      and NLP, voice and text-based chatbots are being used by
                      start-ups and enterprises alike to seamlessly execute and
                      automate tasks, or even engage with customers
                    </p>
                    <p>
                      Chatbot at Cloudin expands the scope of automation beyond
                      IT simplification and optimization by helping clients to
                      build smart conversational user interfaces on their core
                      business systems. It leverages existing enterprise
                      channels and newer channels such as social, mobile,
                      devices to provide on-demand access to enterprise
                      knowledge with ease
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
                    <h6>We are capable of adding different types of bots </h6>
                  </div>
                  <div className="section_main_title">
                    <h1>to your business process</h1>
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
                  <div className="service_style_eight bgDrkGrey">
                    <div className="service_style_eight_icon">
                      <div className="icon">
                        <i className="flaticon-data"></i>
                      </div>
                    </div>
                    <div className="service_style_eight_content white pt-4">
                      <h5> Scripted Chatbots</h5>
                      <p>
                        Scripted with pre-defined knowledge base and can reply
                        to specific queries
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="service_style_eight bgDrkGrey">
                    <div className="service_style_eight_icon">
                      <div className="icon">
                        <i className="flaticon-data"></i>
                      </div>
                    </div>
                    <div className="service_style_eight_content white pt-4">
                      <h5> Customer Support Bots</h5>
                      <p>
                        Industry wide application, they support customers with
                        their queries 24/7
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="service_style_eight bgDrkGrey">
                    <div className="service_style_eight_icon">
                      <div className="icon">
                        <i className="flaticon-data"></i>
                      </div>
                    </div>
                    <div className="service_style_eight_content white pt-4">
                      <h5> Assistant Chatbots </h5>
                      <p>
                        For internal processes, to help with queries,
                        information etc.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="service_style_eight bgDrkGrey">
                    <div className="service_style_eight_icon">
                      <div className="icon">
                        <i className="flaticon-data"></i>
                      </div>
                    </div>
                    <div className="service_style_eight_content white pt-4">
                      <h5> AI NLP Chatbots</h5>
                      <p>
                        I powered, communicates via voice and text, through web
                        and mobile apps
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="service_style_eight bgDrkGrey">
                    <div className="service_style_eight_icon">
                      <div className="icon">
                        <i className="flaticon-data"></i>
                      </div>
                    </div>
                    <div className="service_style_eight_content white pt-4">
                      <h5> Transactional Bots</h5>
                      <p>
                        Make transactions or take action within the context of a
                        conversation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="service_style_eight bgDrkGrey">
                    <div className="service_style_eight_icon">
                      <div className="icon">
                        <i className="flaticon-data"></i>
                      </div>
                    </div>
                    <div className="service_style_eight_content white pt-4">
                      <h5> Contextual Chatbots</h5>
                      <p>
                        A I and Machine Learning enabled, they learn over time
                        from experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="service_style_eight bgDrkGrey">
                    <div className="service_style_eight_icon">
                      <div className="icon">
                        <i className="flaticon-data"></i>
                      </div>
                    </div>
                    <div className="service_style_eight_content white pt-4">
                      <h5> Voice Enabled Chatbot</h5>
                      <p>
                        Voice based, personalized, answers queries, takes action
                        (think Alexa/Siri)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <h4 className="mt-40 w-75 text-center clr_both">
                  From offering chatbots services for mobile apps to building
                  bots for web and independent platforms, and social media
                  platform, Cloudin Tech Labs is a full-stack company to help
                  you in building cost-effective chatbot solutions
                </h4>
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
                  <h6>From conceptualization to execution</h6>
                </div>
                <div
                  className="section_main_title wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <h1>
                    Chatbot platform of Cloudin help Organizations to achieve
                    their goals{' '}
                  </h1>
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
                        <i className="fa fa-check-square-o"></i> Driving faster
                        resolution
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Lower
                        turnaround time
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Automating
                        rule-based processes
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Empowering
                        employees to tackle strategic responsibilities
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Enabling
                        consumers to access information on a screen 24*7
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Reducing margin
                        of error significantly
                      </span>
                    </div>

                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Driving down
                        operational costs
                      </span>
                    </div>

                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Seamlessly
                        integrates and deploy everywhere
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
export default ChatBot;
