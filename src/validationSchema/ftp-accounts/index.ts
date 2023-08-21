import * as yup from 'yup';

export const ftpAccountValidationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  server: yup.string().required(),
  port: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
});
