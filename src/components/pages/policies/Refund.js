import React, { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Refund = () => {
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
                  <h2> Refund policy</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <NavLink activeClassName="active" to="/home">Home</NavLink>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <NavLink activeClassName="active" to="/privacy">Policies</NavLink>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <span> Refund policy</span>
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
                  <h1> Refund Policy</h1>
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
                  <h4>Returns</h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    {' '}
                    Our policy lasts 30 days. If 30 days have gone by since your
                    purchase, unfortunately we can’t offer you a refund or
                    exchange. To be eligible for a return, your item must be
                    unused and in the same condition that you received it. It
                    must also be in the original packaging. Several types of
                    goods are exempt from being returned. Perishable goods such
                    as food, flowers, newspapers or magazines cannot be
                    returned. We also do not accept products that are intimate
                    or sanitary goods, hazardous materials, or flammable liquids
                    or gases.{' '}
                  </p>
                  <ul>
                    Additional non-returnable items : <li>Gift cards</li>
                    <li>Downloadable software products</li>
                    <li>Some health and personal care items</li>
                  </ul>
                  <p>
                    {' '}
                    To complete your return, we require a receipt or proof of
                    purchase. Please do not send your purchase back to the
                    manufacturer. There are certain situations where only
                    partial refunds are granted: (if applicable) Book with
                    obvious signs of use CD, DVD, VHS tape, software, video
                    game, cassette tape, or vinyl record that has been opened.
                    Any item not in its original condition, is damaged or
                    missing parts for reasons not due to our error. Any item
                    that is returned more than 30 days after delivery.{' '}
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
                  <h4>Refunds (If Applicable)</h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    Once your return is received and inspected, we will send you
                    an email to notify you that we have received your returned
                    item. We will also notify you of the approval or rejection
                    of your refund. If you are approved, then your refund will
                    be processed, and a credit will automatically be applied to
                    your credit card or original method of payment, within a
                    certain amount of days.
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
                  <h4>Late Or Missing Refunds (If Applicable)</h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    If you haven’t received a refund yet, first check your bank
                    account again. Then contact your credit card company, it may
                    take some time before your refund is officially posted. Next
                    contact your bank. There is often some processing time
                    before a refund is posted. If you’ve done all of this and
                    you still have not received your refund yet, please contact
                    us at mail2cloudin@gmail.com.
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
                  <h4>Sale Items (If Applicable)</h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    Only regular priced items may be refunded, unfortunately
                    sale items cannot be refunded.
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
                  <h4>Exchanges (If Applicable)</h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    We only replace items if they are defective or damaged. If
                    you need to exchange it for the same item, send us an email
                    at info@cloudinteam.com and send your item to: 622 Manglam
                    Electronic Market Jaipur Rajasthan India 302001.
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
                  <h4>Gifts</h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    If the item was marked as a gift when purchased and shipped
                    directly to you, you’ll receive a gift credit for the value
                    of your return. Once the returned item is received, a gift
                    certificate will be mailed to you. If the item wasn’t marked
                    as a gift when purchased, or the gift giver had the order
                    shipped to themselves to give to you later, we will send a
                    refund to the gift giver and he will find out about your
                    return.
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
                  <h4>Shipping</h4>
                </div>
                <div className="feature_style_five_text">
                  <p>
                    To return your product, you should mail your product to:
                    Cloudin Technologies, Peelamedu You will be responsible for
                    paying for your own shipping costs for returning your item.
                    Shipping costs are non-refundable. If you receive a refund,
                    the cost of return shipping will be deducted from your
                    refund. Depending on where you live, the time it may take
                    for your exchanged product to reach you, may vary. If you
                    are shipping an item over $75, you should consider using a
                    trackable shipping service or purchasing shipping insurance.
                    We don’t guarantee that we will receive your returned item.
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
export default Refund;
