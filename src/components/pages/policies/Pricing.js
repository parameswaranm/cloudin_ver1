import React, { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Fragment>
      <div className="breatcome_area d-flex align-items-center">
        <div className="container breadcrumb_align_lft">
          <div className="row">
            <div className="col-lg-12">
              <div className=" ">
                <div className="breatcome_title_inner pb-2">
                  <h2> Pricing policy</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <NavLink activeClassName="active" to="/home">Home</NavLink>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <NavLink activeClassName="active" to="/privacy">Policies</NavLink>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <span> Pricing policy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature_area pt-80 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-55">
                <div className="section_main_title">
                  <h1> Pricing Policy</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="feature_style_five mb-30">
                <div className="feature_style_five_cion mb-20">
                  <i className="fa fa-video-camera"></i>
                </div>
                <div className="feature_style_five_title mb-3">
                  <h4>Price Range</h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    At Cloudin we have customised pricing according to the
                    services rendered by us. The details are provided to you
                    beforehand according to the effort, efficiency and the
                    output of the service. Typically the range of transactions
                    on our website varies from INR 1 to 50k Approx.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="feature_style_five mb-30">
                <div className="feature_style_five_cion mb-20">
                  <i className="fa fa-server"></i>
                </div>
                <div className="feature_style_five_title mb-3">
                  <h4>Schedule Of Payment</h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    Some of our services can be utilised for fixed durations. In
                    such cases, it is clearly mentioned within the description
                    of these services. The period of usage in these cases vary
                    from 1 month to 1 year.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="feature_style_five mb-30">
                <div className="feature_style_five_cion mb-20">
                  <i className="fa fa-cloud"></i>
                </div>
                <div className="feature_style_five_title mb-3">
                  <h4>Disclosure</h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    We may disclose your personal information if we are required
                    by law to do so or if you violate our Terms of Service.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="feature_style_five mb-30">
                <div className="feature_style_five_cion mb-20">
                  <i className="fa fa-desktop"></i>
                </div>
                <div className="feature_style_five_title mb-3">
                  <h4> Price Matching</h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    At Cloudin we are committed to offering you the best
                    possible prices. We will be glad to meet our competitor's
                    pricing if you ever find an item that we offer, in the same
                    color and size, available from a similar retailer. We are
                    unable to match prices from auction and outlet stores or
                    websites, as well as other retailers' discount promotions,
                    shipping offers and gift card offers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="feature_style_five mb-30">
                <div className="feature_style_five_cion mb-20">
                  <i className="fa fa-server"></i>
                </div>
                <div className="feature_style_five_title mb-3">
                  <h4>Sale Adjustment</h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    If an item you have purchased is reduced in price within two
                    weeks of your order date, we will happily adjust the sale
                    price for you. Please note that we can only make one sale
                    adjustment per item and designer goods originally purchased
                    on sale are excluded.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="feature_style_five mb-30">
                <div className="feature_style_five_cion mb-20">
                  <i className="fa fa-cloud"></i>
                </div>
                <div className="feature_style_five_title mb-3">
                  <h4>Pricing Errors</h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    We work hard to ensure the accuracy of pricing. Despite our
                    efforts, pricing errors may still occur. If an item's price
                    is higher than the price displayed, we will cancel your
                    order of that item and notify you of the cancellation.
                  </p>
                  <p>
                    Our Customer Service Specialists are ready to assist
                    you—simply call 9626227000 24 hours a day.
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
export default Pricing;
