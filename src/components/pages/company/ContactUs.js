import { Formik } from 'formik';
import React, { Fragment } from 'react';

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
  const services = [
    {
    id: 'service 1',
    label:'service 1',
    value:'service 1',
    },
    {
      id: 'service 2',
      label:'service 2',
      value:'service 2',
      }
  ]
  return (
    <Fragment>
      <Formik
        validationSchema={ContactValidation([{ firstname: '', services:'' }])}
        enableReinitialize
        validateOnMount
        initialValues={{ firstname: '', services:'' }}
        onSubmit={(values, actions) => {
          console.log(values);
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

          return (
            <>
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-10 data-column">
                    <FormikControl
                      control="input"
                      type="text"
                      name="firstname"
                      label="Firstname"
                      value={values.firstname}
                      positiveValidation={false}
                      placeHolder=""
                      //onKeyPress={handleChange}
                      {...propsvalues}
                      maxlength={25}
                      divlabelClass="col-sm-6"
                      diFieldClass="col-sm-6"
                      onBlur={handleBlur}
                    />
                  </div>
                  <FormikControl
                    control="select"
                    value={values.services}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
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
                    label= "Services"
                    positiveValidation={false}
                    {...propsvalues}                     
                    divlabelClass="col-sm-6"
                    diFieldClass="col-sm-6"
                  />
                  <div className="col-sm-2 align-self-center action-column">
                    <div>
                      <button
                        type="submit"
                        className="btn save-btn mt-3"
                        onClick={(e) => handleSubmit(e)}
                        disabled={!formik.isValid}
                      >
                        {' '}
                        Submit{' '}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </Formik>
      <div className="pt-80 "></div>
    </Fragment>
  );
};
export default ContactUs;
