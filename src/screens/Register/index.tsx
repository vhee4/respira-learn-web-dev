import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { AuthBackground, InputField, StyledButton } from '../../components';
import { registerValidationSchema } from './registerValidationSchema.validation';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { register } from '../../redux/slices/auth/features';
import { ERROR_OCCURED_MESSAGE } from '../../utils/constant';
import useToast from '../../utils/helpers/general/useToast';

import styles from './Register.module.scss';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { isRegisteringUser } = useAppSelector((state) => state.auth);
  const registerFormik = useFormik({
    validationSchema: registerValidationSchema,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: async (values) => {
      handleRegister(
        values?.firstName,
        values?.lastName,
        values?.email,
        values?.confirmPassword,
        dispatch
      );
    }
  });

  const handleRegister = async (
    firstName: string,
    lastName: string,
    email: string,
    confirmPassword: string,
    dispatch: ReturnType<typeof useAppDispatch>
  ) => {
    const actionResult = await dispatch(
      register({ firstName, lastName, email, password: confirmPassword })
    );
    if (register.fulfilled.match(actionResult)) {
      const { status, message, data } = actionResult.payload;
      if (status && status === 201) {
        toast.success(message || '');

        // Encode the email before using it as a query parameter
        const encodedEmail = encodeURIComponent(data?.email);

        // Navigate to the verify OTP page with the encoded email
        navigate(`/verify-otp?email=${encodedEmail}`);
      }
    } else if (register.rejected.match(actionResult)) {
      const errorMessage = actionResult.error?.message || ERROR_OCCURED_MESSAGE;
      toast.error(errorMessage);
    }
  };

  return (
    <AuthBackground
      headText="Signup"
      subText="Fill in the details below, and let the journey begin!">
      <form className={styles?.registerWrapper} onSubmit={registerFormik.handleSubmit}>
        <div className={styles?.registerWrapper__inputWrapper}>
          <InputField
            label="First Name"
            name="firstName"
            title="First Name"
            placeholder="First Name"
            value={registerFormik.values.firstName}
            autoComplete="off"
            onChange={registerFormik.handleChange}
            error={registerFormik.submitCount > 0 && registerFormik.errors.firstName}
            onBlur={registerFormik.handleBlur}
          />

          <InputField
            label="Last Name"
            name="lastName"
            title="Last Name"
            placeholder="Last Name"
            value={registerFormik.values.lastName}
            autoComplete="off"
            onChange={registerFormik.handleChange}
            error={registerFormik.submitCount > 0 && registerFormik.errors.lastName}
            onBlur={registerFormik.handleBlur}
          />

          <InputField
            label="Email Address"
            name="email"
            title="Email Address"
            placeholder="Email Address"
            value={registerFormik.values.email}
            autoComplete="off"
            onChange={registerFormik.handleChange}
            error={registerFormik.submitCount > 0 && registerFormik.errors.email}
            onBlur={registerFormik.handleBlur}
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            title="Password"
            placeholder="Password"
            autoComplete="off"
            value={registerFormik.values.password}
            onChange={registerFormik.handleChange}
            error={registerFormik.submitCount > 0 && registerFormik.errors.password}
            onBlur={registerFormik.handleBlur}
          />

          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            title="Confirm Password"
            placeholder="Confirm Password"
            autoComplete="off"
            value={registerFormik.values.confirmPassword}
            onChange={registerFormik.handleChange}
            error={registerFormik.submitCount > 0 && registerFormik.errors.confirmPassword}
            onBlur={registerFormik.handleBlur}
          />
        </div>

        <div className={styles?.registerWrapper__btnWrapper}>
          <StyledButton
            type="submit"
            title={isRegisteringUser ? 'Loading...' : 'Register'}
            className={styles.registerWrapper__btn}
            disabled={isRegisteringUser}
          />
        </div>

        <div className={styles?.registerWrapper__registerHereWrapper}>
          <p>
            Already have an account?{' '}
            <Link to="/" className={styles?.registerWrapper__registerHere}>
              Login
            </Link>
          </p>
        </div>
      </form>
    </AuthBackground>
  );
};

export default Register;
