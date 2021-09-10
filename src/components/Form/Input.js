import { Field } from 'formik';
import React from 'react';

import ErrorMessageDisplay from './ErrorMessage';

const Input = (props) => {
  const {
    label,
    name,
    maxlength,
    touched,
    errors,
    positiveValidation,
    type,
    pattern,
    fieldOptional,
    placeHolder,
    disabled,
    onKeyDown,
    value,
    classname,
    inputClassName,
    errorApi,
    divlabelClass,
    diFieldClass,
    dataTip,
    ...rest
  } = props;
  let error;
  if (errors[name] && touched[name]) {
    error = true;
  } else if (errorApi) {
    error = true;
  }

  return (
    <React.Fragment>
      <div className={classname ? 'row' + ' ' + classname : 'row mb-3'}>
        {divlabelClass === 'col-md-0' ? (
          ''
        ) : (
          <div
            className={`label-block ${
              divlabelClass ? divlabelClass : 'col-sm-3'
            }`}
          >
            <label
              htmlFor={name}
              className={!fieldOptional ? `mandatory-label` : ''}
            >
              {label}
            </label>
          </div>
        )}

        <div
          className={`formControl-container text-left validation ${
            diFieldClass ? diFieldClass : 'col-sm-7'
          }`}
        >
          <Field
            {...rest}
            name={name}
            id={name}
            type={type}
            className={`form-control ${error ? 'error-input' : ''} ${
              positiveValidation ? 'valid-input' : ''
            } ${inputClassName ? inputClassName : ''}`}
            autoComplete="off"
            placeholder={placeHolder}
            value={value}
            disabled={disabled}
            pattern={pattern}
            maxLength={maxlength}
            data-tip
            data-for={name}
          />

          <ErrorMessageDisplay {...props} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Input;
