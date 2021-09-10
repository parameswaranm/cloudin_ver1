import { Field } from 'formik';
import React from 'react';

import ErrorMessageDisplay from './ErrorMessage';

const TextArea = (props) => {
    
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
        noCounts,
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
                 
                <div className={`label-block ${divlabelClass ? divlabelClass : 'col-sm-3'}`}>
                    <label htmlFor={name} className={!fieldOptional ? `mandatory-label` : ''}>
                        {label}
                    </label>
                </div>
                
                <div className={`formControl-container text-left validation ${diFieldClass ? diFieldClass : 'col-sm-7'}`}>
                     
                        <Field
                            as="textarea"
                            {...rest}
                            name={name}
                            id={name}
                            type={type}
                            className={`form-control ${error ? 'error-input' : ''} ${positiveValidation ? 'valid-input' : ''} ${
                                inputClassName ? inputClassName : ''
                            }`}
                            autoComplete="off"
                            placeholder={placeHolder}
                            value={value}
                            disabled={disabled}
                            pattern={pattern}
                            maxLength={maxlength}
                            rows="4"
                        />
                     
                    <ErrorMessageDisplay {...props} />
                     
                    { value && <small className="text-secondary m-0">Characters: {value.length} / {maxlength} Left {maxlength-value.length}</small>} 
                </div>
            </div>
        </React.Fragment>
    );
};

export default TextArea;
