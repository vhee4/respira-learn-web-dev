import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import { DropdownInput, StyledButton } from '../../../../../components';
import { selectRoleFormValidationSchema } from './SelectRoleForm.validations';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { roleLists } from './SelectRoleForm.data';
import { getUserDetails, updateUserRole } from '../../../../../redux/slices/auth/features';
import useToast from '../../../../../utils/helpers/general/useToast';
import { ERROR_OCCURED_MESSAGE } from '../../../../../utils/constant';

import styles from './SelectRoleForm.module.scss';

const SelectRoleForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isUpdatingUserRole, user } = useAppSelector((state) => state.auth);

  const toast = useToast();
  const selectRoleFormFormik = useFormik({
    validationSchema: selectRoleFormValidationSchema,
    initialValues: {
      role: ''
    },
    onSubmit: async (values) => {
      handleUpdateUserRole(values?.role, dispatch);
    }
  });

  const handleUpdateUserRole = async (
    userRole: string,
    dispatch: ReturnType<typeof useAppDispatch>
  ) => {
    const actionResult = await dispatch(updateUserRole({ newRole: userRole }));
    if (updateUserRole.fulfilled.match(actionResult)) {
      const { status, message } = actionResult.payload;
      if (status && status === 200) {
        await dispatch(getUserDetails());
        toast.success(message);
        navigate('/dashboard/content-passage');
      }
    } else if (updateUserRole.rejected.match(actionResult)) {
      const errorMessage = actionResult.error?.message || ERROR_OCCURED_MESSAGE;
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    if (user?.role) {
      selectRoleFormFormik.setFieldValue('role', user?.role);
    }
  }, [user?.role]);

  return (
    <form className={styles?.SelectRoleFormWrapper} onSubmit={selectRoleFormFormik.handleSubmit}>
      <div className={styles?.SelectRoleFormWrapper__input}>
        <DropdownInput
          noOrder
          options={roleLists}
          placeholder="eg. Software Enginner"
          name="role"
          value={selectRoleFormFormik.values.role}
          onChange={selectRoleFormFormik.handleChange}
          error={selectRoleFormFormik.submitCount > 0 ? selectRoleFormFormik.errors.role : null}
        />
      </div>
      <StyledButton
        title={isUpdatingUserRole ? 'Loading...' : 'Proceed'}
        className={styles?.SelectRoleFormWrapper__btn}
        type="submit"
      />
    </form>
  );
};

export default SelectRoleForm;
