import React, { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const JoinOurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div className="breatcome_area d-flex align-items-center">
        <div className="container breadcrumb_align_lft">
          <div className="row">
            <div className="col-lg-12">
              <div className=" ">
                <div className="breatcome_title_inner pb-2">
                  <h2>Join our team</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <NavLink activeClassName="active" to="/home">Home</NavLink> <i className="fa fa-angle-right"></i>{' '}
                      <NavLink activeClassName="active" to="/aboutus">Company</NavLink>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <span>Join our team</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog_area blog-details-area pt-20 pb-20" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="blog_details">
                    <div className="blog_dtl_content">
                      <div className="blog_dtl_top_bs pt-2">
                        <span>Why you should join Cloudin?</span>
                      </div>
                      <h3>
                        "To win in the market place you must first win in the
                        workplace"
                      </h3>
                      <p>
                        Our Founder strongly believes people must be happy
                        personally before they can contribute to the growth of
                        the company. We rarely work on weekends. We follow world
                        standard methodologies like Traction to run the business
                        efficiently; balanced at the same time growth-focused.
                        We invest in various things that make our employees
                        comfortable, right from good equipment to
                        state-of-the-art office infrastructure. We have a flat
                        organization structure, speaking to the Founder is just
                        a chat message/call away.
                      </p>

                      <h3>What is the growth opportunity?</h3>
                      <p>
                        If you have the potential, we will make sure to bring
                        them out.
                        <br />
                        We are proud and happy that our people prefer to
                        continue with us for many years.
                        <br />
                        Pretty much a high retention rate in a highly volatile
                        technology sector.
                        <br />
                        This is only possible when the employees truly believe
                        that the company takes care of them
                      </p>

                      <h3 className="greenFnt">Open Positions - 2</h3>
                      <h5>Opportunity: Back-end Developer </h5>
                      <b>Job description</b>
                      <p>
                        We are looking for an experienced Back-end developer to
                        join our IT team! As a Back end Developer, you will be
                        responsible for the server-side web application logic as
                        well as for the integration of the front-end part.
                        <br />
                        If you have outstanding programming skills and a great
                        passion for developing beautiful, innovative
                        applications, then you will love this job.
                      </p>
                      <h5>What you’ll do on the job</h5>
                      <blockquote className="mt-2">
                        <ul className="joblist">
                          <li>
                            Develop application in technologies (C#, .NET, SQL
                            Server, MongoDB, Server Management)
                          </li>

                          <li>
                            Write a clean well thought out design and code with
                            an emphasis on quality, simplicity and
                            maintainability
                          </li>

                          <li>
                            Contribute to design reviews, code reviews and test
                            case reviews.
                          </li>

                          <li>
                            Troubleshooting and debugging to optimise
                            performance.
                          </li>

                          <li>
                            Engage in DevOps and Agile practices to build
                            software.
                          </li>
                        </ul>
                      </blockquote>
                      <h5>Who’ll be a good fit:</h5>
                      <ul className="joblist2">
                        <li>
                          Should have solid understanding of Data Structures and
                          Algorithms.
                        </li>
                        <li>Must have strong knowledge in OOPS concepts</li>
                        <li>
                          3+ years of experience in programming primarily around
                          C#, ASP.NET, MVC, WebApi.
                        </li>
                        <li>
                          Good experience in multiple front-end languages and
                          libraries (HTML, CSS, JavaScript, XML, jQuery)
                        </li>
                        <li>
                          Understand and adapt to new technologies, tools,
                          methods, and processes.
                        </li>
                        <li>Strong Problem-solving skills</li>
                        <li>Excellent communication skills</li>
                        <li>
                          Passion towards continuous learning and implementation
                          of latest technologies
                        </li>
                      </ul>

                      <div className="blog_dt_title mt-4 mb-2">
                        <h5>Perks:</h5>
                      </div>
                      <p>
                        :: Collaborative and fun team. <br />
                        :: Flat organizational structure.
                        <br /> :: Rewards and recognition.
                        <br />
                        <br />
                        If this excites you, apply for this opportunity, and the
                        team would love to get on a call with you to discuss
                        further.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-lg-4 col-md-5 col-sm-12 col-xs-12 sidebar-right content-widget pdsr">
              <div className="blog-left-side widget">
                <div id="search-3" className="widget widget_search">
                  <div className="search">
                    <form action="#" method="get">
                      <input
                        type="text"
                        name=""
                        value=""
                        placeholder="Type Your Keyword"
                        title="Search for:"
                      />
                      <button type="button" className="icons">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="widget_about widget sn_bd_dtl_wd">
                  <h2 className="widget-title text-center">Cloudin</h2>

                  <div className="widget_about_content">
                    <p>
                      We are people-centric and highly collaborative.
                      Prioritizing longevity, we believe we are on a marathon
                      and not on a sprint, so we focus on work-life balance and
                      happiness at the workplace.
                    </p>
                  </div>
                  <div className="widget_about_icon">
                    <a
                      href="https://www.facebook.com/cloudintechnologies/"
                      target="_blank"  rel="noreferrer"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a
                      href="https://twitter.com/cloudintech?s=21"
                      target="_blank"  rel="noreferrer"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/cloudin-tech"
                      target="_blank"  rel="noreferrer"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div id="categories-3" className="widget widget_categories">
                  <h2 className="widget-title">Job Categories</h2>
                  <ul>
                    <li className="cat-item cat-item-8">
                    <NavLink activeClassName="active" to="/joinourteam">
                        <i className="fa fa-youtube-play"></i> Back-end
                        Developer
                        <span>(2)</span>
                      </NavLink>
                    </li>
                    <li className="cat-item cat-item-10">
                    <NavLink activeClassName="active" to="/joinourteam">
                        <i className="fa fa-youtube-play"></i> UX UI Design
                        <span>(1)</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div
                  id="em_recent_post_widget-6"
                  className="widget widget_recent_data"
                >
                  <div className="single-widget-item">
                    <h2 className="widget-title">Popular Post</h2>
                    <div className="recent-post-item">
                      <div className="recent-post-image">
                        
                          <img
                            width="100"
                            height="80"
                            src="assets/images/recent1.jpg"
                            alt=""
                          />
                         
                      </div>
                      <div className="recent-post-text">
                        <h4>
                        <NavLink activeClassName="active" to="/joinourteam">3 Ways to Transform Your Business</NavLink>
                        </h4>
                        <span className="rcomment">June 16, 2021</span>
                      </div>
                    </div>
                    <div className="recent-post-item">
                      <div className="recent-post-image">
                         
                          <img
                            width="100"
                            height="80"
                            src="assets/images/recent2.jpg"
                            alt=""
                          />
                        
                      </div>
                      <div className="recent-post-text">
                        <h4>
                        <NavLink activeClassName="active" to="/joinourteam">How Important Is Design To Business.</NavLink>
                        </h4>
                        <span className="rcomment">July 16, 2021</span>
                      </div>
                    </div>
                    <div className="recent-post-item">
                      <div className="recent-post-image">
                         
                          <img
                            width="100"
                            height="80"
                            src="assets/images/recent3.jpg"
                            alt=""
                          />
                        
                      </div>
                      <div className="recent-post-text">
                        <h4>
                          <NavLink activeClassName="active" to="/joinourteam">
                            Small Business Web Design Solution.
                          </NavLink>
                        </h4>
                        <span className="rcomment">August 16, 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog_area blog-details-area pt-20 pb-20" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="blog_details">
                    <div className="blog_dtl_content">
                      <h3 className="greenFnt">Open Position - 1</h3>
                      <h5>Opportunity: UI/UX Designer</h5>
                      <b>Job description</b>
                      <p>
                        We are looking for a UI/UX Designer to turn our software
                        into easy-to-use products for our clients.
                        <br />
                        UI/UX Designer responsibilities include gathering user
                        requirements, designing graphic elements and building
                        navigation components. To be successful in this role,
                        you should have experience with design software and
                        wireframe tools. If you also have a portfolio of
                        professional design projects that includes work with
                        web/mobile applications, we’d like to meet you.
                      </p>
                      <h5>What you’ll do on the job:</h5>
                      <blockquote className="mt-2">
                        <ul className="joblist">
                          <li>
                            Gather and evaluate user requirements in
                            collaboration with product managers and engineers
                          </li>

                          <li>
                            Illustrate design ideas using storyboards, process
                            flows and sitemaps
                          </li>

                          <li>
                            Design graphic user interface elements, like menus,
                            tabs and widgets
                          </li>

                          <li>
                            Build page navigation buttons and search fields
                          </li>

                          <li>
                            Develop UI mockups and prototypes that clearly
                            illustrate how sites function and look like
                          </li>
                          <li>
                            Create original graphic designs (e.g. images,
                            sketches and tables)
                          </li>
                          <li>
                            Prepare and present rough drafts to internal teams
                            and key stakeholders
                          </li>
                          <li>
                            Identify and troubleshoot UX problems (e.g.
                            responsiveness)
                          </li>
                          <li>
                            Conduct layout adjustments based on user feedback
                          </li>
                          <li>
                            Adhere to style standards on fonts, colours and
                            images
                          </li>
                        </ul>
                      </blockquote>
                      <h5>Who’ll be a good fit:</h5>
                      <ul className="joblist2">
                        <li>
                          Proven work experience as a UI/UX Designer or similar
                          role
                        </li>
                        <li>Portfolio of design projects</li>
                        <li>
                          Knowledge of wireframe tools (e.g. Wireframe.cc and In
                          Vision)
                        </li>
                        <li>
                          Up-to-date knowledge of design software like Adobe
                          Illustrator and Photoshop
                        </li>
                        <li>
                          Team spirit; strong communication skills to
                          collaborate with various stakeholders
                        </li>
                        <li>Good time-management skills</li>
                        <li>Proven work experience as a Video Editor</li>
                        <li>
                          BSc in Design, Computer Science or relevant field
                        </li>
                      </ul>

                      <div className="blog_dt_title mt-4 mb-2">
                        <h5>Perks:</h5>
                      </div>
                      <p>
                        :: Collaborative and fun team. <br />
                        :: Flat organizational structure.
                        <br /> :: Rewards and recognition.
                        <br />
                        <br />
                        If this excites you, apply for this opportunity, and the
                        team would love to get on a call with you to discuss
                        further.
                      </p>
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
export default JoinOurTeam;
