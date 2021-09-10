import { Form, Formik } from 'formik';
import React, { Fragment, useState } from 'react';
import { matchPath, Prompt, Redirect, Route, Switch } from 'react-router-dom';

import FormikControl from '../../Form/FormikControl';
import { ContactValidation } from '../../validation/validation';

export const handleChange = (event) => {
  const keyCode = event.keyCode || event.which;

  const keyValue = String.fromCharCode(keyCode);

  if (
    /^[0-9!@":<>?;,/#~\$%\^\&*\)\(+=._\[(.*?)\]\{(.*?)\}/`/\\|]|[^'][^-]+$/g.test(
      keyValue
    )
  )
    event.preventDefault();
};

const ContactUs = () => {
  const [isValueChanged, setisValueChanged] = useState(false);
  const services = [
    {
      id: '1',
      label: 'service 1',
      value: 'service 1',
    },
    {
      id: '2',
      label: 'service 2',
      value: 'service 2',
    },
  ];
  const region = [
    {
      id: '1',
      label: 'region 1',
      value: 'region 1',
    },
    {
      id: '2',
      label: 'region 2',
      value: 'region 2',
    },
  ];
  const industry = [
    {
      id: '1',
      label: 'industry 1',
      value: 'industry 1',
    },
    {
      id: '2',
      label: 'industry 2',
      value: 'industry 2',
    },
  ];
  const handleChangeFunc = () => {
    setisValueChanged(true);
  };

  return (
    <Fragment>
      <div className="breatcome_area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome_title">
                <div className="breatcome_title_inner pb-2">
                  <h2>Contact us</h2>
                </div>
                <div className="breatcome_content">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <a href="#"> Pages</a>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <span>Contact us</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_address_area pt-80 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-55">
                <div className="section_sub_title uppercase mb-3">
                  <h6>CONTACT US</h6>
                </div>
                <div className="section_main_title">
                  <h1>We Are Here For You</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_contact_address text_center mb-30">
                <div className="contact_address_icon pb-3">
                  <i className="fa fa-map-o"></i>
                </div>
                <div className="contact_address_title pb-2">
                  <h4>Enter Your Address</h4>
                </div>
                <div className="contact_address_text">
                  <p>54/1 New sorini Asut, Melbord Austria.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_contact_address text_center mb-30">
                <div className="contact_address_icon pb-3">
                  <i className="fa fa-clock-o"></i>
                </div>
                <div className="contact_address_title pb-2">
                  <h4>Opening Hours</h4>
                </div>
                <div className="contact_address_text">
                  <p>Mon - Thu: 10:00am - 05:00pm</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_contact_address text_center mb-30">
                <div className="contact_address_icon pb-3">
                  <i className="fa fa-volume-control-phone"></i>
                </div>
                <div className="contact_address_title pb-2">
                  <h4>Contact Directly</h4>
                </div>
                <div className="contact_address_text">
                  <p>demo@example.com, 54786547521</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main_contact_area app pt-80 bg_fixed contactBg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="single_contact_abs_thumb">
                <img src="assets/images/shape1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section_title white mb-4">
                <div className="section_sub_title uppercase mb-3">
                  <h6>Contact</h6>
                </div>
                <div className="section_main_title">
                  <h1>Your information...</h1>
                </div>
              </div>

              <Formik
                validationSchema={ContactValidation([
                  { name: '', region: '', industry: '', services: '' },
                ])}
                enableReinitialize
                validateOnMount
                initialValues={{
                  name: '',
                  region: '',
                  industry: '',
                  services: '',
                }}
                onSubmit={(values, actions) => {
                  console.log(values);
                  setisValueChanged(false);
                  this.handleSubmit(values);
                }}
              >
                {(formik) => {
                  const {
                    values,
                    errors,
                    setFieldValue,
                    setFieldTouched,
                    handleSubmit,
                    handleBlur,
                  } = formik;
                  const propsvalues = {
                    errors: formik.errors,
                    touched: formik.touched,
                    values: values,
                  };

                  let formikdirty = false;
                  if (isValueChanged) {
                    formikdirty = true;
                  }

                  return (
                    <>
                      <Prompt
                        when={formikdirty}
                        message={() => {
                          return matchPath({ path: '/home' })
                            ? true
                            : 'Are you sure you want to navigate away?';
                        }}
                      />
                      <div className="col-sm-12">
                        <div className="row">
                          <div className="col-sm-12 data-column">
                            <FormikControl
                              control="input"
                              type="text"
                              name="name"
                              label="Name"
                              value={values.name}
                              positiveValidation={false}
                              placeHolder=""
                              onKeyPress={handleChangeFunc}
                              {...propsvalues}
                              maxlength={25}
                              // divlabelClass="col-sm-6"
                              // diFieldClass="col-sm-6"
                              onBlur={handleBlur}
                            />

                            <FormikControl
                              control="select"
                              value={values.region}
                              onChange={setFieldValue}
                              onBlur={setFieldTouched}
                              onKeyPress={handleChangeFunc}
                              options={
                                region &&
                                region.map((item) => ({
                                  id: item.id,
                                  label: item.label,
                                  value: item.value,
                                }))
                              }
                              type="selectDropdown"
                              name="region"
                              label="region"
                              positiveValidation={false}
                              {...propsvalues}
                              // divlabelClass="col-sm-6"
                              // diFieldClass="col-sm-6"
                            />
                            <FormikControl
                              control="select"
                              value={values.industry}
                              onChange={setFieldValue}
                              onBlur={setFieldTouched}
                              onKeyPress={handleChangeFunc}
                              options={
                                industry &&
                                industry.map((item) => ({
                                  id: item.id,
                                  label: item.label,
                                  value: item.value,
                                }))
                              }
                              type="selectDropdown"
                              name="industry"
                              label="Industry"
                              positiveValidation={false}
                              {...propsvalues}
                              // divlabelClass="col-sm-6"
                              // diFieldClass="col-sm-6"
                            />
                            <FormikControl
                              control="select"
                              value={values.services}
                              onChange={setFieldValue}
                              onBlur={setFieldTouched}
                              onKeyPress={handleChangeFunc}
                              options={
                                services &&
                                services.map((item) => ({
                                  id: item.id,
                                  label: item.label,
                                  value: item.value,
                                }))
                              }
                              type="selectDropdown"
                              name="services"
                              label="Services"
                              positiveValidation={false}
                              {...propsvalues}
                              // divlabelClass="col-sm-6"
                              // diFieldClass="col-sm-6"
                            />
                            <FormikControl
                              control="textarea"
                              type="text"
                              name="subject"
                              label="Subject"
                              value={values.subject}
                              positiveValidation={false}
                              placeHolder=""
                              {...propsvalues}
                              maxlength={500}
                              onBlur={(e) => {
                                handleBlur(e);
                              }}
                              onKeyPress={handleChangeFunc}
                            />
                          </div>
                        </div>
                        <div className="row justify-content-md-center">
                          <div className="col-sm-6 align-self-center action-column">
                            <div className="quote_btn">
                              <button
                                className="btn"
                                type="submit"
                                onClick={(e) => handleSubmit(e)}
                                disabled={!formik.isValid}
                              >
                                Send Message
                              </button>
                            </div>
                             
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>

       
    </Fragment>
  );
};
export default ContactUs;
