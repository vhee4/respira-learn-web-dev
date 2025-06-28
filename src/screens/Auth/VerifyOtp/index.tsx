import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OTPInput from 'otp-input-react';

import { AuthBackground, StyledButton } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import useToast from '../../../utils/helpers/general/useToast';

import styles from './VerifyOtp.module.scss';
import formatSeconds from '../../../utils/helpers/general/formatSeconds';
import { resendOtp, verifyOtp } from '../../../redux/slices/auth/features';
import { ERROR_OCCURED_MESSAGE } from '../../../utils/constant';
import { maskEmail } from '../../../utils/helpers/general/maskEmail';

const VerifyOtp = () => {
  const location = useLocation();
  // Get the query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  // Retrieve and decode the 'email' parameter
  const email = decodeURIComponent(queryParams.get('email') || '');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [pin, setPin] = useState('');
  const [time, setTime] = useState(120);
  const { isVerifyingOtp, isResendingOtp } = useAppSelector((state) => state.auth);

  useEffect(() => {
    setTime(120);
    const id = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => {
      clearInterval(id);
      setTime(120);
    };
  }, []);

  const handleResendOtp = async (email: string, dispatch: ReturnType<typeof useAppDispatch>) => {
    const actionResult = await dispatch(resendOtp(email));
    if (resendOtp.fulfilled.match(actionResult)) {
      const { status, message } = actionResult.payload;
      if (status && status === 200) {
        toast.success(message || '');
      }
    } else if (resendOtp.rejected.match(actionResult)) {
      const errorMessage = actionResult.error?.message || ERROR_OCCURED_MESSAGE;
      toast.error(errorMessage);
    }
  };

  const handleVerification = async (
    email: string,
    otp: string,
    dispatch: ReturnType<typeof useAppDispatch>
  ) => {
    const actionResult = await dispatch(verifyOtp({ email, otp }));
    if (verifyOtp.fulfilled.match(actionResult)) {
      const { status, message } = actionResult.payload;
      if (status && status === 200) {
        toast.success(message || '');
        navigate('/');
      }
    } else if (verifyOtp.rejected.match(actionResult)) {
      const errorMessage = actionResult.error?.message || ERROR_OCCURED_MESSAGE;
      toast.error(errorMessage);
    }
  };

  return (
    <AuthBackground
      headText="Verify your code"
      subText={`Enter the passcode you just received on your email address ending with ${maskEmail(
        email
      )}`}
      customSubTextClassName={styles?.verifyOtpWrapper__containerSubText}>
      <div className={styles?.verifyOtpWrapper}>
        <div className={styles?.verifyOtpWrapper__pin}>
          <OTPInput
            className={styles?.verifyOtpWrapper__pinWrapper}
            inputClassName={styles?.verifyOtpWrapper__pinInput}
            value={pin}
            onChange={setPin}
            autoFocus={false}
            OTPLength={6}
            otpType="number"
            disabled={false}
            secure
          />
        </div>

        <div className={styles?.verifyOtpWrapper__resend}>
          {time > 0 ? (
            <p className={styles?.verifyOtpWrapper__resendText}>
              Resend{' '}
              <span className={styles?.verifyOtpWrapper__resendTimer}>{formatSeconds(time)}</span>
            </p>
          ) : (
            <p className={styles?.verifyOtpWrapper__resendText}>
              Didn&apos;t get any code?{' '}
              <span
                className={`${styles?.verifyOtpWrapper__resendTimer} ${styles?.verifyOtpWrapper__resendClickable}`}
                onClick={() => handleResendOtp(email, dispatch)}>
                {isResendingOtp ? 'Resending..' : 'Resend'}
              </span>
            </p>
          )}
        </div>

        <div className={styles?.verifyOtpWrapper__btnWrapper}>
          <StyledButton
            type="submit"
            title={isVerifyingOtp ? 'Loading...' : 'Verify'}
            className={styles.verifyOtpWrapper__btn}
            disabled={pin.length < 6 || isVerifyingOtp}
            onClick={() => handleVerification(email, pin, dispatch)}
          />
        </div>
      </div>
    </AuthBackground>
  );
};

export default VerifyOtp;
