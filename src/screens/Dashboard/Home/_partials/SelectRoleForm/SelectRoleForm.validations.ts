import * as Yup from 'yup';

export const selectRoleFormValidationSchema = Yup.object().shape({
  role: Yup.string().required('Role is required')
});
