import React, { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div className="breatcome_area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome_title">
                <div className="breatcome_title_inner pb-2">
                  <h2>Team member</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <NavLink activeClassName="active" to="/home">Home</NavLink> <i className="fa fa-angle-right"></i>{' '}
                      <NavLink activeClassName="active" to="/aboutus">Company</NavLink>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <span>Team member</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team_member pt-85 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
              <div className="section_title text_left mb-40 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6>EXPERTISE OF TEAM</h6>
                </div>
                <div className="section_main_title">
                  <h1> Our Experienced Team</h1>
                  <h1>for your Business!!</h1>
                </div>
                <div className="team_member_text pt-3">
                  <p>
                    When there is a confederation and collaboration with
                    intelligence, Marvelous things can be achieved
                  </p>
                </div>
              </div>
              <div className="prfs_experience">
                <div className="headingh_experience_number">
                  <h1>6+</h1>
                </div>
                <div className="heading_experience_title">
                  <h2>Years of experience in IT Solution & Business</h2>
                </div>
              </div>
              <div className="team_member_button pt-5">
                {/* <div className="button">
                  <a href="#">
                    Team Member<i className="fa fa-long-arrow-right"></i>
                  </a>
                  <a className="active" href="#">
                    Join Our Team<i className="fa fa-long-arrow-right"></i>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
              <div className="team_join_thumb">
                <img src="assets/images/team-pages.png" width="100%" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team_area btmName bg_color2 pt-80 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-50 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6>Our CEO</h6>
                </div>
                <div className="section_main_title">
                  <h4>
                    Services needs the technology attention <br />
                    We aim to provide the best tech services
                  </h4>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="team_style_two mb-1">
                <div className="team_style_two_thumb">
                  <img src="assets/images/sakthi_ceo.jpeg" alt="" />
                </div>
                <div className="team_style_two_content">
                  <div className="team_style_two_title pb-0">
                    <h5>Sakthi Ramasamy</h5>
                    <span>Founder & CEO</span>
                  </div>
                  <div className="team_style_two_icon">
                    <a href="https://www.facebook.com/Sathya7s" target="_blank">
                      <i className="fa fa-facebook"></i>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/sakthir"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="single_team_content">
                <h4>Sakthi Ramasamy</h4>
                <span>Founder & CEO</span>
              </div>
            </div>

            <div className="col-lg-12 pt-20 text-center">
              <div className="choose_content">
                <div className="choose_content_text_bold">
                  <p>
                    Working for Technological footprints always seeks for user
                    requirements as well as customized workload.
                  </p>
                </div>
                <div className="choose_content_text">
                  <p>
                    After a long swamp we have reached 800+ clients into an
                    inventory and websites development . We are cheerful to
                    serve the products to customers with support and service in
                    a smooth path.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default OurTeam;
