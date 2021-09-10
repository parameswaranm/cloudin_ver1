import React from 'react';

import Input from './Input';
import SelectDropDown from './SelectDropDown';
import Textarea from './Textarea';

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'select':
      return <SelectDropDown {...rest} />;     
    default:
      return null;
  }
};
export default FormikControl;
