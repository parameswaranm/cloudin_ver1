import React, { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Privacy = () => {
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
                  <h2> Privacy statement</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <NavLink activeClassName="active" to="/home">Home</NavLink>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <NavLink activeClassName="active" to="/privacy">Policies</NavLink>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <span> Privacy statement</span>
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
                  <h1> Privacy Statement</h1>
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
                 
                <div className="feature_style_five_text">
                  <p>
                    <b>What do we do with your Information? </b>
                    <br />
                    When you purchase something from our store, as part of the
                    buying and selling process, we collect the personal
                    information you give us such as your name, address and email
                    address. When you browse our store, we also automatically
                    receive your computer’s internet protocol (IP) address in
                    order to provide us with information that helps us learn
                    about your browser and operating system. Email marketing (if
                    applicable): With your permission, we may send you emails
                    about our store, new products and other updates.
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
                  <h4>
                     Consent
                  </h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    <b>How do you get my consent?</b>
                    <br />
                    When you provide us with personal information to complete a
                    transaction, verify your credit card, place an order,
                    arrange for a delivery or return a purchase, we imply that
                    you consent to our collecting it and using it for that
                    specific reason only. If we ask for your personal
                    information for a secondary reason, like marketing, we will
                    either ask you directly for your expressed consent, or
                    provide you with an opportunity to say no.
                  </p>
                  <p>
                    <b>How do I withdraw my consent?</b>
                    <br />
                    If after you opt-in, you change your mind, you may withdraw
                    your consent for us to contact you, for the continued
                    collection, use or disclosure of your information, at
                    anytime, by contacting us at Peelamedu, Coimbatore or
                    mailing us at: info@cloudinteam.com
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
                  <h4>
                     Disclosure
                  </h4>
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
                  <h4>
                     Payment
                  </h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    We use Razorpay for processing payments. We/Razorpay do not
                    store your card data on their servers. The data is encrypted
                    through the Payment Card Industry Data Security Standard
                    (PCI-DSS) when processing payment. Your purchase transaction
                    data is only used as long as is necessary to complete your
                    purchase transaction. After that is complete, your purchase
                    transaction information is not saved. Our payment gateway
                    adheres to the standards set by PCI-DSS as managed by the
                    PCI Security Standards Council, which is a joint effort of
                    brands like Visa, MasterCard, American Express and Discover.
                    PCI-DSS requirements help ensure the secure handling of
                    credit card information by our store and its service
                    providers. For more insight, you may also want to read terms
                    and conditions of razorpay on{' '}
                    <a href="https://razorpay.com" target="_blank">
                      https://razorpay.com
                    </a>
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
                  <h4>
                     Third-Party Services
                  </h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    In general, the third-party providers used by us will only
                    collect, use and disclose your information to the extent
                    necessary to allow them to perform the services they provide
                    to us. However, certain third-party service providers, such
                    as payment gateways and other payment transaction
                    processors, have their own privacy policies in respect to
                    the information we are required to provide to them for your
                    purchase-related transactions. For these providers, we
                    recommend that you read their privacy policies so you can
                    understand the manner in which your personal information
                    will be handled by these providers. In particular, remember
                    that certain providers may be located in or have facilities
                    that are located a different jurisdiction than either you or
                    us. So if you elect to proceed with a transaction that
                    involves the services of a third-party service provider,
                    then your information may become subject to the laws of the
                    jurisdiction(s) in which that service provider or its
                    facilities are located. Once you leave our store’s website
                    or are redirected to a third-party website or application,
                    you are no longer governed by this Privacy Policy or our
                    website’s Terms of Service. Links When you click on links on
                    our store, they may direct you away from our site. We are
                    not responsible for the privacy practices of other sites and
                    encourage you to read their privacy statements.
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
                  <h4>
                     Security
                  </h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    To protect your personal information, we take reasonable
                    precautions and follow industry best practices to make sure
                    it is not inappropriately lost, misused, accessed,
                    disclosed, altered or destroyed.
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
                  <h4>
                    Cookies
                  </h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    We use cookies to maintain session of your user. It is not
                    used to personally identify you on other websites.
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
                  <h4>
                     Age Of Consent
                  </h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    By using this site, you represent that you are at least the
                    age of majority in your state or province of residence, or
                    that you are the age of majority in your state or province
                    of residence and you have given us your consent to allow any
                    of your minor dependents to use this site.
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
                  <h4>
                     Changes To This Privacy Policy
                  </h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    We reserve the right to modify this privacy policy at any
                    time, so please review it frequently. Changes and
                    clarifications will take effect immediately upon their
                    posting on the website. If we make material changes to this
                    policy, we will notify you here that it has been updated, so
                    that you are aware of what information we collect, how we
                    use it, and under what circumstances, if any, we use and/or
                    disclose it. If our store is acquired or merged with another
                    company, your information may be transferred to the new
                    owners so that we may continue to sell products to you.
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
export default Privacy;
