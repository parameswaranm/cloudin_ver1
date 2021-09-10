import { DriveEtaTwoTone } from '@material-ui/icons';
import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Select from 'react-select';

import ErrorMessageDisplay from './ErrorMessage';

const SelectDropDown = (props) => {
  const {
    label,
    name,
    touched,
    selectedTitleOption,
    fieldOptional,
    errors,
    positiveValidation,
    options,
    defaultValue,
    value,
    isDisabled,
    dataTip,
    divlabelClass,
    alignLeft,
    diFieldClass,
    isIndemnifierDdl,
    ...rest
  } = props;

  const tooltipText = dataTip;
  const selectError = true;

  const isIndemnifier = isIndemnifierDdl;
  const [selectedOptions, setSelectedOptions] = useState(options);

  let error;
  if (errors[name] && touched[name]) {
    error = true;
  }

  const handleChange = (value) => {
    props.onChange(name, value);
    return;
  };

  const handleSelectFn = (e) => {
    let value = e;
    let takeItem = options.filter((item) => {
      return item.value == value;
    });
    value = takeItem[0];
    handleChange(value);
    //e.preventDefault();
  };

  const handleBlur = () => {
    props.onBlur(name, true);
  };

  const renderTooltip = (props) => {
    if (tooltipText) {
      return (
        <Tooltip id="button-tooltip" {...props}>
          <span className="text-left"> {tooltipText} </span>
        </Tooltip>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <React.Fragment>
      <div className="row mb-3">
        {divlabelClass === 'col-md-0' ? (
          ''
        ) : (
          <div
            className={`label-block  ${
              divlabelClass ? divlabelClass : 'col-sm-4'
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
          className={`formControl-container text-left error validation ${
            diFieldClass ? diFieldClass : 'col-sm-8'
          }`}
        >
          <Select
            data-event="focus click"
            {...rest}
            name={name}
            defaultValue={defaultValue}
            id={name}
            className={'multi-select' + ` ${error ? 'error-input' : ''}`}
            onChange={handleChange}
            onBlur={handleBlur}
            options={options}
            placeholder={
              !isIndemnifier ? 'Please select..' : 'Type to search...'
            }
            isDisabled={isDisabled}
            value={value}
          />

          <ErrorMessageDisplay {...props} selectError={selectError} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SelectDropDown;
