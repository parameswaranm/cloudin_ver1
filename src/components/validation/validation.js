import * as yup from 'yup';

import { FIELD_REQUIRED } from './constants';

const ContactValidation = () => {
  let validation = {
    name: yup.string().required(FIELD_REQUIRED),
    region: yup.object().required(FIELD_REQUIRED),
    industry: yup.object().required(FIELD_REQUIRED),
    country: yup.object().required(FIELD_REQUIRED),
    services: yup.object().required(FIELD_REQUIRED),
    subject: yup.string().required(FIELD_REQUIRED),
  };
  return yup.object().shape(validation);
};
export { ContactValidation };
