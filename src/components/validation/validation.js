import * as yup from 'yup';

import { FIELD_REQUIRED } from './constants';

const ContactValidation = () => {  
  let validation = {
    firstname: yup.string().required(FIELD_REQUIRED),
    services: yup.object().required(FIELD_REQUIRED),
  };
  return yup.object().shape(validation);
};
export { ContactValidation };
