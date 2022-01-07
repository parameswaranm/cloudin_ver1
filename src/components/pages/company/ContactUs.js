import axios from 'axios';
import emailjs from 'emailjs-com';
import { Form, Formik } from 'formik';
import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { matchPath, Prompt } from 'react-router-dom';

import cloudinConfig from '../../../store/config';
// import { Context } from '../../../store/Context';
import FormikControl from '../../Form/FormikControl';
import { ContactValidation } from '../../validation/validation';

// export const handleChange = (event) => {
//   const keyCode = event.keyCode || event.which;
//   const keyValue = String.fromCharCode(keyCode);
//   if (
//     /^[0-9!@":<>?;,/#~\$%\^\&*\)\(+=._\[(.*?)\]\{(.*?)\}/`/\\|]|[^'][^-]+$/g.test(
//       keyValue
//     )
//   )
//     event.preventDefault();
// };

const ContactUs = (props) => {
  const [isValueChanged, setisValueChanged] = useState(false);
  //const [state, dispatch] = useContext(Context);
  const [country, setCountry] = useState(false);
  const [postsData, setpostsData] = useState([]);
  const [submitConfirm, setSubmitConfirm] = useState(false);

  // const [testProp, settestProp] = React.useState(null);
  //const context2 = useContext(Context);

  const services = [
    {
      id: '1',
      label: 'Artificial Intelligence',
      value: 'Artificial Intelligence',
    },
    {
      id: '2',
      label: 'ML & NLP',
      value: 'ML & NLP',
    },
    {
      id: '3',
      label: 'Blockchain Technology',
      value: 'Blockchain Technology',
    },
    {
      id: '4',
      label: 'Chatbot',
      value: 'Chatbot',
    },
    {
      id: '5',
      label: 'Cloud Services',
      value: 'Cloud Services',
    },
    {
      id: '6',
      label: 'React Native Development',
      value: 'React Native Development',
    },
    {
      id: '7',
      label: 'IT Consulting Services',
      value: 'IT Consulting Services',
    },
    {
      id: '8',
      label: 'Mobile App Development',
      value: 'Mobile App Development',
    },
    {
      id: '9',
      label: 'Web Application',
      value: 'Web Application',
    },
    {
      id: '10',
      label: 'UI / UX Design',
      value: 'UI / UX Design',
    },
    {
      id: '11',
      label: 'Virtual Assistant',
      value: 'Virtual Assistant',
    },
  ];
  const region = [
    {
      id: '1',
      label: 'Africa',
      value: 'Africa',
    },
    {
      id: '2',
      label: 'Americas',
      value: 'Americas',
    },
    {
      id: '3',
      label: 'Asia',
      value: 'Asia',
    },
    {
      id: '4',
      label: 'Europe',
      value: 'Europe',
    },
    {
      id: '5',
      label: 'Oceania',
      value: 'Oceania',
    },
  ];
  const industry = [
    {
      id: '1',
      label: 'Accounting',
      value: 'Accounting  ',
    },
    {
      id: '2',
      label: 'Automotive',
      value: 'Automotive',
    },

    {
      id: '3',
      label: 'Chemicals',
      value: 'Chemicals',
    },

    {
      id: '4',
      label: 'Civic/Social Organization',
      value: 'Civic/Social Organization',
    },

    {
      id: '5',
      label: 'Computer Software/Engineering',
      value: 'Computer Software/Engineering',
    },

    {
      id: '6',
      label: 'Consumer Services',
      value: 'Consumer Services',
    },

    {
      id: '7',
      label: 'Design',
      value: 'Design',
    },

    {
      id: '8',
      label: 'Farming',
      value: 'Farming',
    },
  ];
  const handleChangeFunc = () => {
    setisValueChanged(true);
  };
  const getValues = (values) => {
    if (values) {
      setisValueChanged(true);
    }
  };
  const getValuesRegion = (values) => {
    if (values) {
      setisValueChanged(true);
      if (values) {
        axios
          .get(cloudinConfig.REGION_API_URL + `/${values.label}`)
          .then((response) => {
            const postsData = response.data;
            console.log(postsData);
            //dispatch({ type: 'SET_POSTS', payload: postsData });
            setCountry(true);
            setpostsData(postsData);
          })
          .catch((error) => {
            console.log(error);
            //dispatch({ type: 'SET_ERROR', payload: error });
          });
      }
    }
  };

  const sendEmail = (object) => {
    emailjs
      .send(
        cloudinConfig.SERVICE_id,
        cloudinConfig.TEMPLATE_ID,
        object,
        cloudinConfig.USER_ID
      )
      .then(
        (result) => {
          setSubmitConfirm(true);
          console.log(result.text);
          setTimeout(() => {
            setSubmitConfirm(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Fragment>
      <div className="breatcome_area d-flex align-items-center">
        <div className="container breadcrumb_align_lft">
          <div className="row">
            <div className="col-lg-12">
              <div className=" ">
                <div className="breatcome_title_inner pb-2">
                  <h2>Contact us</h2>
                </div>
                <div className="breatcome_content">
                  {/* <h1>{context2.initialState}</h1> */}
                  <ul>
                    <li>
                      <NavLink activeClassName="active" to="/home">
                        Home
                      </NavLink>{' '}
                      <i className="fa fa-angle-right"></i>{' '}
                      <NavLink activeClassName="active" to="/aboutus">
                        Company
                      </NavLink>{' '}
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
                  <h6>Contact us</h6>
                </div>
                <div className="section_main_title">
                  <h1>We are here for you</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="single_contact_address text_center mb-30 contactBox">
                <div className="contact_address_icon pb-3">
                  <i className="fa fa-map-o"></i>
                </div>
                <div className="contact_address_title pb-2">
                  <h4>India</h4>
                </div>
                <div className="contact_address_text">
                  <p>
                    10th street, Sri sai Towers,
                    <br />
                    Axis Bank Building,
                    <br />
                    from 10th street, Sri Kumaran Cut,
                    <br />
                    from 100 feet Malabar Cut,
                    <br />
                    Coimbatore, Tamilnadu.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="single_contact_address text_center mb-30 contactBox">
                <div className="contact_address_icon pb-3">
                  <i className="fa fa-clock-o"></i>
                </div>
                <div className="contact_address_title pb-2">
                  <h4>Opening Hours</h4>
                </div>
                <div className="contact_address_text">
                  <p>Mon - Sat: 10:00am - 05:00pm</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="single_contact_address text_center mb-30 contactBox">
                <div className="contact_address_icon pb-3">
                  <i className="fa fa-volume-control-phone"></i>
                </div>
                <div className="contact_address_title pb-2">
                  <h4>Contact Directly</h4>
                </div>
                <div className="contact_address_text">
                  <p>
                    India, Contact : 0422 - 4960128,
                    <br />
                    Email : info@cloudin.email
                  </p>
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
                  <h3>Your information...</h3>
                </div>
              </div>

              <Formik
                validationSchema={ContactValidation([
                  {
                    name: '',
                    region: '',
                    country: '',
                    industry: '',
                    services: '',
                    subject: '',
                  },
                ])}
                enableReinitialize
                validateOnMount
                initialValues={{
                  name: '',
                  region: '',
                  country: '',
                  industry: '',
                  services: '',
                  subject: '',
                }}
                // onSubmit={(values, actions) => {
                //   console.log(values);
                //   setisValueChanged(false);
                //   this.handleSubmit(values);
                // }}

                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    sendEmail(values);
                    actions.setSubmitting(false);
                    actions.resetForm();
                  }, 1000);
                }}
              >
                {(formik) => {
                  const {
                    values,
                    //errors,
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
                      <Form>
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
                                onBlur={handleBlur}
                              />

                              <FormikControl
                                control="select"
                                value={values.region}
                                onChange={async (e, value) => {
                                  await setFieldValue('region', value);
                                  getValuesRegion(value);
                                  await setFieldValue('country', '');
                                }}
                                onBlur={setFieldTouched}
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
                                label="Region"
                                positiveValidation={false}
                                {...propsvalues}
                              />
                              {country && (
                                <FormikControl
                                  control="select"
                                  value={values.country}
                                  onChange={setFieldValue}
                                  onBlur={setFieldTouched}
                                  options={
                                    postsData &&
                                    postsData.map((item) => ({
                                      label: item.name.common,
                                      value: item.languages,
                                    }))
                                  }
                                  type="selectDropdown"
                                  name="country"
                                  label="Country"
                                  positiveValidation={false}
                                  {...propsvalues}
                                />
                              )}
                              <FormikControl
                                control="select"
                                value={values.industry}
                                onChange={async (e, value) => {
                                  await setFieldValue('industry', value);
                                  getValues(value);
                                }}
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
                              />
                              <FormikControl
                                control="select"
                                value={values.services}
                                onChange={async (e, value) => {
                                  await setFieldValue('services', value);
                                  getValues(value);
                                }}
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
                            {submitConfirm && (
                              <h4 className="text-secondary">
                                Form submitted successfully!...
                              </h4>
                            )}
                          </div>
                        </div>
                      </Form>
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
