import React, { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Finjo = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Fragment>
      <div className="breatcome_prdts d-flex align-items-center">
        <div className="container breadcrumb_align_lft">
          <div className="row">
            <div className="col-lg-12">
              <div className=" ">
                <div className="breatcome_title_inner pb-2">
                  <h2>Finjo</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <NavLink activeClassName="active" to="/home">Home</NavLink>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <NavLink activeClassName="active" to="/inventory">Products</NavLink>{' '}
                      <i className="fa fa-angle-right"></i> <span>Finjo</span>
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
                <img src="assets/images/finjo_side.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6">
              <div className="section_title text_left mb-40 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6>Save time </h6>
                </div>
                <div className="section_main_title">
                  <h1>
                    Simplify, speedup and automate  
                    <span> your payment collection and distribution process
                    </span>
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
                      Finjo is a centralized payment and collection hub with
                      real-time visibility and control.
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
                className="feature_style_eight mb-30 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="feature_style_eight_content">
                  <div className="feature_style_eight_icon">
                  <span className="partyImg"></span>
                    <div className="anim-icon">
                      <span className="icon icon-1"></span>
                      <span className="icon icon-2"></span>
                      <span className="icon icon-3"></span>
                    </div>
                  </div>
                  <div className="feature_style_eight_title pt-4">
                    <h4>
                       Party Allocation 
                    </h4>
                  </div>
                  <div className="feature_style_eight_text pt-15">
                    <p>
                      Allocates the collector, the borrower, its detailed
                      information to collect debt
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="feature_style_eight mb-30 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="feature_style_eight_content">
                  <div className="feature_style_eight_icon">
                  <span className="debtImg"></span>
                    <div className="anim-icon">
                      <span className="icon icon-1"></span>
                      <span className="icon icon-2"></span>
                      <span className="icon icon-3"></span>
                    </div>
                  </div>
                  <div className="feature_style_eight_title pt-4">
                    <h4>
                        Debt Collection 
                    </h4>
                  </div>
                  <div className="feature_style_eight_text pt-15">
                    <p>
                      Collector collects the debt / borrowed money from the
                      debtor / borrower and send the reports
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="feature_style_eight mb-30 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="feature_style_eight_content">
                  <div className="feature_style_eight_icon">
                  <span className="ledgerImg"></span>
                    <div className="anim-icon">
                      <span className="icon icon-1"></span>
                      <span className="icon icon-2"></span>
                      <span className="icon icon-3"></span>
                    </div>
                  </div>
                  <div className="feature_style_eight_title pt-4">
                    <h4>
                       Ledger 
                    </h4>
                  </div>
                  <div className="feature_style_eight_text pt-15">
                    <p>
                      Develops the ledger book compact design as it is a key
                      process in financial management
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="feature_style_eight mb-30 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="feature_style_eight_content">
                  <div className="feature_style_eight_icon">
                  <span className="daybookImg"></span>
                    <div className="anim-icon">
                      <span className="icon icon-1"></span>
                      <span className="icon icon-2"></span>
                      <span className="icon icon-3"></span>
                    </div>
                  </div>
                  <div className="feature_style_eight_title pt-4">
                    <h4>
                       Day Book 
                    </h4>
                  </div>
                  <div className="feature_style_eight_text pt-15">
                    <p>
                      Reports the incoming (Collection) and outgoing
                      (Distribution) of money flows with ranges of reports
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="feature_style_eight mb-30 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="feature_style_eight_content">
                  <div className="feature_style_eight_icon">
                  <span className="loanImg"></span>
                    <div className="anim-icon">
                      <span className="icon icon-1"></span>
                      <span className="icon icon-2"></span>
                      <span className="icon icon-3"></span>
                    </div>
                  </div>
                  <div className="feature_style_eight_title pt-4">
                    <h4>
                       Loan Approval 
                    </h4>
                  </div>
                  <div className="feature_style_eight_text pt-15">
                    <p>
                      Ability to approve loan based on detailed information,
                      loan repayment, mode of payment, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="feature_style_eight mb-30 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="feature_style_eight_content">
                  <div className="feature_style_eight_icon">
                  <span className="loanSummaryImg"></span>
                    <div className="anim-icon">
                      <span className="icon icon-1"></span>
                      <span className="icon icon-2"></span>
                      <span className="icon icon-3"></span>
                    </div>
                  </div>
                  <div className="feature_style_eight_title pt-4">
                    <h4>
                       Loan Summary 
                    </h4>
                  </div>
                  <div className="feature_style_eight_text pt-15">
                    <p>
                      Summarize the loan pending amount, dues, amount collect,
                      and other details of the borrower
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service_area style2 pt-5 pb-70 invent">
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="section_title text_left mb-55">
                <div className="section_main_title">
                  <h1> Finjo helps you with leading solutions</h1>
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
                <div className="single_service_icon alterClass">
                    <span className="visibilityImg"></span>
                  </div>
                  <div className="single_service_content">
                    <h4> Better visibility and control</h4>
                  </div>
                </div>
              </div>
              <div className="single_service">
                <div className="single_service_inner">
                <div className="single_service_icon alterClass">
                    <span className="agileImg"></span>
                  </div>
                  <div className="single_service_content">
                    <h4> Agile financial management</h4>
                  </div>
                </div>
              </div>

              <div className="single_service">
                <div className="single_service_inner">
                <div className="single_service_icon alterClass">
                    <span className="paperlessImg"></span>
                  </div>
                  <div className="single_service_content">
                    <h4> Paperless operations</h4>
                  </div>
                </div>
              </div>
              <div className="single_service">
                <div className="single_service_inner">
                <div className="single_service_icon alterClass">
                    <span className="acctingImg"></span>
                  </div>
                  <div className="single_service_content">
                    <h4> Accounting on the go</h4>
                  </div>
                </div>
              </div>
              <div className="single_service">
                <div className="single_service_inner">
                <div className="single_service_icon alterClass">
                    <span className="improvedImg"></span>
                  </div>
                  <div className="single_service_content">
                    <h4> Improved productivity</h4>
                  </div>
                </div>
              </div>

              <div className="single_service">
                <div className="single_service_inner">
                <div className="single_service_icon alterClass">
                    <span className="simplyfyImg"></span>
                  </div>
                  <div className="single_service_content">
                    <h4> Simplified workflows</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="section_title text_left mb-55">
                <div className="section_main_title">
                  <h1> Finjo benefits your organization</h1>
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
                <div className="single_service_icon alterClass">
                    <span className="reducedImg"></span>
                  </div>
                  <div className="single_service_content">
                    <h4>
                      {' '}
                      Reduced risk of float money due to real time processing
                    </h4>
                  </div>
                </div>
              </div>

              <div className="single_service">
                <div className="single_service_inner">
                <div className="single_service_icon alterClass">
                    <span className="efficientImg"></span>
                  </div>
                  <div className="single_service_content">
                    <h4> Increased efficiency with transparency of payments</h4>
                  </div>
                </div>
              </div>

              <div className="single_service">
                <div className="single_service_inner">
                <div className="single_service_icon alterClass">
                    <span className="rcptImg"></span>
                  </div>
                  <div className="single_service_content">
                    <h4> Instant receipt notification and faster recoveries</h4>
                  </div>
                </div>
              </div>

              <div className="single_service">
                <div className="single_service_inner">
                <div className="single_service_icon alterClass">
                    <span className="reducedCostImg"></span>
                  </div>
                  <div className="single_service_content">
                    <h4>
                      {' '}
                      Reduced cost of collections/approvals with lesser visits
                      and frauds
                    </h4>
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
export default Finjo;
