import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  company_id: yup.string().nullable().required(),
  invited_user_id: yup.string().nullable().required(),
  inviter_user_id: yup.string().nullable().required(),
});
