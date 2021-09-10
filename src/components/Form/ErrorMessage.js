import { ErrorMessage } from 'formik';
import React from 'react';

import TextError from './TextError';

const ErrorMessageDisplay = (props) => {
    const { name, touched, errors, selectError, positiveValidation } = props;
    let error;
    if (errors[name] && touched[name]) {
        error = true;
    }
    let className;
    let errortxt;
    if (!selectError) {
        className = 'fa-stack icon';
    } else {
        className = 'fa-stack select-icon';
    }

    if (error && errors[name] && touched[name]) {
        errortxt = (
            <span className={className}>
                <i className="fa fa-circle-thin fa-stack-2x"></i>
                <i className="fa fa-exclamation fa-stack-1x"></i>
            </span>
        );
    } else if (touched[name] === true && errors[name] === undefined && error === undefined && positiveValidation !== false) {
        errortxt = <i className="fa fa-check fa-lg check-icon" />;
    }
    return (
        <React.Fragment>
            {props.itemType && <span className="validation-icon"> {errortxt}</span>}
            <ErrorMessage component={TextError} name={name} />
        </React.Fragment>
    );
};

export default ErrorMessageDisplay;
